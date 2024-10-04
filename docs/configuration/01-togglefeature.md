---
title: 关闭/开启模组特殊功能
---

## 使用最新版安装器调整功能

至**最新版安装工具箱**的设置页面，点击“开启更改配置页面”后的“开启”按钮。您会发现安装器增加了“更改配置”标签页。  
您可以通过该页更改汉化模组的一些设置。

不过，在您动手修改之前，我们推荐您**先通读以下对这些设置的介绍以熟悉各个设置项目的意义**。

## 偏好文件

注：以下仅适用于最新版模组。

请您打开游戏根目录，进入`Limbus Company\BepInEx\config`文件夹。请使用**记事本**或您选择的文本编辑器打开`Com.Bright.LocalizeLimbusCompany.cfg`这个文件。  
如果您没有这个文件，那可能是因为您的模组未生效。您需要**首次成功运行模组**，才会生成本文件。

如果您不知道自己在做什么，请不要动`BepInEx.cfg`这个文件。此文件与我们的模组功能完全无关。

如果您从未更改过该文件，那么打开后这个文件看起来应该是这样：

```
## Settings file was created by plugin LimbusLocalizeMod v0.6.24
## Plugin GUID: Com.Bright.LocalizeLimbusCompany

[LLC Settings]

## 是否自动检查并下载更新 ( true | false )
# Setting type: Boolean
# Default value: false
AutoUpdate = false

## 自动更新所使用URI ( GitHub:默认 | Mirror_OneDrive:镜像,更新可能有延迟,但下载速度更快 )
# Setting type: URI
# Default value: GitHub
# Acceptable values: GitHub, Mirror_OneDrive
UpdateURI = GitHub

## 是否使用汉化 ( true | false )
# Setting type: Boolean
# Default value: true
IsUseChinese = true

## 是否随机选择载入标语,即右下角的[NOW LOADING...] ( true | false )
# Setting type: Boolean
# Default value: true
RandomLoadText = true
```

若您需要更改本文件，**请务必注意`true`和`false`的拼写，以及空格的存在**。

## 是否自动检查并下载更新
如果您不知道该选项意味着什么，请**不要**将该选项设置为`true`。  
将其保持为`false`即可。

<details>

自动检查并下载更新**不能**为您实时安装游戏更新。其只是自动下载新的更新内容，而**压缩包的展开和文件的替换仍需您来进行**。  
因此，我们仅建议**熟悉手动安装**的用户使用此功能。

若您选择启用此功能，请您同时检查并调整“**自动更新所使用URI**”项。

我们建议大部分用户选择 `Mirror_OneDrive`；若您与GitHub的连接**完全畅通**，则推荐您选择 `GitHub`。  
`Mirror_OneDrive` 基于我们的首尔服务器，并通过企业版OneDrive为您提供文件。因此，能够使用安装工具箱的用户，一般也能直接使用此下载方式。  
注：工具箱默认URI为 `GitHub`。若需更改为 `Mirror_OneDrive`，请将该行改写为 `UpdateURI = Mirror_OneDrive`。

自动更新将在检测到新版本之后在游戏开始之前弹出弹窗。弹窗样例如下：

![image](/img/page/Has_Update_Popup.png)

如果您希望**跳过一次更新提醒**，请点击**弹窗外的其他任何部分**即可。  
点击“OK”将会退出游戏并为您打开游戏根目录（就像弹窗本身所说的那样）。

如果您使用了本功能，那么**请一定记得及时删除自动下载到游戏根目录内的压缩包，以减少旧版文件堆积**！
</details>

## 是否使用汉化
- `IsUseChinese = true`  
`true`是默认值，即为使用汉化。
- `IsUseChinese = false`  
将其设置为`false`可以关闭汉化。(需要您重启游戏才能生效)

## 是否随机选择载入标语
载入标语是加载扉页中右下角进度条上方的NOW LOADING...字样。  
我们设置了一些文本，本功能将会在每次加载时从这些文本中随机选择一条取代原本字样。  
这些文本均由组员提供，且在逐渐扩充。

截至目前(23/8/21)，已有230条以上不同的文本可被随机展示。  
如果您不喜欢这些文本中的梗或不喜欢被打扰，我们建议您关闭本功能。

- `RandomLoadText = true`  
`true`是默认值，即为随机选取加载文本。
- `RandomLoadText = false`  
将其设置为`false`可以关闭随机选取加载文本。(需要您重启游戏才能生效)