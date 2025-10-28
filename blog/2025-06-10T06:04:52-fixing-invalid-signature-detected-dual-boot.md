---
title: Fixing “Invalid Signature Detected” Error in Dual Boot
description: Learn how to fix the “Invalid Signature Detected” error when enabling Secure Boot in a Linux and Windows dual boot setup. Quick, safe, and simple fix using signed GRUB packages.
date: 2025-06-10T06:04:52
tags: [linux, dual-boot, troubleshooting, grub, secure-boot]
image: /img/posts/fixing-invalid-signature-detected-dual-boot/capa.webp
authors: [HarukaYamamoto0]
slug: fixing-invalid-signature-detected-dual-boot
---

## Context

So, I was trying to install _Battlefield 2042_ and found out that the latest update **requires Secure Boot to be enabled**.  
No big deal — I use dual boot (Zorin OS for work, Windows 10 for gaming), so I jumped into my X99 Qiyida D4 BIOS and enabled Secure Boot.

The result?  
Linux completely refused to boot and instead displayed this lovely message:

> **“Invalid signature detected. Check Secure Boot policy in Setup”**

![Invalid signature detected. Check Secure Boot policy in Setup](https://imgur.com/xfmFtEh.jpg)

Great. Here we go again...

<!-- truncate -->

## The Problem

The GRUB that comes with Zorin (and pretty much any other distro) **doesn’t have a valid digital signature for Secure Boot**.  
So the firmware looks at it and basically says:

> “Don’t know you. Don’t trust you. Not loading you.”

…and that’s it — your boot stops right there.

## The Solution

Good news: you **don’t need to disable Secure Boot forever** or mess around with custom keys.  
All you need to do is reinstall GRUB using the _officially signed_ packages.  
It’s quick and painless.

### 🧩 Step 0 — Temporarily Disable Secure Boot

Yeah, sounds ironic, but you need to **turn Secure Boot off** for now.  
If it stays on, GRUB won’t load and you can’t fix anything.

### Step 1 — Update Your System

```bash
sudo apt update
```

### Step 2 — Install the Correct Packages

```bash
sudo apt install grub-efi-amd64-signed shim-signed
```

### Step 3 — Reinstall GRUB

```bash
sudo grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=grub
```

### Step 4 — Update the Configuration

```bash
sudo update-grub
```

### Step 5 — Reboot and Re-enable Secure Boot

Go back into your BIOS, turn Secure Boot back on — and boom 💥
GRUB will now load without any complaints.

## Why This Works

- **`grub-efi-amd64-signed`** → the “officially signed” GRUB, recognized by the firmware
- **`shim-signed`** → acts like a translator: the system trusts it, and it trusts GRUB
- Reinstalling ensures proper configuration for UEFI + Secure Boot mode

## The Result

Now I can:

- Keep Secure Boot enabled (Battlefield’s happy)
- Use Zorin OS for work without issues
- Enjoy a slightly more secure setup — not that I really care 😅

All of this without dealing with **custom keys, manual certificates, or 30-step guides**.
Just a clean, simple fix that works.
