---
title: 如何提交要留档的图文
date: 2025-12-12
categories:
  - 教程
  - 留档
tags:
  - 技术
  - 协作
---

## 通过邮件或发表在 [留言板](/comments.html)

- 将所需留档的图文发邮箱到 tzhong072@gmail.com 或 bxx-114514@outlook.com。
- 直接发表在 [留言板](/comments.html)。注意带图**需要自备图床**。

## 提交 PR (Pull request)

### 所需条件

- 熟悉 Git、VS Code、Node.js、NPM、Yarn、PNPM 等软件且已安装。
- 熟悉 GitHub 的使用。
- 熟悉 Markdown 语法，以及其他标记语言。
- ~~当然如果你是前端大佬就更好。~~

### 提交步骤

#### 一、Fork 仓库

> [!caution]
> **必须要有自己的 GitHub 账户！**

单击 [Fork](https://github.com/bxx-114514/bxx-114514.github.io/fork) 或者进入 [仓库](https://github.com/bxx-114514/bxx-114514.github.com) 单击 Fork 按钮，Fork 一份在你的 GitHub 账户中。

只 Fork 源代码 `main` 分支就足够。稍等片刻即可。

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/01.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/02.png)

#### 二、克隆到本地以进行添加图文

1. 先打开你所需的工作区文件夹，注意**路径中不能有中文、日文、韩文、emoji 等非半角英文字符和半／全角空格**！
   1. 错误示例 `X:\ab cd\我的项目\`，正确示例 `X:\abcd-1234\my-project\`。
2. 右键单击空白区域，在弹出的菜单中选择【显示更多选项】—【Open Git Bash here】（Windows 11）或者直接选择【Open Git Bash here】（Windows 10 及以下）。
   1. 也可以在地址栏中输入 `cmd` 在工作区文件夹打开命令提示符。
3. 使用 `git clone` 命令克隆。所需命令在下方。
4. 稍等片刻即可。

``` sh
git clone https://github.com/your-username/bxx-114514.github.io
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/03.png)

> [!caution]
> 需要替换成你自己的用户名！

> [!tip]
> - 你可以在链接后面加上名字，以指定所需克隆的文件夹。
> - 例如 `git clone https://github.com/your-username/bxx-114514.github.io example` 是指定克隆到工作目录下的 `example` 文件夹。
> - 而 `git clone https://github.com/your-username/bxx-114514.github.io example/abc` 则是指定克隆到工作目录下 `example` 里的 `abc` 文件夹。

#### 三、进行更改操作

进入工作区文件夹，在空白处右键单击，在弹出的快捷菜单中单击【显示更多选项】—【通过 Code 打开】（Windows 11）或直接单击【通过 Code 打开】（Windows 10 及以下）。

> [!caution]
> 保险起见，你需要在 VS Code 内打开终端，安装所需 PNPM 组件，才能在本地进行预览。

``` sh
pnpm i
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/04.png)

在 `src/posts` 的相应子目录创建并打开相关 `*.md` 后缀 Markdown 文档，进行撰写。

在 Markdown 文档的前面需要有 Front-matter 用于标记标题、日期、分类、标签等信息。

``` YAML
---
title: 文章标题 # 根据实际情况填写
date: 2025-12-12 # 提交日期
category: 文章分类 # 根据实际情况填写
tag: 文章标签 # 根据实际情况填写
# author: bxx-114514 # 根据实际情况填写
# copyright: Copyright © 2025 bxx-114514 # 根据实际情况填写
# 如果需要填入多个分类或标签，你可以选用以下任意一种语法：
# category: [分类 1, 分类 2, 分类 3]
# tag: [标签 1, 标签 2, 标签 3]
# category:
  # - 分类 1
  # - 分类 2
  # - 分类 3
# tag:
  # - 标签 1
  # - 标签 2
  # - 标签 3
---
```

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/05.png)

Markdown 标记语法可参考 [这里](https://docs.github.com/zh/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)。

#### 四、在本地预览效果

打开 VS Code 自带的终端，执行命令：

``` sh
pnpm docs:dev
```

完成后，在浏览器进入终端中指定的 `localhost` 链接，查看预览。

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/06.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/07.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/08.png)

如果没有问题，关闭页面，回到 VS Code 的终端，按 `Ctrl-C` 终止本地预览。

#### 五、提交并同步更改

撰写完成后，保存文档，进入【源代码管理】侧边栏，填写提交信息（**最好用英文**），完成后单击【提交】，再选择【同步更改】同步到你仓库。

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/09.png)

> [!tip]
> 你也可以选择【提交】按钮右边的下拉菜单打开更多选项，选择【提交和同步】。

#### 六、发起 PR (Pull request)

进入 GitHub，找到你 Fork 的 `your-username/bxx-114514.github.io` 仓库。  
选择【Contribute】—【Open pull request】，撰写 PR (Pull request) 内容。

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/10.png)

注意标题必填，内容选填。完成后选择【Create pull request】提交。

![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/11.png)  
![](https://raw.githubusercontent.com/bxx-114514/image-hosting/refs/heads/main/images/251212/12.png)

我看到后会**审查**提交内容，**如果没问题则会合并提交**。

## 题外话

### 有关插入图片的说明

- 由于 Markdown 格式本身不支持直接插入图片，因此你需要**自备图床**或者**转换成 Base64 编码**来插入图片。
- 对于体积比较小的图片，你可以通过 Base64 编码插入。如果图片太大会增加 Markdown 文档的体积。
- 对于体积较大的图片，你**必须使用**图床。你可以使用你自己的图床服务，也可以 [Fork](https://github.com/bxx-114514/image-hosting/fork) 我的图床仓库，按照上面介绍的方式来给我图床仓库提交 PR (Pull requests)。

### [我的图床仓库](https://github.com/bxx-114514/image-hosting) 说明

- **图片格式**：`*.webp`、`*.jpg`、`*.png`。推荐 `*.webp` 有损格式，质量 80~90%。
- **文件名、文件路径**：`images/yymmdd/xx.webp` 或者 `images/yymmdd-xx/xx.webp`。
  - `images` 为图片的固定文件夹。
  - `yymmdd` 为两位年月日，例如 2025 年 1 月 1 日为 `250101`。如果当年当月当日有多篇文章时，则在后面加上 `-xx` 后缀，例如 2025 年 1 月 1 日的第二篇文章图片为 `250101-2` 文件夹，以此类推。
  - `xx.webp` 则为按编号排序的文件名。例如 `01.webp` 为该文件夹下第一张图片。后缀名需要和源文件保持一致。
  - **完整示例**：
    - **2025 年 1 月 1 日的第一张图片**：`images/250101/01.webp`。
    - **2025 年 1 月 1 日第二篇文章的第一张图片**：`images/250101-2/01.webp`。
- **链接格式**：
  - `https://raw.githubusercontent.com/your-username/image-hosting/refs/heads/main/images/yymmdd/xx.webp`
  - `your-username` 部分代表你的 GitHub 用户名。
  - `image-hosting` 部分代表 GitHub 仓库名。
  - `refs/heads` 部分为固定格式，不要修改。
  - `main` 部分代表所在分支。
  - `image/yymmdd/xx.webp` 部分说明可参考 [上面](#我的图床仓库-说明)。
