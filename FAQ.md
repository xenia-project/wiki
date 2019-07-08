# How do I use Xenia?

Refer to the [Quickstart page](../wiki/quickstart).


# Does Xenia run on Linux or macOS?

Not natively, but Xenia might run with Wine on Linux.

macOS requires MoltenVK support which isn't implemented in Xenia.


# How do I dump/rip games?

Refer to the guide in [Quickstart](../wiki/Quickstart#How-to-rip-games).

## Why is my game in trial/demo mode?

***By default Xenia runs ALL XBLA/digital games in demo/trial mode.***

To run games in full/activated mode you will have to compile Xenia with [mask_ptr =](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xam/xam_content.cc#L52) 0xFFFFFFFF instead of 0.

*[See building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)*


# Does game *X* run?

Check the [compatibility list](https://github.com/xenia-project/game-compatibility/issues). If it's not there, ask in the [Discord #help channel](https://discord.me/xenia-emulator) or test it yourself.

**Asking for a game to be fixed won't get it fixed any faster.**

## Can Xenia run OG (original) Xbox games?

Xenia does not support OG Xbox games/BC (backwards compatibility).

For that there's [Cxbx-Reloaded](https://github.com/Cxbx-Reloaded/Cxbx-Reloaded) and [xqemu](https://github.com/xqemu/xqemu).


# Can Xenia play games online with Xbox Live?

No. Xenia will never connect to official Xbox Live servers. Custom servers are a possibility, but won't happen anytime soon.


# Input

Xenia natively supports XInput controllers, which includes but is not limited to:
* Xbox 360 Controller
* Xbox One Controller

For non-XInput controllers, wrapper(s) will have to be used:
* [DS4Windows (Dualshock 4/PS4 controller)](https://github.com/Ryochan7/DS4Windows/releases)
* [x360ce *x64* (DInput/Generic Controller/M+KB)](https://www.x360ce.com/)

You can use the mouse to control the analog/joysticks, and rebind the keyboard controls ***with x360ce***.

<details>
<summary>Default keyboard layout (click to expand)</summary>

![](https://cdn.discordapp.com/attachments/308207592482668545/437198231613734912/xenia_keyboard-layout.png)

</details>

Xbox 360 accessories like the Kinect are not supported.


# How do I check my FPS?

With an FPS indicator like [Rivatuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html).


# Options

For all of Xenia's options, refer to the [Options page](../wiki/Options).


# What's the difference between Gameplay and Playable?

Gameplay means the game reaches gameplay, even if the game is unplayable.


# Build tweaks

## 4:3

To play games in 4:3 you need to build Xenia with `video_mode->is_widescreen = 0` instead of 1 [here](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xboxkrnl/xboxkrnl_video.cc#L138).

*[Refer to building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)*


# Hacks/mods

Refer to the [Game hacks, mods, etc. page](../wiki/Game-hacks,-mods,-etc).


# Troubleshooting

Make sure:

* You're not using outdated or invalid [launch parameters](#Options).
* You downloaded a *Release* build, not a *Checked* one.

Saves are broken in a majority of games, especially ones with user profile saves.

As for saves, etc that worked previously in older builds of Xenia, create a text file in the same directory as xenia.exe named `portable.txt`.

Saves are in `Documents\xenia\content` by default.

If you're having problems with the Halo games make sure that you're using a [D3D12](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-d3d12.zip?branch=d3d12&job=Configuration%3A%20Release&pr=false) build and your GPU supports it.

*Halo: Combat Evolved Anniversary does not work.*

**Xenia is a *work in progress* so expect issues.**