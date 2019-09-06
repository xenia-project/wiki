*Last updated: https://github.com/xenia-project/xenia/commit/b422ed750b37c9f936bb92682e34e39fa8fc2105*

# How to use:
To change these options, open `xenia.config.toml` in a text editor like [Notepad++](https://notepad-plus-plus.org/download/). It will be in `Documents\Xenia` by default. If `portable.txt` is present it will be in the same directory as xenia.exe.


## Run games as full/activated

`license_mask = -1`


### 2x resolution scaling (up to 1440p) **ONLY WITH ROV**: 
`d3d12_resolution_scale = 2` 

  * **ONLY 1-2X IS SUPPORTED.  *NOT 1.5x!***

### Uncap FPS: 
`vsync = false`

  * *This won't improve the framerate if your PC can't handle running the game at it's normal FPS.*

  * **This does not work with the Halo games.**

### Vulkan: 
`gpu = 'vulkan'`

  * **Don't expect Vulkan to work.**
  * *Vulkan v2 (rewrite) doesn't do anything yet.*

### Change game language: 
`user_language = #`

  * `1`= EN (default)
  * `2`= JA
  * `3`= DE
  * `4`= FR
  * `5`= ES
  * `6`= IT
  * `7`= KO
  * `8`= ZH
  * `9`= PT
  * `11`= PL
  * `12`= RU
  * `13`= SV
  * `14`= TR
  * `15`= NB
  * `16`= NL
  * `17`= ZH



### All config options:
```
[APU]
apu = 'any'                             	# Audio system. Use: [any, nop, xaudio2]
libav_verbose = false                   	# Verbose libav output (debug and above)
mute = false                            	# Mutes all audio output.

[CPU]
break_condition_gpr = -1                	# GPR compared to
break_condition_op = 'eq'               	# comparison operator
break_condition_truncate = true         	# truncate value to 32-bits
break_condition_value = 0               	# value compared against
break_on_debugbreak = true              	# int3 on JITed __debugbreak requests.
break_on_instruction = 0                	# int3 before the given guest address is executed.
break_on_start = false                  	# Break into the debugger on startup.
cpu = 'any'                             	# CPU backend [any, x64].
debug_symbol_loader = false             	# Enable dbghelp debug logging and validation.
debugprint_trap_log = false             	# Log debugprint traps to the active debugger
disable_global_lock = false             	# Disables global lock usage in guest code. Does not affect host code.
disassemble_functions = false           	# Disassemble functions during generation.
emit_source_annotations = false         	# Add extra movs and nops to make disassembly easier to read.
ignore_undefined_externs = true         	# Don't exit when an undefined extern is called.
inline_mmio_access = true               	# Inline constant MMIO loads and stores.
load_module_map = ''                    	# Loads a .map for symbol names and to diff with the generated symbol database.
store_all_context_values = false        	# Don't strip dead context stores to aid in debugging.
trace_function_coverage = false         	# Generate tracing for function instruction coverage statistics.
trace_function_data = false             	# Generate tracing for function result data.
trace_function_data_path = ''           	# File to write trace data to.
trace_function_references = false       	# Generate tracing for function address references.
trace_functions = false                 	# Generate tracing for function statistics.
use_haswell_instructions = true         	# Uses the AVX2/FMA/etc instructions on Haswell processors when available.
validate_hir = false                    	# Perform validation checks on the HIR during compilation.

[Content]
license_mask = 0                        	# Set license mask for activated content: 0 - disable all licenses / 1 - enable the first license - usually the full version license in Xbox Live Arcade games / -1 or 0xFFFFFFFF - enable all possible licenses.

[D3D12]
d3d12_16bit_rtv_full_range = true       	# Use full -32...32 range for RG16 and RGBA16 render targets (at the expense of blending correctness) without ROV.
d3d12_adapter = -1                      	# Index of the DXGI adapter to use. -1 for any physical adapter, -2 for WARP software rendering.
d3d12_convert_quads_to_triangles = false	# Convert quad lists to triangle lists on the CPU instead of using a geometry shader. Not recommended for playing, for debugging primarily (because PIX fails to display vertices when a geometry shader is used).
d3d12_debug = false                     	# Enable Direct3D 12 and DXGI debug layer.
d3d12_dxbc_disasm = false               	# Disassemble DXBC shaders after generation.
d3d12_edram_rov = true                  	# Use rasterizer-ordered views for render target emulation where available.
d3d12_half_pixel_offset = true          	# Enable half-pixel vertex and VPOS offset.
d3d12_pipeline_creation_threads = -1    	# Number of threads used for graphics pipeline state creation. -1 to calculate automatically (75% of logical CPU cores), 1-16 to specify the number of threads explicitly, 0 to disable multithreaded pipeline state creation.
d3d12_random_clear_color = false        	# Randomize presentation back buffer clear color.
d3d12_readback_memexport = false        	# Read data written by memory export in shaders on the CPU. This may be needed in some games (but many only access exported data on the GPU, and this flag isn't needed to handle such behavior), but causes mid-frame synchronization, so it has a huge performance impact.
d3d12_readback_resolve = false          	# Read render-to-texture results on the CPU. This may be needed in some games, for instance, for screenshots in saved games, but causes mid-frame synchronization, so it has a huge performance impact.
d3d12_resolution_scale = 1              	# Scale of rendering width and height (currently only 1 and 2 are available).
d3d12_resolution_scale_resolve_edge_clamp = true	# When using resolution scale, apply the hack that duplicates the right/lower subpixel in the left and top sides of render target resolve areas to eliminate the gap caused by half-pixel offset (this is necessary for certain games like GTA IV to work).
d3d12_ssaa_custom_sample_positions = false	# Enable custom SSAA sample positions for the RTV/DSV rendering path where available instead of centers (experimental, not very high-quality).
d3d12_tessellation_adaptive = false     	# Allow games to use adaptive tessellation - may be disabled if the game has issues with memexport, the maximum factor will be used in this case. Temporarily disabled by default since there are visible cracks currently in Halo 3.
d3d12_tessellation_wireframe = false    	# Display tessellated surfaces as wireframe for debugging.
d3d12_texture_cache_limit_hard = 768    	# Maximum host texture memory usage (in megabytes) above which textures will be destroyed as soon as possible. If using 2x resolution scale, 1.25x of this is used.
d3d12_texture_cache_limit_soft = 384    	# Maximum host texture memory usage (in megabytes) above which old textures will be destroyed (lifetime configured with d3d12_texture_cache_limit_soft_lifetime). If using 2x resolution scale, 1.25x of this is used.
d3d12_texture_cache_limit_soft_lifetime = 30	# Seconds a texture should be unused to be considered old enough to be deleted if texture memory usage exceeds d3d12_texture_cache_limit_soft.
d3d12_tiled_shared_memory = true        	# Enable tiled resources for shared memory emulation. Disabling them greatly increases video memory usage - a 512 MB buffer is created - but allows graphics debuggers that don't support tiled resources to work.
dxbc_source_map = false                 	# Disassemble Xenos instructions as comments in the resulting DXBC for debugging.
dxbc_switch = true                      	# Use switch rather than if for flow control. Turning this off or on may improve stability, though this heavily depends on the driver - on AMD, it's recommended to have this set to true, as Halo 3 appears to crash when if is used for flow control (possibly the shader compiler tries to flatten them). On Intel HD Graphics, this is ignored because of a crash with the switch instruction.

[GPU]
dump_shaders = ''                       	# Path to write GPU shaders to as they are compiled.
fullscreen = false                      	# Toggles fullscreen
gpu = 'any'                             	# Graphics system. Use: [any, d3d12, vulkan, vk, null]
spv_disasm = false                      	# Disassemble SPIR-V shaders after generation
spv_validate = false                    	# Validate SPIR-V shaders after generation
texture_dump = false                    	# Dump textures to DDS
trace_gpu_prefix = 'scratch/gpu/'       	# Prefix path for GPU trace files.
trace_gpu_stream = false                	# Trace all GPU packets.
vsync = true                            	# Enable VSYNC.

[General]
debug = false                           	# Allow debugging and retain debug information.
discord = true                          	# Enable Discord rich presence
time_scalar = 1.000000                  	# Scalar used to speed or slow time (1x, 2x, 1/2x, etc).

[HID]
hid = 'any'                             	# Input system. Use: [any, nop, winkey, xinput]

[Kernel]
cl = ''                                 	# Specify additional command-line provided to guest.
ignore_thread_affinities = true         	# Ignores game-specified thread affinities.
ignore_thread_priorities = true         	# Ignores game-specified thread priorities.
kernel_cert_monitor = false             	# Enable cert monitor.
kernel_debug_monitor = false            	# Enable debug monitor.
kernel_display_gamma_power = 2.222222   	# Display gamma to use with kernel_display_gamma_type 3.
kernel_display_gamma_type = 1           	# Display gamma type: 0 - linear, 1 - sRGB, 2 - TV (BT.709), 3 - power specified via kernel_display_gamma_power.
kernel_pix = false                      	# Enable PIX.
log_high_frequency_kernel_calls = false 	# Log kernel calls with the kHighFrequency tag.
win32_high_freq = true                  	# Requests high performance from the NT kernel
xex_apply_patches = true                	# Apply XEX patches.

[Logging]
flush_log = true                        	# Flush log file after each log line batch.
log_file = ''                           	# Logs are written to the given file (specify stdout for command line)
log_level = 2                           	# Maximum level to be logged. (0=error, 1=warning, 2=info, 3=debug)
log_to_debugprint = false               	# Dump the log to DebugPrint.

[Memory]
protect_on_release = false              	# Protect released memory to prevent accesses.
protect_zero = true                     	# Protect the zero page from reads and writes.
scribble_heap = false                   	# Scribble 0xCD into all allocated heap memory.

[Storage]
content_root = ''                       	# Root path for content (save/etc) storage.
mount_cache = false                     	# Enable cache mount
mount_scratch = false                   	# Enable scratch mount

[UI]
headless = false                        	# Don't display any UI, using defaults for prompts as needed.
imgui_debug = false                     	# Show ImGui debugging tools.
show_profiler = false                   	# Show profiling UI by default.

[Vulkan]
vk_device = -1                          	# Index of the Vulkan physical device to use. -1 to use any compatible.
vk_random_clear_color = false           	# Randomize presentation framebuffer clear color.
vk_validation = false                   	# Enable Vulkan validation layers.
vulkan_device_index = 0                 	# Index of the physical device to use.
vulkan_dump_disasm = false              	# Dump shader disassembly. NVIDIA only supported.
vulkan_native_msaa = false              	# Use native MSAA
vulkan_primary_queue_only = false       	# Force the use of the primary queue, ignoring any additional that may be present.
vulkan_random_clear_color = false       	# Randomizes framebuffer clear color.
vulkan_renderdoc_capture_all = false    	# Capture everything with RenderDoc.
vulkan_validation = false               	# Enable Vulkan validation layers.

[XConfig]
user_country = 103                      	# User country ID. 1=AE / 2=AL / 3=AM / 4=AR / 5=AT / 6=AU / 7=AZ / 8=BE / 9=BG / 10=BH / 11=BN / 12=BO / 13=BR / 14=BY / 15=BZ / 16=CA / 18=CH / 19=CL / 20=CN / 21=CO / 22=CR / 23=CZ / 24=DE / 25=DK / 26=DO / 27=DZ / 28=EC / 29=EE / 30=EG / 31=ES / 32=FI / 33=FO / 34=FR / 35=GB / 36=GE / 37=GR / 38=GT / 39=HK / 40=HN / 41=HR / 42=HU / 43=ID / 44=IE / 45=IL / 46=IN / 47=IQ / 48=IR / 49=IS / 50=IT / 51=JM / 52=JO / 53=JP / 54=KE / 55=KG / 56=KR / 57=KW / 58=KZ / 59=LB / 60=LI / 61=LT / 62=LU / 63=LV / 64=LY / 65=MA / 66=MC / 67=MK / 68=MN / 69=MO / 70=MV / 71=MX / 72=MY / 73=NI / 74=NL / 75=NO / 76=NZ / 77=OM / 78=PA / 79=PE / 80=PH / 81=PK / 82=PL / 83=PR / 84=PT / 85=PY / 86=QA / 87=RO / 88=RU / 89=SA / 90=SE / 91=SG / 92=SI / 93=SK / 95=SV / 96=SY / 97=TH / 98=TN / 99=TR / 100=TT / 101=TW / 102=UA / 103=US / 104=UY / 105=UZ / 106=VE / 107=VN / 108=YE / 109=ZA
user_language = 1                       	# User language ID. 1=en / 2=ja / 3=de / 4=fr / 5=es / 6=it / 7=ko / 8=zh / 9=pt / 11=pl / 12=ru / 13=sv / 14=tr / 15=nb / 16=nl / 17=zh
```