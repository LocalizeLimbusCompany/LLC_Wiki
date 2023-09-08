---
title: 关闭/开启模组特殊功能
---

## 偏好文件

注：以下仅适用于最新版模组。

请您打开游戏根目录，进入`Limbus Company\BepInEx\config`文件夹。请使用**记事本**或您选择的文本编辑器打开`Com.Bright.LocalizeLimbusCompany.cfg`这个文件。  
如果您没有这个文件，那可能是因为您的模组未生效。您需要**首次成功运行模组**，才会生成本文件。

如果您不知道自己在做什么，请不要动`BepInEx.cfg`这个文件。此文件与我们的模组功能完全无关。

如果您从未更改过该文件，那么打开后这个文件看起来应该是这样：

```
## Settings file was created by plugin LimbusLocalizeMod v0.5.14
## Plugin GUID: Com.Bright.LocalizeLimbusCompany

[LLC Settings]

## 是否从GitHub自动检查并下载更新 ( true | false )
# Setting type: Boolean
# Default value: false
AutoUpdate = false

## 是否使用汉化 ( true | false )
# Setting type: Boolean
# Default value: true
IsUseChinese = true

## 是否从所有已到达进度中随机选择载入CG ( true | false )
# Setting type: Boolean
# Default value: true
RandomAllLoadCG = true

## 是否随机选择载入标语,即右下角的[NOW LOADING...] ( true | false )
# Setting type: Boolean
# Default value: true
RandomLoadText = true
```

若您需要更改本文件，**请务必注意`true`和`false`的拼写，以及空格的存在**。

## 是否从GitHub自动检查并下载更新
如果您不知道该选项意味着什么，请**不要**将该选项设置为`true`。  
将其保持为`false`即可。
<details>

使用该选项需要您与GitHub的连接**完全畅通**。

如果您希望**跳过一次提醒**，请点击**弹窗外的其他任何部分**即可。  
点击“OK”将会退出游戏并为您打开游戏根目录（就像弹窗本身所说的那样）。

另外，如果您的系统时区不在GMT+8，那么基于时间戳的更新检测可能会无法检测到新版本，导致重复提醒或不提醒。  
**请确保您的系统时间为GMT+8。**  
这个功能目前是不再更新(但依然计划提供现有支持)的历史功能，因此可能不会针对此时区问题进行修复。
</details>

## 是否使用汉化
- `IsUseChinese = true`  
`true`是默认值，即为使用汉化。
- `IsUseChinese = false`  
将其设置为`false`可以关闭汉化。(需要您重启游戏才能生效)

## 是否从所有已到达进度中随机选择载入CG
边狱公司默认仅从最新进度内选取CG展现在各处的加载扉页中。  
本功能使得您有机会在加载扉页中欣赏到全部CG。

- `RandomAllLoadCG = true`  
`true`是默认值，即为随机选取CG。
- `RandomAllLoadCG = false`  
将其设置为`false`可以关闭随机CG。(需要您重启游戏才能生效)

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