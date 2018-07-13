---
categories:
  - programming
date: "2018-07-13"
draft: true
tags:
  - vim
title: Remap Caps Lock to Escape and Control
---

The best tip I ever got for switching away from a default setting was to change
my caps lock key to function as both escape and control. On every OS, there is
a way to make caps lock work as escape when tapped and control when held down.

This hack is especially useful for text editing. When I first started using
[Vim](http://www.vim.org/), I searched for a better way to exit insert mode. I
happily used the `ctrl+[` [trick](https://vi.stackexchange.com/a/303/18205) for
months, but learning about remapping caps lock made Vim far more enjoyable to
use. It's also useful for preventing [Emacs
pinky](http://wiki.c2.com/?EmacsPinky), and on Linux and Windows, most
shortcuts involve control.

I also frequently hit escape just to close things. Escape and control are
usually in the corners of the keyboard, so this makes using them much easier.
How often do you use caps lock anyway? You can always remap escape to caps lock
if you want to.

## Linux

I use [xcape](https://github.com/alols/xcape) (check out this Ask Ubuntu
[answer](https://askubuntu.com/a/228379/772322)) on
[Ubuntu](https://www.ubuntu.com/desktop) and
[caps2esc](https://gitlab.com/interception/linux/plugins/caps2esc) on
[Arch](https://www.archlinux.org/). I don't remember exactly what trouble I ran
into with xcape on Arch, but caps2esc works just fine for me.

## Mac

I use [Karabiner](https://pqrs.org/osx/karabiner/) with a configuration taken
from this [GitHub issue
comment](https://github.com/tekezo/Karabiner-Elements/issues/8#issuecomment-309037790).
After installing Karabiner, open `~/.config/karabiner/karabiner.json`, and
modify the `rules` array.

```json
{
    "profiles": [
        {
            "complex_modifications": {
                "rules": [
                    {
                        "manipulators": [
                            {
                                "description": "Change caps_lock to control when used as modifier, escape when used alone",
                                "from": {
                                    "key_code": "caps_lock",
                                    "modifiers": {
                                        "optional": [
                                            "any"
                                        ]
                                    }
                                },
                                "to": [
                                    {
                                        "key_code": "left_control"
                                    }
                                ],
                                "to_if_alone": [
                                    {
                                        "key_code": "escape",
                                        "modifiers": {
                                            "optional": [
                                                "any"
                                            ]
                                        }
                                    }
                                ],
                                "type": "basic"
                            }
                        ]
                    }
                ]
            }
        }
    ]
}
```

[ControlEscape.spoon](https://github.com/jasonrudolph/ControlEscape.spoon)
appears to be another option. It depends on
[Hammerspoon](http://www.hammerspoon.org/).

## Windows

I use [AutoHotkey](https://www.autohotkey.com/) with a script from this [Stack
Exchange answer](https://superuser.com/a/581988/922801). Save it as a text file
with a `.ahk` extension. To run it, just double click the file after you
install AutoHotkey. To automatically run it whenever you log in, add a shortcut
to the script to your [Startup
folder](https://support.microsoft.com/en-us/help/4026268/windows-10-change-startup-apps).
Reference the [docs](https://www.autohotkey.com/docs/Program.htm#run) for more
info.

```autohotkey
*CapsLock::
    Send {Blind}{Ctrl Down}
    cDown := A_TickCount
Return

*CapsLock up::
    ; Modify the threshold time (in milliseconds) as necessary
    If ((A_TickCount-cDown) < 150)
        Send {Blind}{Ctrl Up}{Esc}
    Else
        Send {Blind}{Ctrl Up}
Return
```
