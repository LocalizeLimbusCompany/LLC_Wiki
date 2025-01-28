---
title: 自建下载/API节点
---

目前，零协会服务器仅有一台位于韩国首尔的阿里云轻量机器，即使在多方面衡量下保证了大多数人的访问需求，也不能保证全部用户都能无阻地使用服务。  
因此，在v1.0.0版本工具箱之后，节点就从程序内部写死，变为从`工具箱目录/NodeList.json`中读取节点信息。如此，就可以通过修改这个json的方式增减节点。  
但需要注意，**Github直连**与**Mirror Github**由于涉及程序逻辑，是写死在程序中的，无法删除。

本篇教程教学的是，如何在**有服务器的情况下**提供节点服务。你也可以通过OSS（Object Storage Service，即对象存储）等方式提供下载服务，但请注意，此类服务一般资费较高，并且即使你使用OSS，也需要服务器自动上传模组文件至OSS（如果你觉得手动上传无所谓除外）。  
如果你拥有服务器，最常见的做法是，将模组文件放在一个`Nginx`网站下，对外网公开（可能还需要域名，域名获取方式不再赘述，网上有很多教程），这样就可以通过类似于`https://www.xxx.com/files/LimbusLocalize_v0.x.xx.7z`等方式下载文件。

同时你也要注意，**绝对**，**禁止**，提供修改过的文件，如果有此情况发生，我会在后续版本删除或加严自选节点功能。

如果你仍有不解，欢迎发送邮件至`1768506869@qq.com`，有时间我会解答你的疑惑。

-----

