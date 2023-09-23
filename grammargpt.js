"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.getErrorInfo = void 0;
const axios_1 = require("axios");

const messages = [];
let defalutPrompt =
  "You will be provided with statements, and your task is to convert them to standard English.";

function isEmpty(str) {
  return !str || str.length === 0;
}

// if option is empty, return default value
function optionOrDefault(str, defalutValue) {
  if (isEmpty(str) == true) {
    return defalutValue;
  } else {
    return str;
  }
}

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// get the content of the last `n` messages from the chat, trimmed and separated by double newlines
function getTranscript(n) {
  return messages
    .slice(-n)
    .map((m) => m.content.trim())
    .join("\n\n");
}

// the main action
const action = async (input, options) => {
  messages.length = 0;
  // if options baseurl not empty using this or openai official api url
  const baseUrl = optionOrDefault(options.baseurl, "https://api.openai.com/v1");

  const openai = axios_1.default.create({
    baseURL: baseUrl,
    headers: { Authorization: `Bearer ${options.apikey}` },
  });

  messages.push({
    role: "system",
    content: optionOrDefault(options.prompt, defalutPrompt),
  });

  messages.push({ role: "user", content: input.text });
  // send the whole message history to OpenAI
  try {
    const { data } = await openai.post("chat/completions", {
      model: options.model || "gpt-3.5-turbo",
      messages,
    });
    // add the response to the history
    messages.push(data.choices[0].message);
    // if holding shift, copy just the response.
    // else, show correction result.

    popclip.showText(getTranscript(1));

    switch (options.didGetResponse) {
      case "Paste":
        popclip.pasteText(getTranscript(1));
        break;
      case "Append":
        popclip.pasteText(input.text + "\n\n" + getTranscript(1) + "\n");
        break;
      case "Copy":
        popclip.copyText(getTranscript(1));
        break;
      default:
        break;
    }
  } catch (e) {
    popclip.showText(getErrorInfo(e));
  }
};
function getErrorInfo(error) {
  if (typeof error === "object" && error !== null && "response" in error) {
    const response = error.response;
    //return JSON.stringify(response);
    return `Message from OpenAI (code ${response.status}): ${response.data.error.message}`;
  } else {
    return String(error);
  }
}

const pastLastResult = async (input, options) => {
  if (isEmpty(getTranscript(1))) {
    popclip.showText("⚠️ No previous result");
  } else {
    popclip.pasteText(getTranscript(1));
  }
};

exports.getErrorInfo = getErrorInfo;
// export the actions
exports.actions = [
  {
    title: "GrammarGPT: Correction",
    code: action,
  },
  {
    title: "GrammarGPT: Paste last",
    icon: "icon-paste.svg",
    code: pastLastResult,
    requirements: ["option-showPaste=1"],
  },
];
