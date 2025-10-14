---
title: Git Common commands
published: 2025-10-05
description: 记录git常用的命令
image: ../../../assets/images/gitcover.png
tags:
  - Git
category: Comperter-related
draft: false
---
## Git 常用命令

当你对Git管理目录下的某一个文件或某一些文件进行修改后，想要推送至远程仓库，以实现本地仓库与远程仓库同步。

#### git status

首先使用`git status`这个命令，它会显示被追踪的、未追踪的文件的变化。当你对某些文件进行修改后，它会在这里显示，你的哪一些文件是被修改过的。

#### git add

使用`git add`命令 将修改后的文件添加到暂存区。

添加一个或多个文件到暂存区。文件与文件之间用空格隔开。

```bash
git add [filename1] [filename2]
```

添加指定目录到暂存区，包括其下的子目录。

```bash
git add [directory]
```

添加当前目录下的所有文件到暂存区：

```bash
git add .
```

#### git commit

之后就是提交。最常用的就是

```bash
git commit -m '提交的消息，可以说相当于注释'
```

#### git push

当将修改后的文件，添加到暂存区，并且提交后，下一步就是使用`git push` 将修改后的内容推送至远程仓库。

如果你是第一次使用`git push`，请看 **[第一次使用 Git Push][1]**。如果不是，直接使用：
```bash 
git push origin main
```
[1]: #第一次使用-git-push

#### 第一次使用 git push

如果你是对一个使用Git管理的目录，第一次使用`git push`，你必须有一个远程仓库，才可以继续下一步，创建一个远程仓库，有很多方式，比如，Gitee、Github，还有Backlog等等。你可以任意选择一个你喜欢的，然后去创建一个远程仓库。

创建完成后，你会得到一个类似于下面的链接：

https://[sitename]/[username]/[projectname].git

不同的托管仓库，链接或许会有一些区别。

使用`git remote`命令和你项目存储库的 URL 来注册一个别名为 origin 的远程存储库。

```bash 
git remote add origin https://[sitename]/[username]/[projectname].git
```

上面这些步骤，都完成之后，你就可以使用:
```bash
git push origin main
```

将你所提交的修改，推送到远程仓库。

如果你是第一次推送，可能会提示你输入你所注册的托管的网站的用户名和密码。

（有些创建的远程仓库的默认分支不是 main，而是 master，因此，你需要更改它是main，或者将你自己本地的默认分支改为master，总之，两者的分支应该一样。）这一句我是有些不确定的，但是当前分支的名称与仓库的默认分支名称不同的话，推送可能会失败。

#### git rm

当你想要删除一些文件或文件夹时，并且也不想将其保留在远程仓库时，那么你就可以使用如下命令：

```bash
git rm [file]
```

或

```bash
git rm -r [folder] 
```

-r 表示递归删除文件夹中的所有内容。之后，再使用 `git commit` 和 `git push`就可以删除远程仓库中的文件或文件夹了。

#### .gitignore 文件的作用

现在假设有一个目录，名为Test，在当前目录下，执行`git init` 

会对这个目录进行Git 管理，会自动生成一个.git文件夹和 .gitignore 文件。

被Git管理的目录，它会记录目录下每一个文件的修改。但是有些文件是：

- 程序编译之后生成的
- 配置文件
- 含有用户个人信息的文件

不想让这些文件被Git 跟踪，记录，并推送至远程仓库。可以在.gitignore文件中编辑并填写这些文件的路径。就可以忽略这些文件，不再对它们进行跟踪，记录。

