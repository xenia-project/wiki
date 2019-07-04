# System Requirements

* Windows 7+ for Vulkan, Windows 10 for D3D12 (Linux/macOS not natively supported)
* 64-bit x86 processor supporting AVX
* Vulkan compatible GPU from [this list](https://vulkan.gpuinfo.org/) or a D3D12 compatible GPU.
* [2017/2019 x64 Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

Xenia will check for the minimum supported CPU and GPU on startup and error out
if one is not detected, make sure that you have the latest drivers installed.

Windows Update tends to lag behind, so download GPU drivers from your manufacturer:

* **[AMD](https://www.amd.com/en/support)**
* **[NVIDIA](https://www.nvidia.com/Download/index.aspx)**
* **[Intel](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)**

The D3D12 renderer is currently unoptimized so expect low FPS.

Xenia doesn't require any system files.

**You cannot just remove the checks in the code and assume things will work.**

Xenia will never connect to official Xbox Live servers. Connecting to custom servers is a possibility, but won't happen anytime soon.

Xenia will not support OG Xbox games/BC (backwards compatibility) anytime soon.  For that there's [Cxbx-Reloaded](https://github.com/Cxbx-Reloaded/Cxbx-Reloaded) and [xqemu](https://github.com/xqemu/xqemu).

# Can I get an exe?

[d3d12 (D3D12, recommended)](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-d3d12.zip?branch=d3d12&job=Configuration%3A%20Release&pr=false)
[Master (Vulkan, NOT recommended)](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-master.zip?branch=master&job=Configuration%3A%20Release&pr=false)

**Don't be surprised if there are problems with Vulkan.**

Xenia is sometimes detected as a virus. Ignore this, as it is a false positive.


# Troubleshooting

Make sure:

* You're not using outdated or invalid [launch parameters](#Options).
* You downloaded a *Release* build, not a *Checked* one.

Saves are broken in a majority of games, especially ones with user profile saves.

As for saves, etc that worked previously in older builds of Xenia, create a text file in the same directory as xenia.exe named `portable.txt`.

Saves are in `Documents\xenia\content` by default.

# Does Xenia run on Linux or macOS?

Not natively, but Xenia might run with Wine on Linux.

macOS requires MoltenVK support which isn't implemented in Xenia.


# How do I legally get games?

See [here](../wiki/How-to-rip-games).

You **CANNOT** play games directly from the disc drive. [The very few disc drives that *can* read Xbox 360 games require them to be dumped first, and can't be read by xenia directly.](http://wiki.redump.org/index.php?title=Microsoft_Xbox_and_Xbox_360_Dumping_Guide)

***By default Xenia runs ALL XBLA/digital games in demo/trial mode.***

To run games in full/activated mode you will have to compile Xenia with [mask_ptr =](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xam/xam_content.cc#L52) 0xFFFFFFFF instead of 0.

*[See Quickstart on GitHub](https://github.com/xenia-project/xenia#quickstart)*


# Does game *X* run?

Check the [compatibility list](https://github.com/xenia-project/game-compatibility/issues). If it's not there, ask in the [Discord #help channel](https://discord.me/xenia-emulator) or test it yourself.

Asking for a game to be fixed won't get it fixed any faster.

If you're having problems with the Halo games make sure that you're using a [D3D12](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-d3d12.zip?branch=d3d12&job=Configuration%3A%20Release&pr=false) build and your GPU supports it.

**Halo: Combat Evolved Anniversary does not work.**

**Xenia is a *work in progress* so expect issues.**


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


# Options

*To use these options, make a shortcut to xenia.exe, and in the target add a space followed by `--launchparameter=value`. Successive parameters require spaces. For example:* `xenia.exe --vsync=false --d3d12_resolution_scale=2`

* 2x resolution scaling (up to 1440p) **ONLY WITH ROV**: `--d3d12_resolution_scale=2` 

**ONLY 2X IS SUPPORTED.**

* Disable ROV (D3D12 build only) `--d3d12_edram_rov=false`

For testing only.

* Uncap FPS: `--vsync=false`

***This won't improve the framerate if your PC can't handle running the game at it's normal FPS.***

**This does not work with the Halo games.**

* Vulkan (on D3D12 build): `--gpu=vulkan`

**Vulkan should only be used if D3D12 isn't working. Don't expect it to work as it's currently unsupported.**

*For all of Xenia's options, see [here](https://gist.github.com/illusion98/7ab8e1bc17a9587d7144fa822d1dea34).*


# Build tweaks

## 4:3

To play games in 4:3 you need to build Xenia with `video_mode->is_widescreen = 0` instead of 1 [here](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xboxkrnl/xboxkrnl_video.cc#L138).

*[See Quickstart on GitHub](https://github.com/xenia-project/xenia#quickstart)*


# Hacks/mods

## Ultrawide (21:9, 32:9, etc)

**THIS WILL NOT INCREASE RESOLUTION**

Ultrawide (21:9, 32:9, etc) hacks are possible. This [guide](https://forums.rpcs3.net/thread-199065.html) is for rpcs3, but is applicable to Xenia.

Some games like Halo 3 have a more convenient method that doesn't require Cheat Engine (recommended to backup default.xex):

1. Decrypt and decompress default.xex with xextool (game must be extracted first)

2. Replace all `3F E3 8E 39` in default.xex with the [desired aspect ratio (Formatted Value)](http://www.wsgf.org/article/common-hex-values) in reverse order using a hex editor. For example, `39 8E 63 40` (32:9) would become `40 63 8E 39`*

*This won't work for all games. The Cheat Engine method has higher compatibility.*


# How do I check my FPS?

With an FPS indicator like [Rivatuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html).


# What's the difference between Gameplay and Playable?

Gameplay means the game reaches gameplay, even if the game is unplayable.