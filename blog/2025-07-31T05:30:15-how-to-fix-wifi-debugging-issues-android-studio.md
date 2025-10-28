---
title: How to Finally Fix WiFi Debugging Issues in Android Studio
description: A reliable guide to solving common WiFi debugging problems in Android Studio using ADB pairing. Learn how to connect your device without QR codes or unstable connections.
date: 2025-07-31T05:30:15
tags: [android, wifi, adb, android-studio]
image: /img/posts/how-to-fix-wifi-debugging-issues-android-studio/capa.webp
authors: [HarukaYamamoto0]
slug: how-to-fix-wifi-debugging-issues-android-studio
---

![There was an error pairing the device](https://imgur.com/T2L39DI.jpg)

## The Common Problem

How many times have you gone through this frustrating situation?

1. You enable WiFi debugging on your device
2. You scan the QR code (or enter the pairing code) in Android Studio
3. It works for a while — until you restart the device or switch networks
4. Then you lose the connection and have to repeat the entire process
5. Or sometimes the QR code simply refuses to work

WiFi debugging in Android Studio, when properly configured, offers a **smoother and more productive** development experience.  
The key is understanding the difference between pairing and debugging ports, and using the `adb pair` command to create a **persistent trust link** between your device and your computer.

Following this guide, you’ll never need to scan QR codes again or deal with unstable connections.  
The command-line pairing process is faster, more reliable, and gives you full control over the connection.

<!-- truncate -->

## The Definitive Solution

### Prerequisites

Before you start, make sure that:

- **Android Studio** is installed and ADB is properly configured
- **Developer options** are enabled on your device [^1]
- Your computer and device are on the **same WiFi network**
- Your phone has a **static IP address** configured [^2]

### Step 1: Enable Wireless Debugging

1. On your Android device, go to **Settings > Developer options**
2. Enable **“Wireless debugging”**
3. Tap **“Wireless debugging”** to open its settings
4. Tap **“Pair device with pairing code”**

You’ll see a screen like this:  
![code pairing screen](https://imgur.com/wZmKWN4.jpg)

**Note:** Two important pieces of information appear here:

- **Pairing code** (e.g., `817324`)
- **IP address and pairing port** (e.g., `192.168.18.3:39233`)

### Step 2: Pair via Terminal

Open your terminal (or Command Prompt on Windows) and run:

```bash
adb pair 192.168.18.3:39233
```

**Important:** Use the **pairing port**, not the debugging port!

The system will ask for the pairing code:

```bash
Enter pairing code: 817324
Successfully paired to 192.168.18.3:39233 [guid=adb-XXXXXXXXX]
```

### Step 3: Connect for Debugging

After pairing, the popup will close.
Now take note of the **debugging port** shown on your device:

<img src="https://imgur.com/RBTrH4D.jpg" alt="mobile debug screen" />

Connect using the debugging port (in my case, `36541`):

```bash
adb connect 192.168.18.3:36541
```

Expected output:

```bash
connected to 192.168.18.3:36541
```

### Step 4: Verify the Connection

Check if your device is connected:

```bash
adb devices
```

Expected result:

```bash
List of devices attached
192.168.18.3:36541      device
```

## Why This Works

### Trusted Connection

The `adb pair` command establishes a **cryptographically trusted link** between your computer and your Android device.
This trust relationship is persistent and doesn’t need to be repeated every time.

### Port Difference

- **Pairing port:** Used once to establish trust
- **Debugging port:** Used for all future sessions

### Automatic Reconnection

After the first pairing, Android Studio can:

- Automatically detect the device on the network
- Reconnect without manual input
- Keep the connection much more stable

## Benefits of WiFi Debugging

- **Freedom of movement:** No cables restricting your workspace
- **Real-world testing:** Device operates normally while debugging
- **Multiple devices:** Connect and debug several devices simultaneously
- **USB port preservation:** Save wear on your computer’s USB ports

## Additional Resources

- [Official ADB Documentation](https://developer.android.com/studio/command-line/adb)
- [Android Studio Debugging Guide](https://developer.android.com/studio/debug)
- [Developer Options on Android](https://developer.android.com/studio/debug/dev-options)

[^1]: [https://developer.android.com/studio/debug/dev-options#enable](https://developer.android.com/studio/debug/dev-options#enable)
[^2]: I personally recommend setting a static IP directly on your router so you can manage all devices from one place.
