---
slug: how-to-be-more-productive-with-the-terminal
title: How to be more productive with the terminal
authors: [HarukaYamamoto0]
tags: [articles, javascript]
image: https://imgur.com/VmXS7yS.png
hide_table_of_contents: true
---

I'm here again after almost 10 months without posting anything useful, so to redeem myself today I will teach you how to have a more useful terminal, so to speak, anyway without further ado here is the summary of what we are going to do:

<!-- truncate -->

- [Install Hyper.js](#installing-hyperjs)
- [Set up Catppuccin theme](#setup-catppuccin-theme)
- [Install Zsh](#install-zsh)
- [Install Oh My Zsh](#install-oh-my-zsh)
- [Installing ZInit](#installing-zinit)
- [Installing Fira Code font](#installing-fira-code-font)
- [Installing Spaceship](#installing-spaceship)
- [Preview](#preview)
- [Useful Links](#useful-links)

> For informational purposes, the operating system I used for testing is the completely zeroed Zorin OS Core.

### **Install Hyper.js**

Hyper.js or just Hyper is a terminal made in Electron, but the trick is that it is extensible, beautiful, easy to configure and multiplatform, that is, the same configuration on all your computers, I simply love it.

To install it is very simple, just access the [official website](https://hyper.is/) and click on `Download` or scroll down and choose the best format for your OS:

![Installation Example](https://imgur.com/Erh43IX.png)

After installing and opening Hyper you should see it like this:

![Hyper Default](https://imgur.com/cQUj8Wl.png)

### **Configure the Catppuccin theme**

Catppuccin is a very beautiful theme, especially for people like me who are tired of just using Dracula. Catppuccin is not mandatory for this tutorial, but I highly recommend it. Just as the Dracula theme is everywhere, Catppuccin also has several ports, you can see them at [Catppuccin Ports](https://catppuccin.com/ports).

To install it on Hyper it is very simple, just open the Hyper configuration file, which is `~/.hyper.js`:

```shell
nano ~/.hyper.js
```

And add the following in the plugins part:

```json
{
  "plugins": ["hypurr#latest"]
}
```

Now comes the interesting part because the Catppuccin theme comes with 4 color palettes:

- [Latte](https://github.com/catppuccin/catppuccin#-palette)
- [Frappé](https://github.com/catppuccin/catppuccin#-palette)
- [Macchiato](https://github.com/catppuccin/catppuccin#-palette)
- [Mocha](https://github.com/catppuccin/catppuccin#-palette)

Then you choose which one suits your taste best and add the following line in the settings:

```js
module.exports = {
  config: {
    catppuccinTheme: "Macchiato", // <===== Add This
    ...
  }
  ...
}
```

Now this is him with the Macchiato theme:

![Catppuccin theme in hyper.js](https://imgur.com/XOQAmjq.png)

### **Install Zsh**

Ok, so far it's been a matter of style, but now we're going to make our terminal more powerful using Zsh. For those who aren't aware, Zsh is a shell designed for interactive use, although it's also a very powerful scripting language. It has several features present in bash and other shells, as well as bringing several of its own innovations.

Installing Zsh is very simple, just use the command below:

```shell
sudo apt install zsh -y
```

Ok, after installing it, let's test it to see if it's working:

```shell
zsh --version
```

The output of this command should look something like `zsh 5.8.1 (x86_64-ubuntu-linux-gnu)`

Now let's switch from Bash to Zsh, because currently to be able to use Zsh you have to use the `zsh` command and to switch just use:

```shell
chsh -s /usr/bin/zsh
```

Once configured, simply logout and login again for the system to capture this change.

If by any chance this menu appears, just type 2 and press `Enter`:

![message of new users](https://imgur.com/oAXYVgj.png)

## **Install Oh My Zsh**

Oh My Zsh or just Omz is a framework that will allow us to configure Zsh more easily, I even recommend reading its description on the [official website](https://ohmyz.sh/) it's quite funny 😆

To install Omz we will first have to install `Curl` and `Git` if you don't have them yet:

```shell
sudo apt install curl git -y
```

Okay, after installing the essentials we will actually install Omz, to do this just use the command:

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Right away you can see that it looks nicer and now, just like the Omz welcome screen says, if you take a look at the `~/.zshrc` file you will notice that it is a file like `.bash` or `.profile` so if, like me, you save your aliases in another file like `.profile`, just put the command `source ~/.profile` anywhere so that Zsh loads it.

## **Installing ZInit**

ZInit is a plugin manager for Zsh. It is flexible and fast and will allow us to install plugins in a very simple way. To install this wonder, just use:

```shell
bash -c "$(curl --fail --show-error --silent --location https://raw.githubusercontent.com/zdharma-continuum/zinit/HEAD/scripts/install.sh)"
```

It will ask you to install some necessary plugins just accept with `y` and press `Enter`.

Now to install the 3 most useful plugins that everyone uses, just open the `~/.zshrc` file and add the following at the end of the file and save:

```shell
zinit light zdharma/fast-syntax-highlighting
zinit light zsh-users/zsh-autosuggestions
zinit light zsh-users/zsh-completions
```

Now to actually install it, close the terminal and open it again and ZInit will download them.

## **Installing the Fira Code font**

Fira Code is a free monospace font that provides ligatures for common character combinations in programming. This is just a visual effect when displaying the font, while the source code remains ASCII-compatible. This font helps make code faster to read and understand.

In this case, we will use it because in the next topic we will use Spaceship and it needs this font to work as expected. If you want to have a better understanding of Fira Code, just access their GitHub page [here](https://github.com/tonsky/FiraCode).

Now to actually install the font there are several ways depending on your OS, you can look here [the installation guide](https://github.com/tonsky/FiraCode/wiki/Installing), but in my case I just needed to use:

```shell
sudo apt install fonts-firacode -y
```

And for Hyper to use Fira Code, just access `Menu => Edit => Preferences` and it will quickly open the `~/.hyper.js` file, then just add Fira Code along with the sources that already exist:

```js
module.exports = {
  config: {
    // Add "Fira Code" at the beginning
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',
    ...
  }
  ...
}
```

## **Installing Spaceship**

As it says itself Spaceship is a super powerful Zsh prompt. Prompt is what you see when you type a command. It can show you many useful tips, saving you time and making the user experience smooth and enjoyable.

It will allow us to make our terminal look like this:

![Spaceship Example](https://imgur.com/VmXS7yS.png)

To install Spaceship we can also use ZInit for this, just put the following at the end of the `~/.zshrc` file as was done with the plugins previously:

```shell
zinit light spaceship-prompt/spaceship-prompt
```

Now let's configure Spaceship by placing the following again at the end of `~/.zshrc`:

```shell
SPACESHIP_PROMPT_ORDER=(
  user          # Username section
  dir           # Current directory section
  host          # Hostname section
  git           # Git section (git_branch + git_status)
  hg            # Mercurial section (hg_branch  + hg_status)
  exec_time     # Execution time
  line_sep      # Line break
  jobs          # Background jobs indicator
  exit_code     # Exit code section
  char          # Prompt character
)
SPACESHIP_USER_SHOW=always
SPACESHIP_PROMPT_ADD_NEWLINE=false
SPACESHIP_CHAR_SYMBOL="❯"
SPACESHIP_CHAR_SUFFIX=" "
```

And now again close the terminal and open it again so that ZInit will download and configure it.

## Preview

And finally, after a lot of configuration, we finally have our terminal, much more beautiful and useful, with autocomplete, syntax highlighting, not to mention the other 300 plugins that you can install in Omz, ZInit and Spaceship. In this tutorial, I only showed the basics with a lot of explanation.

And here is the final sample of how my terminal looked, Spaceship is very useful to be able to guide you where you are, it is worth remembering that if you access your computer using SSH it will work the same way in the client so yes it is very cool.

![Example](https://imgur.com/2CEqODY.png)

## **Useful links**

- [raftheunis87/hyperjs.md](https://gist.github.com/raftheunis87/607682946d0ef041ce1ad28c37456b7d)
- [awesome-hyper](https://bnb.github.io/awesome-hyper/)
- [Oh My Zsh Plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/plugins)
