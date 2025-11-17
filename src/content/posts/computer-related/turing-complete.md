---
title: Turing Complete
published: 2025-11-12
category: Comperter-related
draft: true
---
#### 与非门 NAND
两个输入都为1，结果才是0，其余情况均输出1。

	Input-1    0    1    0    1
	Input-2    0    0    1    1
	Output     1    1    1    0
#### 非门 NOT
反转输入的结果

	Input-1    0   1
	Output     1   0
#### 与门 AND
通过将与非门与非门结合得到 与门

	Input-1    0    1    0    1
	Input-2    0    0    1    1
	Output     0    0    0    1
#### 或非门 NOR
两个输入都是0，输出才是1，其余情况均为0

	Input-1    0    1    0    1
	Input-2    0    0    1    1
	Output     1    0    0    0

![](../../assets/images/turing-complete.png)
#### 或门 OR

或非门 + 非门 = 或门

	Input-1    0    1    0    1
	Input-2    0    0    1    1
	Output     0    1    1    1