<!--- This file is a snippet --->
Allow texture and vertex fetch constants with invalid type - generally unsafe because the constant may contain completely invalid values, but may be used to bypass fetch constant type errors in certain games until the real reason why they're invalid is found.

|**gpu_allow_invalid_fetch_constants**|**bool**|
|:------------------------------------|:------:|
| Off (*default*)                     |  false |
| On (hack)                           |  true  |
