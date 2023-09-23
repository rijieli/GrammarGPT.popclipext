# GrammarGPT

PopClip 扩展，使用 OpenAI 的 GPT API 来纠正语法。

<img src="https://github.com/rijieli/GrammarGPT.popclipext/blob/9a03cae93802957393437e8dc2146baea3a4ad42/GrammarGPT.gif" width="400" alt="Demo">

**注意:需要在你的 OpenAI 账户有可用的支付方式。**

## 描述

### 安装

1. 下载并解压[GrammarGPT.popclipext.zip](https://github.com/rijieli/GrammarGPT.popclipext/releases/latest/download/GrammarGPT.popclipext.zip)。

2. 双击 GrammarGPT.popclipext 文件安装。

### 配置

#### API密钥

要使用此扩展,您需要提供OpenAI账户的API密钥。 获取API密钥:

1. 打开 <https://platform.openai.com/account/api-keys> 并登录。

2. 复制粘贴API密钥(以`sk-`开头),并粘贴到扩展设置中的 _API Key_ 字段。

#### 模型

可用值有`gpt-3.5-turbo`和`gpt-4`。 请注意,某些账户可能无法访问GPT-4模型 - 有关详细信息,请参阅OpenAI的文档。

#### 获取响应后

- 显示:不做任何操作,只显示结果。

- 粘贴:将结果粘贴到当前位置。  

- 追加:插入空行,然后粘贴结果。

- 复制:将结果复制到剪贴板。

#### 自定义提示(可选)

您可以提供自定义提示来代替默认提示。 提示应为一行文本。

默认提示来自 [OpenAI](https://platform.openai.com/examples/default-grammar):您将被提供语句,您的任务是将它们转换为标准英语。

#### 自定义 API URL(可选)

如果你不使用 OpenAI 的默认 API 端点,你可以提供一个自定义的端点。例如:`https://example.com/v1/`。

#### 粘贴上次结果按钮

在PopClip中显示一个按钮,点击它粘贴上次的结果。

### 错误

您可能会看到以下错误:

`来自OpenAI的消息(代码 429):您超出了当前配额,请检查您的计划和账单数据。`

此消息意味着您需要向 OpenAI API 帐户增加支付方式。您可以在<https://platform.openai.com/account/billing/overview>完成此操作。

## 关于

### 致谢

此扩展基于 Nick Moore 的 [ChatGPT](https://github.com/pilotmoon/PopClip-Extensions/tree/master/source/ChatGPT.popclipext)。

### 作者

Roger Lee <https://github.com/rijieli>

### 要求

需要 PopClip 2022.12 和 Open AI 平台账户。

## 更新日志 

### 2023-09-23

\- 首次发布

### 2023-09-23

\- 新增选项`获取响应后`,用于控制获取响应后的行为。