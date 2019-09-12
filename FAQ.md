# System Requirements

* Windows 7+ for Vulkan, Windows 10 for D3D12 (Linux/macOS not *natively* supported)
  * Runs on Linux with Wine.
* 64-bit x86 processor with AVX support
  * You can check with [CPU-Z](https://www.cpuid.com/softwares/cpu-z.html)
* Vulkan compatible GPU from [this list](https://vulkan.gpuinfo.org/) or a D3D12 compatible GPU.
* [2017/2019 x64 Visual C++ Redistributable](https://support.microsoft.com/en-us/help/2977003/the-latest-supported-visual-c-downloads)

Xenia doesn't require any Xbox 360 system files.

Xenia will check for the minimum supported CPU and GPU on startup and error out
if one is not detected. Make sure that you have the latest drivers installed. **You cannot just remove the checks in the code and assume things will work.**

Windows Update tends to lag behind, so download GPU drivers from your manufacturer:

* **[AMD](https://www.amd.com/en/support)**
* **[NVIDIA](https://www.nvidia.com/Download/index.aspx)**
* **[Intel](https://downloadcenter.intel.com/product/80939/Graphics-Drivers)**

The D3D12 renderer is currently unoptimized so expect low FPS.


# How do I use Xenia?

Refer to the [Quickstart page](../wiki/quickstart).


# Can you add support for Windows Me? How about my Pentium II?

Support for older operating systems and processors will not be added unless a
contributor steps up to build and maintain them. All active contributors are on
modern systems and busy with higher priority tasks. Whether the emulator runs on
Windows Vista or not doesn't matter if it can't run games.


# Does Xenia run on Linux or macOS?

Not natively, but Xenia runs with Wine on Linux.

macOS is not compatible due to requiring MoltenVK support which isn't implemented in Xenia.


# How do I dump/rip games?

See the guide in [Quickstart](../wiki/Quickstart#How-to-rip-games).

## Why is my game in trial/demo mode?

***By default Xenia runs ALL XBLA/digital games in demo/trial mode.***

To run games in full/activated mode you need to change `license_mask = 0` to `-1` in `xenia.config.toml`.

It will be in `Documents\Xenia` by default. If `portable.txt` is present it will be in the same directory as xenia.exe.


# Does game *X* run?

Check the [compatibility list](https://github.com/xenia-project/game-compatibility/issues). If it's not there, ask in the [Discord #help channel](https://discord.me/xenia-emulator) or test it yourself.

**Asking for a game to be fixed won't get it fixed any faster.**

## Can Xenia run OG (original) Xbox games?

Xenia does not support OG Xbox games/BC (backwards compatibility).

For that there's [Cxbx-Reloaded](https://github.com/Cxbx-Reloaded/Cxbx-Reloaded) and [xqemu](https://github.com/xqemu/xqemu).


# Can Xenia play games online with Xbox Live?

Xenia may connect to **custom** servers in the far future, but it will **never** connect to official Xbox Live servers.


# Input

Xenia natively supports XInput controllers, which includes but is not limited to:
* Xbox 360 Controller
* Xbox One Controller

For non-XInput controllers, wrapper(s) will have to be used:
* [DS4Windows (Dualshock 4/PS4 controller)](https://github.com/Ryochan7/DS4Windows/releases)
* [x360ce *x64* (DInput/Generic Controller/M+KB)](https://www.x360ce.com/)

If you have any problems with those you can also try launching xenia via Steam.

You can use the mouse to control the analog/joysticks, and rebind the keyboard controls ***with x360ce***.

<details>
<summary>Default keyboard layout (click to expand)</summary>

![](https://cdn.discordapp.com/attachments/308207592482668545/437198231613734912/xenia_keyboard-layout.png)

</details>

Xbox 360 accessories like the Kinect are not supported.


# How do I check my FPS?

With an FPS indicator like [Rivatuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html). 

# Options

For all of Xenia's options, see the [Options page](../wiki/Options).


# What's the difference between Gameplay and Playable?

Gameplay means the game reaches gameplay, even if the game is unplayable.



# I have a copy of the XDK. Do you want it?

**No.** Do not post links or downloads to such resources or you will be banned.


# Build tweaks

## 4:3

To play games in 4:3 you need to build Xenia with `video_mode->is_widescreen = 0` instead of 1 [here](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xboxkrnl/xboxkrnl_video.cc#L138).

*[Refer to building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)*


# Hacks/mods

See the [Game hacks, mods, etc. page](../wiki/Game-hacks,-mods,-etc).


# Troubleshooting

Make sure:

* You're not using outdated or invalid [launch parameters](#Options).
* You downloaded a ***Release*** build, not a *Checked* one.

Saves are broken in a majority of games, especially ones with user profile saves.

As for saves, etc that worked previously in older builds of Xenia, create a text file in the same directory as xenia.exe named `portable.txt`.

Saves are in `Documents\xenia\content` by default.

If you're having problems with the Halo games make sure that your GPU supports D3D12.

*Halo: Combat Evolved Anniversary does not work.*

**Xenia is a *work in progress* so expect issues.**