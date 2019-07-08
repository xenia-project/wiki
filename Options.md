To use these options, make a shortcut to xenia.exe, and in the target add a space followed by `--launchparameter=value`. 

Successive parameters require spaces. For example: `xenia.exe --vsync=false --d3d12_resolution_scale=2`


* 2x resolution scaling (up to 1440p) **ONLY WITH ROV**: `--d3d12_resolution_scale=2` 

  * **ONLY 2X IS SUPPORTED.**

* Uncap FPS: `--vsync=false`

  * *This won't improve the framerate if your PC can't handle running the game at it's normal FPS.*

  * **This does not work with the Halo games.**

* Vulkan (on D3D12 build): `--gpu=vulkan`

  * **Don't expect Vulkan to work as it's currently unsupported.**

<details>
<summary>All of Xenia's options (click to expand)</summary>

```
Updated 04/07/2019
xenia: usage: xenia some.xex

  Flags from xenia_main.cc:
    --apu (Audio system. Use: [any, nop, xaudio2])
        type: string default: "any"
    --content_root (Root path for content (save/etc) storage.)
        type: string default: ""
    --fullscreen (Toggles fullscreen)
        type: bool default: false
    --gpu (Graphics system. Use: [any, vulkan, null])
        type: string default: "any"
    --hid (Input system. Use: [any, nop, winkey, xinput])
        type: string default: "any"
    --mount_cache (Enable cache mount)
        type: bool default: false
    --mount_scratch (Enable scratch mount)
        type: bool default: false
    --target (Specifies the target .xex or .iso to execute.)
        type: string default: ""



  Flags from apu_flags.cc:
    --mute (Mutes all audio output.)
        type: bool default: false

  Flags from xma_decoder.cc:
    --libav_verbose (Verbose libav output (debug and above))
        type: bool default: false



  Flags from logging.cc:
    --flush_log (Flush log file after each log line batch.)
        type: bool default: true
    --log_debugprint (Dump the log to DebugPrint.)
        type: bool default: false
    --log_file (Logs are written to the given file (specify stdout for command
      line))
        type: string default: ""
    --log_level (Maximum level to be logged. (0=error, 1=warning, 2=info,
      3=debug))
        type: int32 default: 2

  Flags from main_win.cc:
    --win32_high_freq (Requests high performance from the NT kernel)
        type: bool default: true

  Flags from profiling.cc:
    --show_profiler (Show profiling UI by default.)
        type: bool default: false



  Flags from x64_backend.cc:
    --enable_haswell_instructions (Uses the AVX2/FMA/etc instructions on
      Haswell processors, if available.)
        type: bool default: true

  Flags from x64_emitter.cc:
    --emit_source_annotations (Add extra movs and nops to make disassembly
      easier to read.)
        type: bool default: false
    --enable_debugprint_log (Log debugprint traps to the active debugger)
        type: bool default: false
    --ignore_undefined_externs (Don't exit when an undefined extern is called.)
        type: bool default: true



  Flags from constant_propagation_pass.cc:
    --inline_mmio_access (Inline constant MMIO loads and stores.)
        type: bool default: true

  Flags from context_promotion_pass.cc:
    --store_all_context_values (Don't strip dead context stores to aid in
      debugging.)
        type: bool default: false



  Flags from cpu_flags.cc:
    --break_condition_gpr (GPR compared to)
        type: int32 default: -1
    --break_condition_op (comparison operator)
        type: string default: "eq"
    --break_condition_truncate (truncate value to 32-bits)
        type: bool default: true
    --break_condition_value (value compared against)
        type: uint64 default: 0
    --break_on_debugbreak (int3 on JITed __debugbreak requests.)
        type: bool default: true
    --break_on_instruction (int3 before the given guest address is executed.)
        type: uint64 default: 0
    --cpu (CPU backend [any, x64].)
        type: string default: "any"
    --disable_global_lock (Disables global lock usage in guest code. Does not
      affect host code.)
        type: bool default: false
    --disassemble_functions (Disassemble functions during generation.)
        type: bool default: false
    --load_module_map (Loads a .map for symbol names and to diff with the
      generated symbol database.)
        type: string default: ""
    --trace_function_coverage (Generate tracing for function instruction
      coverage statistics.)
        type: bool default: false
    --trace_function_data (Generate tracing for function result data.)
        type: bool default: false
    --trace_function_references (Generate tracing for function address
      references.)
        type: bool default: false
    --trace_functions (Generate tracing for function statistics.)
        type: bool default: false
    --validate_hir (Perform validation checks on the HIR during compilation.)
        type: bool default: false

  Flags from processor.cc:
    --break_on_start (Break into the debugger on startup.)
        type: bool default: false
    --debug (Allow debugging and retain debug information.)
        type: bool default: false
    --trace_function_data_path (File to write trace data to.)
        type: string default: ""

  Flags from stack_walker_win.cc:
    --debug_symbol_loader (Enable dbghelp debug logging and validation.)
        type: bool default: false



  Flags from debug_window.cc:
    --imgui_debug (Show ImGui debugging tools.)
        type: bool default: false



  Flags from emulator.cc:
    --time_scalar (Scalar used to speed or slow time (1x, 2x, 1/2x, etc).)
        type: double default: 1



  Flags from d3d12_command_processor.cc:
    --d3d12_edram_rov (Use rasterizer-ordered views for render target emulation
      where available.)
        type: bool default: true
    --d3d12_half_pixel_offset (Enable half-pixel vertex and VPOS offset.)
        type: bool default: true
    --d3d12_memexport_readback (Read data written by memory export in shaders
      on the CPU. This may be needed in some games (but many only access
      exported data on the GPU, and this flag isn't needed to handle such
      behavior), but causes mid-frame synchronization, so it has a huge
      performance impact.)
        type: bool default: false
    --d3d12_ssaa_custom_sample_positions (Enable custom SSAA sample positions
      for the RTV/DSV rendering path where available instead of centers
      (experimental, not very high-quality).)
        type: bool default: false

  Flags from pipeline_cache.cc:
    --d3d12_dxbc_disasm (Disassemble DXBC shaders after generation.)
        type: bool default: false
    --d3d12_pipeline_creation_threads (Number of threads used for graphics
      pipeline state creation. -1 to calculate automatically (75% of logical
      CPU cores), 1-16 to specify the number of threads explicitly, 0 to
      disable multithreaded pipeline state creation.)
        type: int32 default: -1
    --d3d12_tessellation_adaptive (Allow games to use adaptive tessellation -
      may be disabled if the game has issues with memexport, the maximum factor
      will be used in this case. Temporarily disabled by default since there
      are visible cracks currently in Halo 3.)
        type: bool default: false
    --d3d12_tessellation_wireframe (Display tessellated surfaces as wireframe
      for debugging.)
        type: bool default: false

  Flags from primitive_converter.cc:
    --d3d12_convert_quads_to_triangles (Convert quad lists to triangle lists on
      the CPU instead of using a geometry shader. Not recommended for playing,
      for debugging primarily (because PIX fails to display vertices when a
      geometry shader is used).)
        type: bool default: false

  Flags from render_target_cache.cc:
    --d3d12_16bit_rtv_full_range (Use full -32...32 range for RG16 and RGBA16
      render targets (at the expense of blending correctness) without ROV.)
        type: bool default: true
    --d3d12_resolution_scale_resolve_edge_clamp (When using resolution scale,
      apply the hack that duplicates the right/lower subpixel in the left and
      top sides of render target resolve areas to eliminate the gap caused by
      half-pixel offset (this is necessary for certain games like GTA IV to
      work).)
        type: bool default: true

  Flags from shared_memory.cc:
    --d3d12_tiled_shared_memory (Enable tiled resources for shared memory
      emulation. Disabling them greatly increases video memory usage - a 512 MB
      buffer is created - but allows graphics debuggers that don't support
      tiled resources to work.)
        type: bool default: true

  Flags from texture_cache.cc:
    --d3d12_resolution_scale (Scale of rendering width and height (currently
      only 1 and 2 are available).)
        type: int32 default: 1
    --d3d12_texture_cache_limit_hard (Maximum host texture memory usage (in
      megabytes) above which textures will be destroyed as soon as possible. If
      using 2x resolution scale, 1.25x of this is used.)
        type: int32 default: 768
    --d3d12_texture_cache_limit_soft (Maximum host texture memory usage (in
      megabytes) above which old textures will be destroyed (lifetime
      configured with d3d12_texture_cache_limit_soft_lifetime). If using 2x
      resolution scale, 1.25x of this is used.)
        type: int32 default: 384
    --d3d12_texture_cache_limit_soft_lifetime (Seconds a texture should be
      unused to be considered old enough to be deleted if texture memory usage
      exceeds d3d12_texture_cache_limit_soft.)
        type: int32 default: 30



  Flags from dxbc_shader_translator.cc:
    --dxbc_source_map (Disassemble Xenos instructions as comments in the
      resulting DXBC for debugging.)
        type: bool default: false
    --dxbc_switch (Use switch rather than if for flow control. Turning this off
      or on may improve stability, though this heavily depends on the driver -
      on AMD, it's recommended to have this set to true, as Halo 3 appears to
      crash when if is used for flow control (possibly the shader compiler
      tries to flatten them). On Intel HD Graphics, this is ignored because of
      a crash with the switch instruction.)
        type: bool default: true

  Flags from gpu_flags.cc:
    --dump_shaders (Path to write GPU shaders to as they are compiled.)
        type: string default: ""
    --trace_gpu_prefix (Prefix path for GPU trace files.)
        type: string default: "scratch/gpu/"
    --trace_gpu_stream (Trace all GPU packets.)
        type: bool default: false
    --vsync (Enable VSYNC.)
        type: bool default: true

  Flags from spirv_shader_translator.cc:
    --spv_disasm (Disassemble SPIR-V shaders after generation)
        type: bool default: false
    --spv_validate (Validate SPIR-V shaders after generation)
        type: bool default: false

  Flags from texture_dump.cc:
    --texture_dump (Dump textures to DDS)
        type: bool default: false



  Flags from vulkan_gpu_flags.cc:
    --vulkan_dump_disasm (Dump shader disassembly. NVIDIA only supported.)
        type: bool default: false
    --vulkan_native_msaa (Use native MSAA)
        type: bool default: false
    --vulkan_renderdoc_capture_all (Capture everything with RenderDoc.)
        type: bool default: false



  Flags from kernel_state.cc:
    --headless (Don't display any UI, using defaults for prompts as needed.)
        type: bool default: false

  Flags from user_module.cc:
    --xex_apply_patches (Apply XEX patches.)
        type: bool default: true



  Flags from shim_utils.cc:
    --log_high_frequency_kernel_calls (Log kernel calls with the kHighFrequency
      tag.)
        type: bool default: false



  Flags from xboxkrnl_module.cc:
    --cl (Specify additional command-line provided to guest.)
        type: string default: ""
    --kernel_cert_monitor (Enable cert monitor.)
        type: bool default: false
    --kernel_debug_monitor (Enable debug monitor.)
        type: bool default: false
    --kernel_pix (Enable PIX.)
        type: bool default: false

  Flags from xboxkrnl_video.cc:
    --kernel_display_gamma_power (Display gamma to use with
      kernel_display_gamma_type 3.)
        type: double default: 2.2222223300000001
    --kernel_display_gamma_type (Display gamma type: 0 - linear, 1 - sRGB, 2 -
      TV (BT.709), 3 - power specified via kernel_display_gamma_power.)
        type: int32 default: 1



  Flags from xthread.cc:
    --ignore_thread_affinities (Ignores game-specified thread affinities.)
        type: bool default: true
    --ignore_thread_priorities (Ignores game-specified thread priorities.)
        type: bool default: true



  Flags from memory.cc:
    --protect_on_release (Protect released memory to prevent accesses.)
        type: bool default: false
    --protect_zero (Protect the zero page from reads and writes.)
        type: bool default: true
    --scribble_heap (Scribble 0xCD into all allocated heap memory.)
        type: bool default: false



  Flags from d3d12_context.cc:
    --d3d12_random_clear_color (Randomize presentation back buffer clear
      color.)
        type: bool default: false

  Flags from d3d12_provider.cc:
    --d3d12_adapter (Index of the DXGI adapter to use. -1 for any physical
      adapter, -2 for WARP software rendering.)
        type: int32 default: -1
    --d3d12_debug (Enable Direct3D 12 and DXGI debug layer.)
        type: bool default: false



  Flags from vulkan.cc:
    --vulkan_primary_queue_only (Force the use of the primary queue, ignoring
      any additional that may be present.)
        type: bool default: false
    --vulkan_validation (Enable Vulkan validation layers.)
        type: bool default: false

  Flags from vulkan_provider.cc:
    --vulkan_device_index (Index of the physical device to use.)
        type: uint64 default: 0

  Flags from vulkan_swap_chain.cc:
    --vulkan_random_clear_color (Randomizes framebuffer clear color.)
        type: bool default: false



  Flags from gflags.cc:
    --flagfile (load flags from file)
        type: string default: ""
    --fromenv (set flags from the environment [use 'export FLAGS_flag1=value'])
        type: string default: ""
    --tryfromenv (set flags from the environment if present)
        type: string default: ""
    --undefok (comma-separated list of flag names that it is okay to specify on
      the command line even if the program does not define a flag with that
      name.  IMPORTANT: flags in this list that have arguments MUST use the
      flag=value format)
        type: string default: ""

  Flags from gflags_completions.cc:
    --tab_completion_columns (Number of columns to use in output for tab
      completion)
        type: int32 default: 80
    --tab_completion_word (If non-empty, HandleCommandLineCompletions() will
      hijack the process and attempt to do bash-style command line flag
      completion on this value.)
        type: string default: ""

  Flags from gflags_reporting.cc:
    --help (show help on all flags [tip: all flags can have two dashes])
        type: bool default: false currently: true
    --helpfull (show help on all flags -- same as -help)
        type: bool default: false
    --helpmatch (show help on modules whose name contains the specified substr)
        type: string default: ""
    --helpon (show help on the modules named by this flag value)
        type: string default: ""
    --helppackage (show help on all modules in the main package)
        type: bool default: false
    --helpshort (show help on only the main module for this program)
        type: bool default: false
    --helpxml (produce an xml version of help)
        type: bool default: false
    --version (show version and build info and exit)
        type: bool default: false
```