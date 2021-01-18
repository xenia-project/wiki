### How do I use Xenia?
Refer to the [Quickstart page](Quickstart).
#
### What are Xenia's system requirements?
Refer to the [Quickstart page](Quickstart#system-requirements).
#
### How do I fix the VCRUNTIME error?
Refer to the [Quickstart page](Quickstart).
#
### How do I fix "Graphics device lost (probably due to an internal error"?
You can try using [Vulkan](Options#rendererbackend) as a *workaround*, **but don't expect it to work**.

Also try disabling [ROV](Options#rov-rasterizer-ordered-views) **especially if you have an AMD GPU**.
#
### Can you add support for Windows Me? How about my Pentium II?
Support for older operating systems and processors will not be added unless a
contributor steps up to build and maintain them. All active contributors are on
modern systems and busy with higher priority tasks. Whether the emulator runs on
Windows Vista or not doesn't matter if it can't run games.
#
### Does Xenia run on Linux or macOS?
Not natively, but Xenia runs with Wine on Linux.*
  * [D3D12 will only work on Windows 10 due to vkd3d not being supported.](Quickstart#minimum)

macOS is not compatible due to requiring MoltenVK/Metal support which isn't implemented in Xenia.
#
### How do I dump/rip games?
See the guide in [Quickstart](Quickstart#How-to-rip-games).
#### Why is my game in trial/demo mode?
See [this option](Options#Run_games_as_fullactivated).
#
### How do I use xenia-vfs-dump?
xenia-vfs-dump is a command-line tool use for dumping content from STFS and SVOD containers.

You can download it from [here](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-vfs-dump_master.zip?branch=master&job=Configuration:%20Release&pr=false).

Usage: `xenia-vfs-dump [ContainerPath] [DestinationOutput]`
<details><summary>Example GIF (click to expand)</summary>

![](https://cdn.discordapp.com/attachments/561407879823753217/686821806119845888/vfs.gif)</details>
#
### Does game *X* run?
Check the [compatibility list](https://github.com/xenia-project/game-compatibility#game-compatibility). If it's not there, ask in the [Discord #help channel](https://discord.gg/5g93S8H) or test it yourself.

#
### Why aren't saves working? (Storage device not found/full/not detected, etc)
Saves are broken in a somee of games in Xenia, especially ones with user profile saves.

As for saves, etc that worked previously in older builds of Xenia, create a text file in the same directory as xenia.exe named `portable.txt`.

#### Where are saves stored?
Saves are in `Documents\xenia\content` by default.

#### How do I transer saves to/from Xenia?
[TODO](How-to-transfer-saves-to-or-from-Xenia)
#
### Input
Xenia only supports XInput controllers by default, which includes but is not limited to Xbox 360, and Xbox One controllers.

For non-XInput controllers, [SDL](Options#HID_Input) must be used.

You can use the mouse to control the analog/joysticks, and rebind the keyboard controls ***with [x360ce](https://www.x360ce.com/)***.
<details><summary>Default keyboard layout (click to expand)</summary>

![](https://cdn.discordapp.com/attachments/308207592482668545/437198231613734912/xenia_keyboard-layout.png)</details>

Xenia does not support mice, accessories like the Kinect, uDraw GameTablet, or microphones.
#
### Can Xenia play games online with Xbox Live?
Xenia may connect to *custom* servers in the far future, but it will ***never*** connect to official Xbox Live servers.

Xenia does not support System Link either.
#
### How do I check my FPS?
With an FPS indicator like [Rivatuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html).
#
### What is ROV?
Improves performance and accuracy. Enabled by default on supported GPUs. Recommended to be [disabled](Options#rov-rasterizer-ordered-views) for AMD GPUs.

<details><summary>Long ROV (rasterizer-ordered views) explanation [click to expand]</summary>

The Direct3D 12 version of Xenia has two code paths for rendering output (the currently used one is displayed in the window title bar): "RT" (Render Target Views) and "ROV" (Rasterizer-Ordered Views).

On the Xbox 360, pixels are written to a 10 MB memory chip called the eDRAM, and many games reinterpret the data in it in different formats for various purposes (clearing, HDR rendering, etc.) This is not the case on PC, where different render targets are independent from each other.

The "RT" path uses conventional PC render targets (RTV — Render Target Views — and DSV — Depth-Stencil Views — in Direct3D terms) for rendering output, and copies data between PC render target textures and the 10 MB buffer to allow for reinterpretation of eDRAM data in different formats.

However, copying has a very heavy performance impact, causing noticeable slowdowns even on modern graphics cards. Another issue is that the Xbox 360 has certain render target formats not available on the PC (7e3 HDR floating-point, 16-bit fixed-point with −32…32 range, 20e4 floating-point depth) that have to be approximated with other render target formats. This causes unfixable transparency issues (because the blending hardware works with different ranges and precision of numbers) and depth buffer-related issues such as shadow acne.

Using the Rasterizer-Ordered Views (ROV) feature of Direct3D 12 allows Xenia to overcome those issues by doing blending and depth/stencil testing manually in pixel shaders, rendering directly to the 10 MB buffer. This allows for much higher performance since there's no expensive data copying, and better accuracy because of no pixel format limitations.

"Rasterizer-ordered" here means that access to the buffer is synchronized — if multiple polygons in a single draw call are covering the same pixel, the buffer will be accessed in the correct order, without conflicts that would happen if the data was written through a regular unordered access view (UAV). You can read more about this feature at https://software.intel.com/en-us/gamedev/articles/rasterizer-order-views-101-a-primer, another common use for ROV in game development is order-independent transparency algorithms.

However, this is a hardware feature, and thus on older graphics cards, Xenia is limited to the RT path.

Rasterizer-ordered views are used by default in Xenia where available, but if you're experiencing graphical issues, you may try [disabling it in the config](Options/#disable-rov-rasterizer-ordered-views).</details>

The minimum requirements for ROV are:
  * Nvidia GeForce GTX 950 on desktops, GTX 965M on laptops (Maxwell 2nd generation — 2014)
  * AMD Radeon Vega (GCN 5th generation — 2017)
  * Intel HD Graphics 4000 (2012)

#
### What are all of Xenia's options?
For all of Xenia's options, see the [Options page](Options).
#
### What's the difference between Gameplay and Playable?
Gameplay means the game reaches gameplay, even if the game is unplayable.
#
### Can Xenia run OG (original) Xbox games?
Xenia does not support OG Xbox games/BC (backwards compatibility).

For that there's [Cxbx-Reloaded](https://github.com/Cxbx-Reloaded/Cxbx-Reloaded) and [xqemu](https://github.com/xqemu/xqemu).
#
### I have a copy of the XDK. Do you want it?
**No.** Do not post links or downloads to such resources or you will be banned.
#
### Build tweaks
#### 4:3
To play games in 4:3 you need to build Xenia with `video_mode->is_widescreen = 0` instead of 1 [here](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xboxkrnl/xboxkrnl_video.cc#L138).

*[Refer to building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)*
#
### Hacks/mods
Refer to the [Game hacks, mods, etc. page](Game-hacks,-mods,-etc).