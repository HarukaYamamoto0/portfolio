---
title: 🔥 Customizing Your GRUB — Dual Boot with Style!
description: Learn how to customize and install stylish GRUB themes to make your dual boot setup look amazing. From downloading to configuring themes manually via the terminal.
date: 2025-05-04T06:15:22
tags: [linux, customization, improvements, dual-boot, themes]
image: /img/posts/customizing-your-grub-dual-boot-with-style/capa.webp
authors: [HarukaYamamoto0]
slug: customizing-your-grub-dual-boot-with-style
---

Hey there! 👋  
Today I’m going to teach you (or at least try) how to add a theme to **GRUB**, so every time you boot your PC or switch operating systems, you don’t have to stare at that ugly default screen anymore.  
Let’s turn this:

#### Before

![Before](https://imgur.com/usgstFM.jpg)

Into this 👇

#### After

![After](https://imgur.com/HqZ3hcQ.jpg)

<!-- truncate -->

## What Is GRUB?

For those unfamiliar, **GRUB** is a boot manager that comes by default with most Linux distributions.  
It’s essential if you use **dual boot** — that’s when you run more than one operating system (like Linux and Windows) on the same computer.

If you’re dual-booting without a boot manager, switching systems can be a nightmare — you’d have to open your BIOS every time and manually change the boot order.  
With GRUB (or any boot manager), you can visually select which OS to start; no BIOS trips are required.

## Why Customize GRUB?

- 🎨 **Pure aesthetics** – Who said dual boot has to be ugly?
- 🔍 **Visual clarity** – identify each OS at a glance [^1]
- 🚀 **Style points** – Because a slick boot screen says _“this machine belongs to someone serious”_

## Downloading a Theme

Enough theories — let’s jump to the fun part: finding a theme you like.  
Head to the **GNOME-Look GRUB Themes section**:

👉 [GNOME-Look — GRUB Themes](https://www.gnome-look.org/browse?cat=109&ord=rating)

That site has tons of GRUB themes.  
My personal favorite is this one: [Star Rail Theme](https://www.gnome-look.org/p/2076542), which includes multiple subthemes — I’m currently using the **Anaxa** version.

## Installing the Theme

Before you mention it — yes, I know about **GRUB Customizer**,  
but we’re doing it the _proper way_ via terminal because it’s simpler and cleaner.

Using the [Star Rail Theme](https://www.gnome-look.org/p/2076542) as an example:  
Click **Download**, choose the version you like (`Anaxa.tar.gz` in my case), and extract it — it’s a GZIP file that contains all theme assets.

Once extracted, you’ll get a folder like this:

```shell
Anaxa
├── background.png
├── icons
│   ├── ......
│   ├── windows11.png
│   ├── windows.png
│   └── zorin.png
├── select_c.png
├── select_e.png
├── select_w.png
└── theme.txt
```

Basically, a theme is a folder with images and one main file — `theme.txt` — that defines layout and asset positioning.

### Step 1 — Create the GRUB Theme Folder

If it doesn’t already exist:

```shell
sudo mkdir -p /boot/grub/themes/
```

### Step 2 — Copy the Theme

```shell
sudo cp -r Downloads/Anaxa /boot/grub/themes/
```

### Step 3 — Check Your Screen Resolution

Run this command to get your monitor’s resolution:

```shell
xdpyinfo | awk '/dimensions/ {print $2}'
```

It should return something like `1920x1080`.

### Step 4 — Configure GRUB

Open the GRUB configuration file:

```shell
sudo nano /etc/default/grub
```

Find or add this line (replace **Anaxa** with your theme name):

```shell
GRUB_THEME="/boot/grub/themes/Anaxa/theme.txt"
```

Then scroll down and find this block:

```shell
# The resolution used on graphical terminal
# note that you can use only modes which your graphic card supports via VBE
# you can see them in real GRUB with the command `vbeinfo'
# GRUB_GFXMODE=auto
```

Uncomment and set the correct resolution you got earlier:

```shell
GRUB_GFXMODE=1920x1080
```

Save and exit (`CTRL+X`, then `Y`, then **Enter**).

Finally, update GRUB so it applies the new settings:

```shell
sudo grub-mkconfig -o /boot/grub/grub.cfg
```

Restart your computer, and voilà — your new stylish GRUB should appear:

![After](https://imgur.com/bkDzpd4.jpg)

> Ignore the small “Anaxa” label in the bottom-right corner — that’s just part of the theme preview.

### Edit Note

I forgot to mention it — **Ventoy** also uses GRUB under the hood,
so it’s totally possible to theme it too.
Maybe I’ll cover that in a future post.
Oh, and I’ll probably update the Star Rail theme link to the GitHub version later.

[^1]: GRUB supports icons for easier visual identification, and most themes already include full icon sets for operating systems and Linux distros (like the ones in the example images).
