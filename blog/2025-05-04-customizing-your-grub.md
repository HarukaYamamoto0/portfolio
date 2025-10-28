---
title: Customizing Your GRUB
description: Hey, how are you? So today I'm going to teach you (or at least try) how to theme Grub, so that every time you turn on your PC or switch operating systems, you don't have to look at that ugly default Grub screen.
date: 2025-05-04
tags: [linux]
image: /img/posts/customizing-your-grub/capa.webp
authors: [HarukaYamamoto0]
slug: customizing-your-grub
---

Hey, how are you? So today I'm going to teach you (or at least try) how to theme Grub, so that every time you turn on your PC or switch operating systems, you don't have to look at that ugly default Grub screen.

<!-- truncate -->

#### Before

![Before](https://imgur.com/usgstFM.jpg)

#### After

![After](https://imgur.com/HqZ3hcQ.jpg)

## What is GRUB?

For those who don't know, Grub is a boot manager that comes standard on almost all Linux distros. It's very important for people who dual-boot, which is when you use more than one operating system, like Linux and Windows, on the same computer.

Normally, if you dual-boot without using a boot manager, you'll have some headaches, like every time you need to switch to the other operating system, you'll have to go directly to the BIOS and change the boot order.

Now, using a boot manager allows you to visually choose which operating system you want to use without having to go into the BIOS every time. Of course, boot managers allow you to do even more than just display a menu, but that's the main task.

## Why customize GRUB?

- 🎨 **Pure aesthetics**: Who said dual-booting has to be ugly? - 🔍 **Ease**: Identifying systems visually is much more intuitive [^1]
- 🚀 **Impress**: A small detail that shows you're a different person

## Downloading a Theme

Now enough explanations, let's get to what really matters: the most crucial part: finding a theme you like by going to this website:

👉 [GNOME-Look - GRUB Themes Section](https://www.gnome-look.org/browse?cat=109&ord=rating)

This website has the main Grub themes. In fact, my favorite is this one from [Star Rail](https://www.gnome-look.org/p/2076542) which has several sub-themes within it, and I'm currently using the one from `Anaxa`.

## Installing the Theme

Now comes the interesting part: installing the theme. And before anyone says that Grub Customizer exists, I'll just say that yes, I know it exists, but this tutorial will use the terminal because it's more practical than installing a tool.

Now, using the [Star Rail](https://www.gnome-look.org/p/2076542) theme as an example, just click the download button and choose which variant you want to download, which in my case is Anaxa.tar.gz. As the name suggests, you'll download a GZIP file containing the theme files, and you'll obviously need to unzip it.

Once unzipped, you'll see a folder in something like the format below. In short, a theme is this: a folder with the assets and a main file, theme.txt, which tells you where and how each asset should be displayed.

```bash
Anaxa
├── background.png
├── icons
│ ├── ......
│ ├── windows11.png
│ ├── windows.png
│ └── zorin.png
├── select_c.png
├── select_e.png
├── select_w.png
└── theme.txt
```

Ok, after you have extracted the theme, now let's actually install it. To do this, let's first create the themes folder if it doesn't already exist:

```bash
sudo mkdir -p /boot/grub/themes/
```

Now let's copy the theme to the folder:

```bash
sudo cp -r Downloads/Anaxa /boot/grub/themes/
```

Now, before we configure Grub, we have to perform a necessary step to save your time and sanity: run the command below to get your monitor's exact resolution:

```bash
xdpyinfo | awk '/dimensions/ {print $2}'
```

It should return something like `1920x1080`.

Now let's edit the Grub configuration file to tell it where our theme is:

```bash
sudo nano /etc/default/grub
```

In the configuration file, add or change this line, and don't forget to change it to the name of the theme you downloaded:

```bash
GRUB_THEME="/boot/grub/themes/Anaxa/theme.txt"
```

Then, find this snippet:

```bash
# The resolution used on the graphical terminal
# note that you can only use modes that your graphic card supports via VBE
# you can see them in real GRUB with the `vbeinfo' command
# GRUB_GFXMODE=auto
```

Then uncomment this option and pass the exact resolution of your monitor that you got earlier in the command I mentioned, which in my case would look like this:

```bash
# The resolution used on the graphical terminal
# note that you can only use modes that your graphic card supports via VBE
# You can see them in real GRUB with the `vbeinfo' command.
GRUB_GFXMODE=1920x1080
```

Now to exit nano, just use `CTRL+X` and then confirm with `Y` to exit. Then, finish updating GRUB:

```bash
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Now if you restart your computer to see the Dual Boot screen, you'll see something like this:

![After](https://imgur.com/bkDzpd4.jpg)

> Ignore the Anaxa name in the bottom right corner; it's just for demonstration purposes.

[^1]: Grub allows you to add icons for easier viewing, and most themes already come with a complete pack of icons for operating systems and Linux distros, as you can see in the image at the top.
