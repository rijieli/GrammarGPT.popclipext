"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = exports.getErrorInfo = void 0;
const axios_1 = require("axios");

let defalutPrompt =
  "You will be provided with statements, and your task is to convert them to standard English.";

// if option is empty, return default value
function optionOrDefault(str, defalutValue) {
  if (!str || str.length === 0) {
    return defalutValue;
  } else {
    return str;
  }
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
  const messages = [];
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
    if (popclip.modifiers.shift) {
      popclip.copyText(getTranscript(1));
    } else {
      popclip.showText(getTranscript(2));
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
exports.getErrorInfo = getErrorInfo;
// export the actions
exports.actions = [
  {
    title: "Grammar correction",
    code: action,
  },
];
