---
title: 常见问题
---

## 补丁相关问题
### Failed to initialize MelonLoader: LoadLibraryExW Failed
很遗憾，我们无法复现更无法解决此问题，这并非模组的问题，而是 MelonLoader 导致的，它甚至不会生成日志。此问题**疑似**是由于以下原因：
- 路径中包括中文，特殊字符
如果您遇到了这个问题，只能祈祷了。
MelonLoader 追踪此问题的 (Issue #497)[https://github.com/LavaGang/MelonLoader/issues/497]

### 我更新了模组，但翻译没更新？
您可能在我们刚更新没多久后使用了我们的纽约服务器下载模组文件。纽约服务器使用了CDN网络，这将会导致您从其上下载的文件带有**一些延迟**。  
您可以：
1. 等待CDN同步更新(十几分钟)
2. 换用从GitHub下载文件

### 远程服务器返回错误：(404) 或 无法连接到远程服务器 或 基础链接已经关闭
![image](/img/page/err404.jpg)

首先，请确保您已经下载了**最新版**的安装器。

这个错误说明您现有的网络无法连接我们提供的下载分流。不过别担心，您不必使用我们提供的分流。您可以按照如下步骤使用GitHub下载。

- 首先请观察您的安装器的设置栏目，您现有的的默认设置应该是：  
  - Melonloader For LLC → **开启**  
  - 从GitHub下载文件 → **关闭**
- 现在，将设置改为：  
  - Melonloader For LLC → **关闭**  
  - 从GitHub下载文件 → **开启**

这将会使您**完全脱离**对我们的下载分流的依赖，所有文件都会从**GitHub**下载。

现在，您**可再尝试重新安装**。

若您遇到**相同错误**，那么这说明您**与GitHub的链接不畅**。**请尝试以任何方式(打开/关闭您已有的加速器)更改您的网络环境**。  
这时，您可以尝试**加速**GitHub。我们推荐您使用 [Watt Toolkit](https://steampp.net/)。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

成功加速GitHub后，您可以再次尝试安装。

### Failed to Download Cpp2IL!
![image](/img/page/failcpp2il.png)

首先，请确保您已经下载了**最新版**的安装器。

这个问题可能在您**首次使用模组或更新版本**时出现。  
这是因为我们使用的模组框架(MelonLoader)在**首次**启用时，将会从GitHub下载一个运行库。

也就是说，这个问题的出现意味着您与**与GitHub的链接不畅**，是网络问题导致的。**请尝试以任何方式(打开/关闭您已有的加速器)更改您的网络环境**。  
但是，既然您已经使用完毕安装器，并成功地打开游戏，启动了MelonLoader的弹窗——这个问题**与安装器无关**。

这时，您可以尝试**加速**GitHub。我们推荐您使用 [Watt Toolkit](https://steampp.net/)。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

您也可以尝试手动下载并装入缺失的运行库。如果您对自己的操作不自信，您应该**优先尝试解决网络问题**再尝试手动安装。  
- 从[GitHub LavaGang](https://github.com/LavaGang/Unity-Runtime-Libraries/raw/master/2021.3.0.zip)下载运行库```2021.3.0.zip```
- 将其重命名为```UnityDependencies_2021.3.0.zip```
- 将其放入您Steam游戏根目录的以下位置：```Limbus Company\MelonLoader\Dependencies\Il2CppAssemblyGenerator\UnityDependencies_2021.3.0.zip```

### Failed to Download UnityDependencies!
![image](/img/page/failUnity.png)

同上：[**Failed to Download Cpp2IL!**](https://www.zeroasso.top/docs/question#failed-to-download-cpp2il)

### Failed to initialize MelonLoader
![image](/img/page/failmelon.png)

首先，请确保您已经下载了**最新版**的安装器。

这个问题是因为我们的模组框架(MelonLoader)因为各种可能的问题而没有被正确安装导致的。

您应该尝试：首先**删除已经安装的MelonLoader(模组框架)**。然后进行[重新安装](https://www.zeroasso.top/docs/install/autoinstall)或[手动安装MelonLoader](https://www.zeroasso.top/docs/install/install)。

### 控制台卡住：Initialization - Contacting Remote API
![image](/img/page/stuckApi.png)

这个问题是因为我们的模组框架(MelonLoader)需要但无法连接GitHub API。

这时，您可以尝试**加速**GitHub。**请尝试以任何方式(打开/关闭您已有的加速器)更改您的网络环境**。我们推荐您使用 [Watt Toolkit](https://steampp.net/)。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

### 打开游戏后控制台弹出，但稍后闪退，无错误弹窗
这是因为我们的模组框架(MelonLoader)必须要在启动时连接远程提供的API，但**未能连接成功**造成的。  
MelonLoader是另一个开源社区项目，而我们**无法**对启动连接API这一行为作出改动。因此，解决本问题的唯一方法就是**解决网络问题**。

**请优先尝试以任何方式(打开/关闭您已有的加速器)更改您的网络环境**，或选择[Watt Toolkit](https://steampp.net/)加速GitHub进行尝试。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

### 遇到其他疑难杂症？
0. 请确保您已经下载了**最新版**的安装器。
1. **检查游戏路径内是否存在中文**
2. **是否已经自行正确安装.NET6.0**
3. **请尝试以任何方式(打开/关闭您已有的加速器)以更改您的网络环境**。
4. 尝试重启
5. 提交[GitHub Issue](https://github.com/LocalizeLimbusCompany/LocalizeLimbusCompany/issues)反馈给我们。请记得附上您的**两个log文件**以便我们排错。如果根本没有生成log，请如实填写即可。
6. 重装系统(慎用，但有解决问题的先例)

## 汉化相关问题
### 汉化文字不完整——口口口
导致汉化文字不完整的原因仅有字库安装不正确这一唯一原因。字库是您在Mods文件夹下找到的tmpchinesefont文件。

您可以：
- 在确保网路通畅的情况下重启MelonLoader，使其自行完成配置。
- 检查您的字库是否存在未更新的新版本
- 手动或自动重装tmpchinesefont。您可至[Release](https://github.com/LocalizeLimbusCompany/LLC_ChineseFontAsset/releases)获取最新版的字库文件(tmpchinesefont_六位日期.7z)解压并覆盖Mods/tmpchinesefont

如果您发现这个错误并没有大范围出现，而是在特定位置的**不**常用字出现了该问题，这很可能是我们的字库缺失了所需字体。这个问题仅能由我们解决，也一般会在您反馈后的下一个版本修复。如果您希望向我们反馈任何字库问题，请至[字库Issues](https://github.com/LocalizeLimbusCompany/LLC_ChineseFontAsset/issues)提交一个新的Issue，简短叙述您缺失字体的位置和其前后的文本(最好有截图)来帮助我们查找该字。  
如果您不方便使用GitHub，试试[联系我们](https://www.zeroasso.top/docs/callus)！

### 汉化模组引起的性能问题
一般来说，我们的汉化模组不会对性能带来过高的影响。您受到的最主要影响应该是切换到**文字较多**的页面时出现延长的卡顿和响应迟滞。除此之外，我们的汉化模组不应该影响您在战斗以及剧情中的任何性能。  
~~实际上，边狱公司本身对性能的占用也要比想象中的多。~~

这是因为游戏逻辑使得切换到新页面时需要提前渲染字体造成的卡顿。这一般不会使游戏崩溃，除片刻等待外也不应该过多的影响您的游戏体验。
