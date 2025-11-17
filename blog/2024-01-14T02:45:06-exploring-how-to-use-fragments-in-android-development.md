---
title: Exploring How to Use Fragments in Android Development
description: Learn how to use Fragments in Android development to create modular, flexible, and reusable UI components. A beginner-friendly guide with practical examples in Kotlin.
date: 2024-01-14T02:45:06
tags: [android, kotlin, ui-ux, fundamentals]
image: /img/posts/exploring-how-to-use-fragments-in-android-development/capa.webp
authors: [HarukaYamamoto0]
slug: exploring-how-to-use-fragments-in-android-development
---

> Before we begin, I should mention that I’m still a beginner in Android development — and yes, I still code on my phone! So it won’t be possible to show examples using Android Studio.

Hello, Android developers! 👋  
Today we’re going to understand what fragments are and how they can transform the way we design interfaces in Android applications.

<!-- truncate -->

## What Are Fragments?

If you’re starting out in Android development, understanding fragments is essential.  
They act as modular parts of an activity, providing flexibility and reusability.  
Think of them as **LEGO pieces** used to build dynamic interfaces.

## Setting Up Dependencies

Before diving into fragments, we need to configure some dependencies.  
Add the **Google Maven repository** to your top-level `build.gradle` file:

```groovy
dependencyResolutionManagement {
  repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
  repositories {
      google()
  }
}
```

Then, add the `fragment-ktx` dependency in your module’s `build.gradle` file:

```groovy
dependencies {
  implementation("androidx.fragment:fragment-ktx:1.5.5")
}
```

## Creating the Fragment Layout

Before implementing the class, let’s prepare the environment.
Create a new layout named `fragment_example.xml`:

```xml

<LinearLayout xmlns:android="https://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:gravity="center"
              android:orientation="vertical">

    <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="Fragment Example"
            android:textColor="@android:color/white"
            android:textSize="22sp"
            android:textStyle="bold"/>

</LinearLayout>
```

Now, define where the fragment will appear in your main layout (`activity_main.xml`) using `FragmentContainerView`:

```xml

<LinearLayout xmlns:android="https://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:gravity="center"
              android:orientation="vertical">

    <androidx.fragment.app.FragmentContainerView
            android:id="@+id/fragment_container"
            android:layout_width="match_parent"
            android:layout_height="match_parent"/>

</LinearLayout>
```

## Creating the Fragment Class

Finally, let’s create the fragment class by extending `Fragment` and overriding the `onCreateView` method:

```kotlin
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup

class ExampleFragment : Fragment() {
  override fun onCreateView(
    inflater: LayoutInflater,
    container: ViewGroup?,
    savedInstanceState: Bundle?
  ): View {
    return inflater.inflate(R.layout.fragment_example, container, false)
  }
}
```

### A More Concise Alternative

A cleaner and shorter way to define a fragment is:

```kotlin
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.View

class ExampleFragment : Fragment(R.layout.fragment_example) {
  override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
    super.onViewCreated(view, savedInstanceState)
  }
}
```

This approach removes the need to override `onCreateView()`.
I’ve seen many tutorials that put logic inside `onCreateView()`, but that’s not ideal.
It’s better to use `onViewCreated()` since it’s called **after the fragment is attached to the activity and the layout is inflated**.
[Learn more about the Fragment lifecycle](https://www.devmedia.com.br/amp/ciclo-de-vida-do-fragments-no-android/33099)

## Attaching the Fragment to an Activity

There are two ways to attach a fragment to the container defined in `activity_main.xml`:
via XML or programmatically.

### Via XML

To attach it directly in XML, use the `android:name` attribute to specify the fragment’s path — in this example, `com.example.example.ExampleFragment`:

```xml

<LinearLayout xmlns:android="https://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:gravity="center"
              android:orientation="vertical">

    <androidx.fragment.app.FragmentContainerView
            android:id="@+id/fragment_container"
            android:name="com.example.example.ExampleFragment"
            android:layout_width="match_parent"
            android:layout_height="match_parent"/>

</LinearLayout>
```

### Programmatically

To attach a fragment programmatically, use a `FragmentTransaction` in your activity:

```kotlin
val fragment = ExampleFragment()
val fragmentTransaction = supportFragmentManager.beginTransaction()

fragmentTransaction.add(R.id.fragment_container, fragment)
fragmentTransaction.commit()
```

For better management, you can create a function to handle fragment transactions:

```kotlin
package com.example.example

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.fragment.app.Fragment

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    if (true) changeFragment(ExampleFragment())
    else changeFragment(Example2Fragment())
  }

  private fun changeFragment(fragment: Fragment) {
    val fragmentTransaction = supportFragmentManager.beginTransaction()
    fragmentTransaction.add(R.id.fragment_container, fragment)
    fragmentTransaction.commit()
  }
}
```

Fragments are key parts for creating **reusable and robust interfaces** in Android development.
Experiment, improve your skills, and start building dynamic UIs! 🚀👩‍💻👨‍💻

I hope this guide adds a little bit of magic to your Android development journey.
**Happy coding!** 👩‍💻👨‍💻
