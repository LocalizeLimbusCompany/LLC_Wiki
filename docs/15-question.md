---
title: 常见问题
---

## 补丁问题

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

若您遇到**相同错误**，那么这说明您**与GitHub的链接不畅**。  
这时，您可以尝试**加速**GitHub。我们推荐您使用 [Watt Toolkit](https://steampp.net/)。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

成功加速GitHub后，您可以再次尝试安装。

### Failed to Download Cpp2IL!
![image](/img/page/failcpp2il.png)

首先，请确保您已经下载了**最新版**的安装器。

这个问题可能在您**首次使用模组或更新版本**时出现。  
这是因为我们使用的模组框架(MelonLoader)在**首次**启用时，将会从GitHub下载一个运行库。

也就是说，这个问题的出现意味着您与**与GitHub的链接不畅**，是网络问题导致的。  
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

您应该尝试：[重新安装](https://www.zeroasso.top/docs/install/autoinstall)或[手动安装MelonLoader](https://www.zeroasso.top/docs/install/install#melonloader)。

### 控制台卡住：Initialization - Contacting Remote API
![image](/img/page/stuckApi.png)

这个问题是因为我们的模组框架(MelonLoader)需要但无法连接GitHub API。

这时，您可以尝试**加速**GitHub。我们推荐您使用 [Watt Toolkit](https://steampp.net/)。
> 「Watt Toolkit」是一个开源跨平台的多功能 Steam 工具箱。其同时具备加速GitHub的附加功能。

### 遇到其他疑难杂症？
1. **检查游戏路径内是否存在中文**
2. **是否已经自行正确安装.NET6.0**
3. 尝试重启
4. 提交[GitHub Issue](https://github.com/LocalizeLimbusCompany/LocalizeLimbusCompany/issues)反馈给我们。请记得附上您的**两个log文件**以便我们排错。如果根本没有生成log，请如实填写即可。
5. 重装系统(慎用，但有解决问题的先例)
