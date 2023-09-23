# GrammarGPT

EN | [[zh_CN]](https://github.com/rijieli/GrammarGPT.popclipext/blob/main/README_zhCN.md)

PopClip extension to correct grammar using OpenAI's GPT API.

<img src="https://github.com/rijieli/GrammarGPT.popclipext/blob/9a03cae93802957393437e8dc2146baea3a4ad42/GrammarGPT.gif" width="400" alt="Demo">

**Note: Requires pre-paid API credits on your OpenAI account.**

## Description

### Installation

1. Download and unzip [GrammarGPT.popclipext.zip](https://github.com/rijieli/GrammarGPT.popclipext/releases/latest/download/GrammarGPT.popclipext.zip).
2. Double-click the *GrammarGPT.popclipext* file to install.

### Configuration

#### API Key

To use this extension, you need to provide it with an API Key for an OpenAI account. To get an API Key:

1. Open <https://platform.openai.com/account/api-keys> and sign in.
2. Copy and paste the API Key (it starts with `sk-`) into the _API Key_ field in
   the extension's settings.

#### Model

Available values are `gpt-3.5-turbo` and `gpt-4`. Note that some accounts might not be able to access the GPT-4 model — see OpenAI's documentation for details.

#### After Getting Response

* Show: Do nothing just show the result.
* Paste: Paste the result to the current position.
* Append: Insert a blank line, then paste the result.
* Copy: Copy the result to the clipboard.

#### Custom prompt(optional)

You can provide a custom prompt to use instead of the default prompt. The prompt should be a single line of text.

Default prompt from [OpenAI](https://platform.openai.com/examples/default-grammar): You will be provided with statements, and your task is to convert them to standard English.

#### Custom API URL(optional)

If you not using OpenAI's default API endpoint, you can provide a custom endpoint to use instead. e.g. `https://example.com/v1/`.

#### Paste Previous Button

Show a button in PopClip, click it to paste the previous result.

### Errors

You may see the following error:

`Message from OpenAI (code 429): You exceeded your current quota, please check your plan and billing data.`

The message means you need to add some credit to you OpenAI API account. You can do this at <https://platform.openai.com/account/billing/overview>.

## About

### Acknowledgements

This extension is base on Nick Moore's [ChatGPT](https://github.com/pilotmoon/PopClip-Extensions/tree/master/source/ChatGPT.popclipext)

### Author

Roger Lee <https://github.com/rijieli>

### Requirements

Requires PopClip 2022.12 and an Open AI Platform account.

## Changelog

### 2023-09-23

- First release

### 2023-09-23

- New options `After Getting Response` to control the behavior after getting response.
