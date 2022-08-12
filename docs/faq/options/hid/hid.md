This option controls which backend the controller is mapped to.

|**hid**                             | **string** |
|:-----------------------------------|:----------:|
| Any input method (*default*)       |   any      |
| SDL2*                              |   sdl      |
| XInput                             |   xinput   |
| Keyboard                           |   winkey   |

- SDL supports many controllers and many advanced features (not all of them are implemented).<br/>
  SDL supports an ever-growing list of controllers.
- XInput supports all Xbox controllers starting with the Xbox 360,
  including the Guitar Hero and Rock Band instruments.<br/>
  Wireless Xbox 360 controllers and some Wireless Xbox One controllers require you to own a USB wireless adapter.
- [WinKey](winkey/winkey) only supports keyboards that are compatible with your device.

!!! info "When using SDL"
    If your game controller is not mapped correctly, [download gamecontrollerdb.txt](https://github.com/gabomdq/SDL_GameControllerDB/blob/master/gamecontrollerdb.txt)
    and place it in the folder next to your Xenia executable.
