Improves accuracy at the cost of performance. Recommended to be [disabled](Options#Render_target_path).

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
  * Intel HD Graphics 4200 (2013)