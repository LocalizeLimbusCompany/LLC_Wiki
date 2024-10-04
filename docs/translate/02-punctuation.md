---
title: 符号规范
---

## 标点运用

- 请使用全角 `（！？，。）` 符号，**而非**半角 `(!?,.)` 符号
- 请使用中文引号 `“”` 并且注意**不要弄反**，而**不是**使用转义后的半角引号 `\"` ，这多见于日语。
- 请使用省略符号 `……` ，而**不是**用半角句号自行拼凑省略号。
  - 请保证**剧情内**的省略号均是**六点**（无论原文是三点还是六点）。
  - **技能命名**中的使用规范**有差别**，详见下文**紧凑句型**。
  - 若原文出现较长的大段省略号，对齐长度即可。
  - 在中文输入法下，按**快捷键Shift+6**即可输入中文六点省略符号。
- 在需要**紧凑句型**以增强信息密度时(如技能词条内)，请优先考虑使用**半角括号** `()` ，这是因为半角括号能够减少留白。同样的，**技能**中的省略号应该仅使用**三点** `…` 使其变得更加紧凑。
- 波浪号请使用**半角**波浪号 `~` ，而**不是**日语中的全宽波浪号 `～` 。因此请您自己打一个波浪号，不要从原文里复制！字库里没有这种日语全宽的，会缺字的。

> 这是我们不能忘记的，“那一天”的记录。
> ![image](/img/page/0ab0d940-368f-4eec-aa8d-4802c8e8bd64.png)

## 理解参数

- 在翻译以UI类文本为首的特殊文本时，你将会遇到参数。(如下图)
![image](/img/page/7c866c58-9fc8-473a-866b-c7c0cbda975f.png)

- 参数是可变的。参数将由代码填充，因此我们**不能破坏参数的格式**，并且要在理**解参数意义**的基础上将其置于正确的位置。
  - 以上图为例，你应该能看出英文里参数的位置与其他语言不同。这是因为英语的语序不同。
  - 以上图为例，你应该能看出{0}代表了某个卡池，而{1}代表了卡池中[理想]的数量。因此，你需要在中文翻译内将这两个参数置于语法正确的地方。
  
## 理解Json格式

- 若翻译的原文前后有与格式或样式相关的文本，如：
![](/img/page/fuhaoguifan.png)

- 这是Json的格式。你看到这些格式的原因是出于一些技术问题。不过不用担心，只要你不破坏这些格式，最后就不会产生任何问题。
- 你应该尤其注意**Json格式的文本前后各有一个半角引号**。这对半角引号是格式的一部分，**区别于**文中的其他半角引号。你**不应该**将这对半角引号更改为全角引号。