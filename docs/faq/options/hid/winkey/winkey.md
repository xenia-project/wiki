<!--- This file is a snippet --->
The following settings all follow the same rules.

The value must be a key identifier, or multiple key identifiers separated by spaces.<br/>
Modifiers may be added in front of key identifiers to change the meaning of a bind while another key is pressed.

## Key identifiers
- [Virtual-Key Codes](https://docs.microsoft.com/en-us/windows/win32/inputdev/virtual-key-codes) (hex)
- A character corresponding to a key

## Key modifiers

|**Modifier**|**Meaning**                     |
|:-----------|:------------------------------:|
|`_`         |only with ++cplk++ enabled      |
|`^`         |only while ++shift++ is pressed |

## Examples

|**Setting and Value**       |**Meaning**                                                         |
|:---------------------------|:-------------------------------------------------------------------|
|`keybind_a = "0xBA"`        |Bind :xbox-a_button: to ++semicolon++                               |
|`keybind_x = "X"`           |Bind :xbox-x_button: to ++x++                                       |
|`keybind_y = "Y U 0xA0"`    |Bind :xbox-y_button: to ++y++, ++u++ or ++lshift++                 |
|`keybind_b = "_0xBA"`       |Bind :xbox-b_button: to ++semicolon++ only when ++cplk++ is enabled |
|`keybind_dpad_up = "^X"`    |Bind :xbox-dpad_up: to ++shift+x++                                  |

## Default bindings

|**Setting Name**         |**Default Value**|**Meaning**                                      |
|:------------------------|:---------------:|:------------------------------------------------|
|keybind_a                |0xBA             |Bind :xbox-a_button: to ++semicolon++            |
|keybind_b                |0xDE             |Bind :xbox-b_button: to ++dblquote++             |
|keybind_back             |Z                |Bind :xbox-back_button: to ++z++                 |
|keybind_dpad_down        |^S               |Bind :xbox-dpad_down: to ++s++ (Caps Lock on)    |
|keybind_dpad_left        |^A               |Bind :xbox-dpad_left: to ++a++ (Caps Lock on)    |
|keybind_dpad_right       |^D               |Bind :xbox-dpad_right: to ++d++ (Caps Lock on)   |
|keybind_dpad_up          |^W               |Bind :xbox-dpad_up: to ++w++ (Caps Lock on)      |
|keybind_left_shoulder    |1                |Bind :xbox-left_shoulder: to ++1++               |
|keybind_left_thumb       |F                |Bind :xbox-left_stick_click: to ++f++            |
|keybind_left_thumb_down  |_S               |Bind :xbox-left_stick_down: to ++shift+s++       |
|keybind_left_thumb_left  |_A               |Bind :xbox-left_stick_left: to ++shift+a++       |
|keybind_left_thumb_right |_D               |Bind :xbox-left_stick_right: to ++shift+d++      |
|keybind_left_thumb_up    |_W               |Bind :xbox-left_stick_up: to ++shift+w++         |
|keybind_left_trigger     |Q I              |Bind :xbox-left_trigger: to ++q++ or ++i++       |
|keybind_right_shoulder   |3                |Bind :xbox-right_shoulder: to ++3++              |
|keybind_right_thumb      |K                |Bind :xbox-right_stick_click: to ++k++           |
|keybind_right_thumb_down |0x28             |Bind :xbox-right_stick_down: to ++up++           |
|keybind_right_thumb_left |0x25             |Bind :xbox-right_stick_left: to ++left++         |
|keybind_right_thumb_right|0x27             |Bind :xbox-right_stick_right: to ++right++       |
|keybind_right_thumb_up   |0x26             |Bind :xbox-right_stick_up: to ++up++             |
|keybind_right_trigger    |E O              |Bind :xbox-right_trigger: to ++e++ or ++o++      |
|keybind_start            |X                |Bind :xbox-start_button: to ++x++                |
|keybind_x                |L                |Bind :xbox-x_button: to ++l++                    |
|keybind_y                |P                |Bind :xbox-y_button: to ++p++                    |
