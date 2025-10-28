---
title: How to install JetBrains Toolbox
description: Here is a simple and straightforward guide to getting Toolbox running on Linux Mint (and it also applies to Ubuntu/Debian in general).
date: 2025-08-25
tags: [linux]
authors: [HarukaYamamoto0]
slug: how-to-install-jetbrains-toolbox
keywords: [How to install, JetBrains, Toolbox]
---

JetBrains Toolbox is the official manager for installing and updating IDEs like IntelliJ IDEA, PyCharm, CLion, etc. It makes life much easier, but installation isn't as straightforward for those who've never used it. For example, I often downloaded the Toolbox .tar.gz file, extracted it from Downloads, and installed it. Then, I'd end up deleting the Toolbox folder from Downloads, and it would crash because it couldn't find the binary.

<!-- truncate -->

Here's a simple and straightforward guide to getting Toolbox running on Linux Mint (also valid for Ubuntu/Debian in general).

## 1. Download Toolbox

Go to the [official JetBrains website](https://www.jetbrains.com/toolbox-app/) and download the latest .tar.gz file.

Assuming the file was downloaded to `~/Downloads`, extract it with:

```bash
cd ~/Downloads
tar -xvf jetbrains-toolbox-<version>.tar.gz -C ~/.local/
```

This will create something like:

```
~/.local/jetbrains-toolbox-<version>/
```

> ⚠️ Important: **Do not extract within `~/.local/share/JetBrains/Toolbox/`**.
> This folder is used by the application itself to store data and settings.
> The downloaded binary should be in a separate directory, such as `~/.local/`.

## 2. Running for the first time

Go into the extracted directory and run:

```bash
cd ~/.local/jetbrains-toolbox-<version>/
./jetbrains-toolbox
```

What happens on the first run:

- It creates the internal folders in `~/.local/share/JetBrains/Toolbox/`
- It automatically generates a `.desktop` shortcut in `~/.local/share/applications`
- From then on, Toolbox appears in the system menu (Mint Menu / Application Menu)

## 3. Updates

The tool itself updates automatically. You don't need to repeat this process every time a new version is released.

**JetBrains Toolbox** is designed to run in the user directory (`~/.local`), without requiring root or system permissions.

After the first run, it takes care of shortcuts and updates itself.

Installed once, forgotten.
