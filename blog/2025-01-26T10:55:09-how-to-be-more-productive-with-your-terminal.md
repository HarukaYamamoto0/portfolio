---
title: How to Be More Productive with Your Terminal
description: A complete guide to customizing your Linux terminal using Hyper.js, Zsh, Oh My Zsh, Catppuccin theme, Fira Code font, and Spaceship prompt for a beautiful and productive environment.
date: 2025-01-26T10:55:09
tags: [linux, improvements, productivity, zsh, customization]
image: /img/posts/how-to-be-more-productive-with-your-terminal/capa.webp
authors: [HarukaYamamoto0]
slug: how-to-be-more-productive-with-your-terminal
---

After almost **10 months without posting anything useful**, I’m finally back — and this time, I’m going to show you how to make your terminal much more productive (and honestly, prettier).  
Let’s get straight to the point — here’s what we’re going to cover:

- [Installing Hyper.js](#installing-hyperjs)
- [Configuring the Catppuccin Theme](#configuring-the-catppuccin-theme)
- [Installing Zsh](#installing-zsh)
- [Installing Oh My Zsh](#installing-oh-my-zsh)
- [Installing ZInit](#installing-zinit)
- [Installing the Fira Code Font](#installing-the-fira-code-font)
- [Installing Spaceship](#installing-spaceship)
- [Preview](#preview)
- [Useful Links](#useful-links)

> For reference, I used **Zorin OS Core** (fresh install) while writing this tutorial.

<!-- truncate -->

## Installing Hyper.js

**Hyper.js**, or simply **Hyper**, is a terminal built with Electron — but here’s the catch: it’s **beautiful, extensible, cross-platform**, and extremely easy to configure.  
Basically, the same setup works on all your machines. I absolutely love it.

To install it, visit the [official website](https://hyper.is/) and click **Download**, or scroll down to pick the right package for your OS:

![Installation Example](https://imgur.com/Erh43IX.png)

Once installed, open Hyper — it should look like this by default:

![Hyper Default](https://imgur.com/cQUj8Wl.png)

## Configuring the Catppuccin Theme

**Catppuccin** is a gorgeous theme — perfect if, like me, you’ve grown tired of using Dracula everywhere.  
It’s not mandatory for this tutorial, but I highly recommend it.  
Like Dracula, Catppuccin has ports for tons of tools. You can check them out at [Catppuccin Ports](https://catppuccin.com/ports).

To install it, open your Hyper configuration file:

```shell
nano ~/.hyper.js
```

Add the following under the `plugins` section:

```json
{
  "plugins": ["hypurr#latest"]
}
```

Catppuccin comes in **four color palettes**:

- [Latte](https://github.com/catppuccin/catppuccin#-palette)
- [Frappé](https://github.com/catppuccin/catppuccin#-palette)
- [Macchiato](https://github.com/catppuccin/catppuccin#-palette)
- [Mocha](https://github.com/catppuccin/catppuccin#-palette)

Choose your favorite and add this line to your config:

```js
module.exports = {
  config: {
    catppuccinTheme: "Macchiato", // <===== Add this
    ...
  }
  ...
}
```

Now your terminal should look something like this with the **Macchiato** theme:

![Catppuccin theme in Hyper.js](https://imgur.com/XOQAmjq.png)

## Installing Zsh

Up to this point, we’ve been working mostly on style.
Now let’s make the terminal _powerful_ using **Zsh** — an interactive shell that’s also a robust scripting language.
It brings features from Bash and other shells, plus lots of improvements.

Install it with:

```shell
sudo apt install zsh -y
```

Check if it installed correctly:

```shell
zsh --version
```

You should see something like `zsh 5.8.1 (x86_64-ubuntu-linux-gnu)`.

To make Zsh your default shell:

```shell
chsh -s /usr/bin/zsh
```

Then **log out and back in** for the change to take effect.

If you see this screen, just type `2` and press **Enter**:

![Message for new users](https://imgur.com/oAXYVgj.png)

## Installing Oh My Zsh

**Oh My Zsh** (or just **OMZ**) is a framework that makes Zsh configuration much easier — and the [official site](https://ohmyz.sh/) description is pretty funny 😆.

First, make sure you have **curl** and **git** installed:

```shell
sudo apt install curl git -y
```

Then, install Oh My Zsh:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

You’ll instantly notice how much prettier it looks.
Also, take a look at the `~/.zshrc` file — it’s similar to `.bashrc` or `.profile`.
If you keep your aliases in another file (like `.profile`), just add this line anywhere in `.zshrc`:

```shell
source ~/.profile
```

## Installing ZInit

**ZInit** is a flexible and fast plugin manager for Zsh.
It makes installing plugins effortless.

Install it with:

```shell
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

Accept the prompts with `y` and **Enter**.

Now, to add some essential plugins, open `~/.zshrc` and add these lines at the end:

```shell
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

Close and reopen your terminal — ZInit will automatically install them.

## Installing the Fira Code Font

**Fira Code** is a free monospaced font with ligatures that make reading code easier and more pleasant.
It doesn’t change your code — just how it’s rendered visually.

We’ll need it because the next step (Spaceship) looks better with it.
Learn more about it on the [Fira Code GitHub page](https://github.com/tonsky/FiraCode).

Install it using:

```shell
sudo apt install fonts-firacode -y
```

To use it in **Hyper**, open the preferences (`Menu → Edit → Preferences`), which opens `~/.hyper.js`.
Then add **Fira Code** to your fonts:

```js
module.exports = {
  config: {
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    ...
  }
  ...
}
```

## Installing Spaceship

**Spaceship** is a _powerful Zsh prompt_ — it shows useful information like git status, runtime, and more, in a clean and aesthetic way.

It can make your terminal look like this:

![Spaceship Example](https://imgur.com/VmXS7yS.png)

Install it via ZInit by adding this to the end of your `~/.zshrc`:

```shell
zinit light spaceship-prompt/spaceship-prompt
```

Now configure it by appending this block to the same file:

```shell
SPACESHIP_PROMPT_ORDER=(
  user
  dir
  host
  git
  hg
  exec_time
  line_sep
  jobs
  exit_code
  char
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

Restart your terminal, and ZInit will handle the rest.

## Preview

After all these steps, your terminal will be both **beautiful and highly functional** — with autocomplete, syntax highlighting, and more.
Of course, you can add hundreds of other plugins using OMZ, ZInit, or Spaceship.

Here’s the final result on my setup:

![Example](https://imgur.com/2CEqODY.png)

Spaceship helps you know exactly where you are in your system, and yes — if you connect via SSH, it looks the same remotely.
Pretty cool, right?

## Useful Links

- [raftheunis87/hyperjs.md](https://gist.github.com/raftheunis87/607682946d0ef041ce1ad28c37456b7d)
- [awesome-hyper](https://bnb.github.io/awesome-hyper/)
- [Oh My Zsh Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/plugins)
