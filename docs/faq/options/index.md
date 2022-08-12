# Options / Configuration

## How to use

* Run xenia if you haven't before.
* [Show file name extensions in Explorer](https://social.technet.microsoft.com/wiki/contents/articles/1784.windows-how-to-view-file-name-extensions.aspx).
* Go to `Documents\Xenia` and open `xenia.config.toml` in a text editor like [Notepad++](https://notepad-plus-plus.org/download/).
* If a `portable.txt` file is present in the same directory as `xenia.exe` it will be in the same directory as `xenia.exe`.
    * Per-game configs go in `config\TitleID.config.toml`. Note that ***per-game configs are highly unstable***, only very few options can be changed from it safely or at all, as most emulator subsystems are initialized before per-game configs are loaded.
* For launchers/frontends like [Bottlenose](https://github.com/quinton-ashley/bottlenose) you can use the `--config` launch parameter to specify what config to use.
    * To launch specific games, add the path to the game before the launch options. For example: `xenia.exe path/to/game/default.xex --vsync=false`

---

# Config Settings

Each setting has a table explaining the different options.<br/>
Expand a section by clicking it to see the table.

|**setting_name**|**value type**|
|:---------------|:------------:|
|description     |    value     |

## APU
## CPU
??? info "Break on Unimplemented Instructions"
    --8<-- "docs/faq/options/cpu/break_on_unimplemented_instructions.md"

## Config
## Content
??? info "License Mask"
    --8<-- "docs/faq/options/content/license_mask.md"

## D3D12
??? info "CPU Readback After Render Target Resolving"
    --8<-- "docs/faq/options/d3d12/d3d12_readback_resolve.md"

## Display
## GPU
??? info "Allow Invalid Fetch Constants"
    --8<-- "docs/faq/options/gpu/gpu_allow_invalid_fetch_constants.md"
??? info "Renderer/Backend"
    --8<-- "docs/faq/options/gpu/gpu.md"
??? info "Render target path"
    --8<-- "docs/faq/options/gpu/render_target_path_d3d12.md"
??? info "Resolution Scaling"
    This is a hack, and as such, ***bugs should be expected***.
    === "Scale X"
        --8<-- "docs/faq/options/gpu/draw_resolution_scale_x.md"
    === "Scale Y"
        --8<-- "docs/faq/options/gpu/draw_resolution_scale_y.md"
??? info "Vertical Sync"
    --8<-- "docs/faq/options/gpu/vsync.md"

## General
## HID
??? info "Input Backend"
    --8<-- "docs/faq/options/hid/hid.md"

### HID WinKey
??? info "Windows Key Bindings"
    --8<-- "docs/faq/options/hid/winkey/winkey.md"
## Kernel
## Logging
## Memory
??? info "Protect Zero"
    --8<-- "docs/faq/options/memory/protect_zero.md"

## SDL
## Storage
## UI
## Vulkan
## Win32
## XConfig
??? info "User Language"
    --8<-- "docs/faq/options/xconfig/user_language.md"

## x64