# Frequently Asked Questions

## How do I use Xenia?

Refer to the [Quickstart page](quickstart).

## What are Xenia's system requirements?

See the [Quickstart page](quickstart/system_requirements)

## How do I fix the VCRUNTIME error?

Refer to the [Quickstart page](quickstart).

## Why do I get an error saying "Your CPU does not support AVX"?

Your CPU doesn't meet the minimum requirements.

See the [Quickstart page](quickstart/system_requirements)

## How do I dump games?

See the guide in [Quickstart](quickstart/dumping).

---

## How do I improve performance?

Upgrade your PC or wait for optimizations.

## Does Xenia support OpenGL/Direct3D11?

No. (see the [system requirements](https://github.com/xenia-project/xenia/wiki/Quickstart#system-requirements))

## Why is the audio delayed?

Audio is one of the least worked on things in Xenia. There is no fix.

## How do I fix "Graphics device lost (probably due to an internal error"?

You can't.

## Can you add support for Windows Me? How about my Pentium II?

Support for older operating systems and processors will not be added unless a
contributor steps up to build and maintain them. All active contributors are on
modern systems and busy with higher priority tasks. Whether the emulator runs on
Windows Vista or not doesn't matter if it can't run games.

## Does Xenia run on Linux or macOS?

Not natively, but Xenia may run with Wine on Linux **using Vulkan**.
!!! warning "[D3D12 will only work on Windows 10+ due to vkd3d not being supported.](https://github.com/xenia-project/xenia/wiki/Quickstart#minimum)"

macOS is not compatible due to requiring MoltenVK/Metal support which isn't implemented in Xenia.

## Can I dump games using an Xbox One/Series S|X or run them directly from the disc?

No, and no.

## Why is my game in trial/demo mode?

See [this option](https://github.com/xenia-project/xenia/wiki/Options#Run_games_as_fullactivated).

## How do I use xenia-vfs-dump?
xenia-vfs-dump is a command-line tool use for dumping content from STFS and SVOD containers.

You can download it from [here](https://github.com/xenia-project/release-builds-windows/releases/latest/xenia.zip).

Usage: `xenia-vfs-dump [[DestinationOutput](ContainerPath])`

---

## Does game *X* run?
Check the [compatibility list](https://github.com/xenia-project/game-compatibility#game-compatibility). If it's not there, ask in the [Discord #help channel](https://discord.gg/Q9mxZf9) or test it yourself.

<!--- TODO(halotroop2288): Solve the dynamic compatibility tracker problem

??? info "Compatibility List"
    <iframe style="background-color: white;" src="https://azu.github.io/github-issue-widget/?owner=xenia-project&repo=game-compatibility&limit=100&state=open&label=state-playable" allowtransparency="false" frameborder="yes" scrolling="yes" width="100%"></iframe>

--->

### What's the difference between Gameplay and Playable?
Gameplay means the game reaches gameplay, even if the game is unplayable.

---

# Why aren't saves working? (Storage device not found/full/not detected, etc)

Saves are broken in some games in Xenia, especially ones with user profile saves.

As for saves, etc that worked previously in older builds of Xenia, create a text file in the same directory as xenia.exe named `portable.txt`.

## Where are saves stored?

Saves are in `Documents\xenia\content` by default.

If a `portable.txt` file is in the same directory as xenia.exe the `content` folder will be in the same directory as `xenia.exe`.

<!---
# How do I transfer saves to/from Xenia?
--->

---

## Can Xenia play games online with Xbox Live?

Xenia may connect to **custom** servers in the far future, but it will ***never*** connect to official Xbox Live servers.

Xenia does not support System Link either.

## How do I check my FPS?

With an FPS indicator like [Rivatuner](https://www.guru3d.com/files-details/rtss-rivatuner-statistics-server-download.html).

## What is ROV?

See [ROV](https://github.com/xenia-project/xenia/wiki/ROV)

## What are Xenia's options?

See the [Options page](https://github.com/xenia-project/xenia/Options).

## Can Xenia run original Xbox games?

Xenia does not support backwards compatibility, and therefore, cannot run original Xbox games.

For that there's [Cxbx-Reloaded](https://github.com/Cxbx-Reloaded/Cxbx-Reloaded), [xqemu](https://github.com/xqemu/xqemu), and [Xemu](https://github.com/mborgerson/xemu).

## I have a copy of the XDK. Do you want it?

***No.*** **Do not** post links or downloads to such resources or **you will be banned**.

## Build tweaks
### 4:3

To play games in 4:3 you need to build Xenia with `video_mode->is_widescreen = 0` instead of 1 [here](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xboxkrnl/xboxkrnl_video.cc#L138).

**[Refer to building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)**

## Hacks/mods

Refer to the [Game hacks, mods, etc. page](https://github.com/xenia-project/xenia/wiki/Game-hacks,-mods,-etc).
