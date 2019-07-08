# System Requirements

* Windows 7+ for Vulkan, Windows 10 for D3D12 (Linux/macOS not natively supported)
  * Might run on Linux with Wine.
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


## Where do I download Xenia?
* **[D3D12](https://ci.appveyor.com/api/projects/benvanik/xenia/artifacts/xenia-d3d12.zip?branch=d3d12&job=Configuration%3A%20Release&pr=false)**

Xenia is sometimes detected as a virus. Ignore this, as it is a false positive.


You **CANNOT** play games directly from the disc drive.

# How to rip games
<!--Dashboard version 2.0.17511.0, and Windows 10 were used.

## Stock console method
-->
### Requirements

* Xbox 360 console
* USB storage device that's at least 16GB. You *might* encounter problems with smaller devices.
* [Velocity](https://github.com/Gualdimar/Velocity/releases)

If you're wanting to rip games from disc:

* Xbox 360 game disc
* Xbox 360 that can read discs

### Preparation

Before beginning, you need to check if the USB is formatted:

1. Go to *[Settings > System](https://i.imgur.com/xcCn6fM.png) > [Storage](https://i.imgur.com/No4y9xi.png)*
<details> 
<summary>Images (click to expand)</summary>

Settings > System:
![](https://i.imgur.com/xcCn6fM.png)

Storage:
![](https://i.imgur.com/No4y9xi.png) 

</details>

2. If you see an [Unformatted](https://i.imgur.com/Jex2sln.png) storage device, select it.

<details> 
<summary>Image (click to expand)</summary>

Unformatted
![](https://i.imgur.com/Jex2sln.png) 

</details>


* If it's already formatted, skip this section.

3. [Press A to format](https://i.imgur.com/tIW9spr.png)
4. [Select Yes](https://i.imgur.com/rKvf04S.png)

<details> 
<summary>Images (click to expand)</summary>

Press A to format:
![](https://i.imgur.com/tIW9spr.png) 

Select Yes:
![](https://i.imgur.com/rKvf04S.png) 

</details>

* **Note: This will erase everything from the drive. Make sure to move the files off of it first!**

5. Once done, return to home by pressing B twice.


### Section 1. Ripping discs

*If your game isn't a disc (XBLA, digital, etc.) skip to Section 2.*

You'll want to change these options to stop game(s) from automatically starting: 

* *[Settings > System](https://i.imgur.com/xcCn6fM.png) > [Console Settings](https://i.imgur.com/FStw2Y7.png) > [Auto-Play](https://i.imgur.com/r4lLczk.png) > [Disable](https://i.imgur.com/V5oEdQl.png)*

<details> 
<summary>Images (click to expand)</summary>

Settings > System:
![](https://i.imgur.com/xcCn6fM.png) 

Console Settings:
![](https://i.imgur.com/FStw2Y7.png) 

Auto-Play:
![](https://i.imgur.com/r4lLczk.png) 

Disable:
![](https://i.imgur.com/V5oEdQl.png)

</details>

* *[Settings > System](https://i.imgur.com/xcCn6fM.png) > [Console Settings](https://i.imgur.com/FStw2Y7.png) > [Startup and Shutdown](https://i.imgur.com/DgblBFS.png) > [Startup](https://i.imgur.com/GJpqOrH.png) > [Xbox Dashboard](https://i.imgur.com/H4ffGAV.png)*

<details> 
<summary>Images (click to expand)</summary>

Settings > System:
![](https://i.imgur.com/xcCn6fM.png) 

Console Settings:
![](https://i.imgur.com/FStw2Y7.png) 

Startup and Shutdown:
![](https://i.imgur.com/DgblBFS.png) 

Startup:
![](https://i.imgur.com/GJpqOrH.png)

Xbox Dashboard:
![](https://i.imgur.com/H4ffGAV.png)

</details>

1. Go to home on the dashboard
2. Insert the disc into the drive, and close the tray.
3. Once the game shows up press X (Game Details) with the game selected.

4. Press the *Install* button.

* If you see *Delete* instead, skip to Section 2.

 * Note: Not all games have the *Install* option. List of currently known uninstallable games:

   * College Hoops 2k7
   * Minecraft
   * Pocket Bike Racers
   * Sneak King
   * Crackdown
   * Dead or Alive Xtreme 2

5. Select the storage device you want to install the game on.

Once it's 100% Completed press A to continue, and press B to go back to home.

### Section 2. Transferring HDD games

***If you ripped the game(s) directly to the USB drive, or they're already on the USB drive, you can skip this section.***

1. Go to *[Settings > System](https://i.imgur.com/xcCn6fM.png) > [Storage](https://i.imgur.com/No4y9xi.png) > [Hard Drive](https://i.imgur.com/8EB0EFr.png) > [Press Y (Device Options)](https://i.imgur.com/rRaoeAR.png) > [Transfer Content](https://i.imgur.com/wdvYqDR.png) > [USB Storage Device](https://i.imgur.com/6FVly57.png)*
4. Choose what you want to transfer. Keep in mind full games and trials/demos are in separate categories.

<details> 
<summary>Images (click to expand)</summary>

Settings > System:
![](https://i.imgur.com/xcCn6fM.png)

Storage:
![](https://i.imgur.com/No4y9xi.png)

Hard Drive:
![](https://i.imgur.com/8EB0EFr.png)

Press Y (Device Options):
![](https://i.imgur.com/rRaoeAR.png)

Transfer Content:
![](https://i.imgur.com/wdvYqDR.png)

USB Storage Device:
![](https://i.imgur.com/6FVly57.png)

</details>

5. Press right, then *[Start](https://i.imgur.com/Gpb5Zya.png)*.

<details> 
<summary>Image (click to expand)</summary>

Start:
![](https://i.imgur.com/Gpb5Zya.png)

</details>

Once it's done you can take the USB out of the console.

### Section 3. Importing games for use in Xenia

1. Insert the USB drive into your PC. Go to `Content`.

If the USB drive appears empty enable *[Show hidden files and folders](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files)* in Windows Explorer.

2. Go into `00000#`. There will be folders with names consisting of lots of letters and numbers. You should find the game's folder within one of them.
3. The game will have a name with a bunch of letters and numbers just like the folders, and no file extension.

* XBLA games will be one file, GOD (disc) games will contain a file, along with a *.data folder with the same name.
* *ContentCache.pkg is irrelevant. Ignore it.*

 4. To confirm that it is indeed a game try opening the file with Velocity.
 5. Once you've made sure the file opens in Velocity and works in Xenia you can rename, or move the folder the game is in for convenience.

* **FOLDER ABOVE, NOT FILE or *.DATA FOLDER!**

* (Optional) If the game crashes you can try extracting the game using Velocity.
 * If the game is extracted you will need to drag `default.xex` onto Xenia.
 * Some games have multiple .xex files, so if you can't find `default.xex` or it just doesn't work, try another one.


<!--## wxRipper method (more compatible)

### Requirements

  * DVD movie at least ~7.8GB in size
  * DVD-DL drive
  * Xbox 360 game disc
  * Screwdriver
  * wxRipper x64

1. Insert the disc.
-->



## Redump method (rare/specific drives)

*For these DVD drives:*

* SH-D163A / TS-H353A
* SH-D163B / TS-H353B
* SH-162C / TS-H352C / SD-M2012C(?)
* SH-D162D / TS-H352D

***IF YOUR DRIVE IS NOT LISTED HERE IT WILL NOT WORK!***

*http://wiki.redump.org/index.php?title=Microsoft_Xbox_and_Xbox_360_Dumping_Guide*


# How to run games in full/activated mode on Xenia

***By default Xenia runs ALL XBLA/digital games in demo/trial mode.***

To run games in full/activated mode you will have to compile Xenia with [mask_ptr =](https://github.com/xenia-project/xenia/blob/master/src/xenia/kernel/xam/xam_content.cc#L52) 0xFFFFFFFF instead of 0.

*[See building.md on GitHub](https://github.com/xenia-project/xenia/blob/master/docs/building.md)*