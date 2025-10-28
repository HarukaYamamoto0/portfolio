---
title: 📥 How to Install JetBrains Toolbox on Linux Mint (or Any Ubuntu-Based Distro)
description: A simple and reliable guide to installing and running JetBrains Toolbox on Linux Mint, Ubuntu, or any Debian-based distro — without breaking it after setup.
date: 2025-08-25T10:02:24
tags: [linux, jetpack-compose, tools, ubuntu, tutorial, compose, backend]
image: /img/posts/how-to-install-jetbrains-toolbox-on-linux-mint/capa.webp
authors: [HarukaYamamoto0]
slug: how-to-install-jetbrains-toolbox-on-linux-mint
---

**JetBrains Toolbox** is the official manager for installing and updating IDEs like IntelliJ IDEA, PyCharm, CLion, and others.  
It makes life a lot easier — but installation can be confusing the first time.  
For example, I used to download the `.tar.gz`, extract it into `Downloads`, run it, and later delete the folder — which, of course, broke everything because the app could no longer find its binary.

Here’s a **simple and direct guide** to properly install Toolbox on **Linux Mint** (and it works the same for Ubuntu/Debian in general).

<!-- truncate -->

## 1. Download the Toolbox

Go to the [official JetBrains website](https://www.jetbrains.com/toolbox-app/) and download the latest `.tar.gz` file.

Assuming it was downloaded to `~/Downloads`, extract it with:

```bash
cd ~/Downloads
tar -xvf jetbrains-toolbox-<version>.tar.gz -C ~/.local/
```

This will create something like:

```bash
~/.local/jetbrains-toolbox-<version>/
```

> ⚠️ **Important:** > **Do not extract it inside** `~/.local/share/JetBrains/Toolbox/`.
> That folder is used by the app itself to store data and settings.
> The downloaded binary should stay in a **separate directory**, such as `~/.local/`.

## 2. Run It for the First Time

Navigate to the extracted directory and run the app:

```bash
cd ~/.local/jetbrains-toolbox-<version>/
./jetbrains-toolbox
```

Here’s what happens the first time you run it:

- It creates internal folders in `~/.local/share/JetBrains/Toolbox/`
- It automatically generates a `.desktop` shortcut in `~/.local/share/applications`
- From then on, **JetBrains Toolbox appears in your system menu** (Mint Menu / Applications Menu)

## 3. Updates

The Toolbox updates itself automatically.
You don’t need to repeat this process every time a new version is released.

**JetBrains Toolbox** is designed to run entirely inside the user’s directory (`~/.local`),
so it doesn’t require root privileges or system-wide installation.

Once installed, it takes care of everything — shortcuts, updates, and maintenance.

> Install it once, and forget about it.