## 自建下载节点
你不仅需要提供模组文件，你还需要准备`BepInEx-IL2CPP-x64.7z`，`tmpchinesefont_BIE.7z`你可以从[零协会节点站](https://node.zeroasso.top)获取这两个文件。模组文件也要遵循一定的格式，例如`LimbusLocalize_BIE_v0.6.53.7z`，便是`LimbusLocalize_BIE_` + 版本号 + `.7z`。

搭建完成后，便可以修改`NodeList.json`。打开工具箱目录，打开`NodeList.json`（推荐使用Visual Studio Code，这样能够提示你的Json语法是否有错误），你将会看到一大堆字儿。比如：
```json title="LLC_MOD_Toolbox/NodeList.json"
{
  "downloadNode": [
    {
      "name": "Onedrive For Business",
      "endpoint": "https://node.zeroasso.top/d/od/",
      "isDefault": true
    },
    {
      "name": "Cloudflare CDN",
      "endpoint": "https://cf-cdn.zeroasso.top/files/",
      "isDefault": false
    },
    {
      "name": "天翼云盘",
      "endpoint": "https://node.zeroasso.top/d/tianyi/",
      "isDefault": false
    },
    {
      "name": "联通云盘",
      "endpoint": "https://node.zeroasso.top/d/unicom/",
      "isDefault": false
    },
    {
      "name": "移动云盘",
      "endpoint": "https://node.zeroasso.top/d/mobile/",
      "isDefault": false
    },
    {
      "name": "电信云盘",
      "endpoint": "https://node.zeroasso.top/d/telecom/",
      "isDefault": false
    }
  ],
  "apiNode": [
    {
      "name": "零协会官方 API",
      "endpoint": "https://api.kr.zeroasso.top/",
      "isDefault": true
    },
    {
      "name": "零协会官方 API（Cloudflare CDN）",
      "endpoint": "https://cf-cdn.zeroasso.top/api/",
      "isDefault": false
    }
  ]
}
```
我们来分条解析。  
- `name`：它会被工具箱放到前端展示。
- `endpoint`：下载节点端点。
- `isDefault`：当其为`true`时，会被设置为默认节点。**一个NodeList.json中只能有一个默认节点，否则可能会有不明问题**。如果要将您的节点设置为默认节点，请先将`Onedrive For Business`节点的`isDefault`改为`false`。

:::tip 关于下载节点“endpoint”的提示

`endpoint`即端点。你需要确保`endpoint`+`文件名`能够被成功下载。  
所以，`endpoint`的格式应该固定为类似于`https://xxx.com/files/`的格式（后面的/很重要）

你应该确保`endpoint`+`文件名`能够成功下载到文件，比如你可以测试`https://xxx.com/files/BepInEx-IL2CPP-x64.7z`是否能够在浏览器中下载，如果不能，则需要进行调错。

:::

接下来，你就可以往这个Json中加入你的节点。    
首先，你需要在`downloadNode`最后加入类似于这样的结构：

```json title="LLC_MOD_Toolbox/NodeList.json"
……
    {
      "name": "电信云盘",
      "endpoint": "https://node.zeroasso.top/d/telecom/",
      "isDefault": false
    },
    {
      "name": "我的新节点",
      "endpoint": "https://my-new.node.site/files/",
      "isDefault": false
    }
  ],
  "apiNode": [
    {
……
```

你需要注意：
- 你需要在前一个`}`后面加一个`,`。如果不理解，那么建议多看一下上面的这个示例。
- 记得替换`name`与`endpoint`。
- 再次提醒，`endpoint`后面要加`/`

在添加后，万事大吉，打开工具箱，打开设置，你的节点应该就显示在下载节点列表了！建议你在分发`NodeList.json`或你的节点信息之前，给别人之前先自己测试一下能不能下载？

## 自建API节点
你需要确保在你的API节点中有以下Json文件，其内容是后面给的API网址的网页内容。  
推荐你通过自动化流程自动保存Json。
- `BepInEx_For_LLC_Release.json`：`https://api.github.com/repos/LocalizeLimbusCompany/BepInEx_For_LLC/releases/latest`
- `Mod_Release.json`：`https://api.github.com/repos/LocalizeLimbusCompany/LocalizeLimbusCompany/releases`
- `LatestMod_Release.json`：`https://api.github.com/repos/LocalizeLimbusCompany/LocalizeLimbusCompany/releases/latest`
- `Toolbox_Release.json`：`https://api.github.com/repos/LocalizeLimbusCompany/LLC_MOD_Toolbox/releases/latest`
- `LatestTmp_Release.json`：`https://api.github.com/repos/LocalizeLimbusCompany/LLC_ChineseFontAsset/releases/latest`
（说实话，我并不知道这些API是不是都要用到，不过你还是全都下载下来吧）

搭建完成后，便可以修改`NodeList.json`。打开工具箱目录，打开`NodeList.json`（推荐使用Visual Studio Code，这样能够提示你的Json语法是否有错误），你将会看到一大堆字儿。比如：
```json title="LLC_MOD_Toolbox/NodeList.json"
{
  "downloadNode": [
    {
      "name": "Onedrive For Business",
      "endpoint": "https://node.zeroasso.top/d/od/",
      "isDefault": true
    },
    {
      "name": "Cloudflare CDN",
      "endpoint": "https://cf-cdn.zeroasso.top/files/",
      "isDefault": false
    },
    {
      "name": "天翼云盘",
      "endpoint": "https://node.zeroasso.top/d/tianyi/",
      "isDefault": false
    },
    {
      "name": "联通云盘",
      "endpoint": "https://node.zeroasso.top/d/unicom/",
      "isDefault": false
    },
    {
      "name": "移动云盘",
      "endpoint": "https://node.zeroasso.top/d/mobile/",
      "isDefault": false
    },
    {
      "name": "电信云盘",
      "endpoint": "https://node.zeroasso.top/d/telecom/",
      "isDefault": false
    }
  ],
  "apiNode": [
    {
      "name": "零协会官方 API",
      "endpoint": "https://api.kr.zeroasso.top/",
      "isDefault": true
    },
    {
      "name": "零协会官方 API（Cloudflare CDN）",
      "endpoint": "https://cf-cdn.zeroasso.top/api/",
      "isDefault": false
    }
  ]
}
```
我们来分条解析。  
- `name`：它会被工具箱放到前端展示。
- `endpoint`：下载节点端点。
- `isDefault`：当其为`true`时，会被设置为默认API节点。**一个NodeList.json中只能有一个默认节点，否则可能会有不明问题**。如果要将您的API节点设置为默认节点，请先将`零协会官方 API`节点的`isDefault`改为`false`。

:::tip 关于API节点“endpoint”的提示

`endpoint`即端点。你需要确保`endpoint`+`API文件名`能够被成功下载。  
所以，`endpoint`的格式应该固定为类似于`https://xxx.com/api/`的格式（后面的/很重要）

你应该确保`endpoint`+`API文件名`能够成功下载到文件，比如你可以测试`https://xxx.com/api/Toolbox_Release.json`是否能够在浏览器中下载/查看，如果不能，则需要进行调错。

:::

接下来，你就可以往这个Json中加入你的节点。    
首先，你需要在`apiNode`最后加入类似于这样的结构：

```json title="LLC_MOD_Toolbox/NodeList.json"
……
    {
      "name": "电信云盘",
      "endpoint": "https://node.zeroasso.top/d/telecom/",
      "isDefault": false
    }
  ],
  "apiNode": [
    {
      "name": "零协会官方 API",
      "endpoint": "https://api.kr.zeroasso.top/",
      "isDefault": true
    },
    {
      "name": "零协会官方 API（Cloudflare CDN）",
      "endpoint": "https://cf-cdn.zeroasso.top/api/",
      "isDefault": false
    },
    {
      "name": "我的新API",
      "endpoint": "https://my.newapinode.site/api/",
      "isDefault": false
    },
  ]
}
```

你需要注意：
- 你需要在前一个`}`后面加一个`,`。如果不理解，那么建议多看一下上面的这个示例。
- 记得替换`name`与`endpoint`。
- 再次提醒，`endpoint`后面要加`/`

在添加后，万事大吉，打开工具箱，打开设置，你的节点应该就显示在API节点列表了！建议你在分发`NodeList.json`或你的节点信息之前，给别人之前先自己测试一下能不能下载？

（这一大段是复制上面下载节点写的）
