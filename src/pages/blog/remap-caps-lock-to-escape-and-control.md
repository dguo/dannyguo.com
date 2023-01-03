---
layout: ../../layouts/BlogPostLayout.astro
categories:
  - programming
date: "2018-07-16"
tags:
  - vim
title: Remap Caps Lock to Escape and Control
---

The best tip I ever got for switching away from a default setting was to change
my normally useless caps lock key to function as both escape and control. On
every OS, there is a way to make caps lock work as escape when tapped and
control when held down. It's one of the first things I do when I get a new
machine.

This hack is especially useful for text editing. When I first started using
[Vim](http://www.vim.org/), I searched for a better way to exit insert mode. I
happily used the `ctrl+[` [trick](https://vi.stackexchange.com/a/303/18205) for
months, but learning about remapping caps lock made Vim far more enjoyable to
use. It should be just as useful for preventing [Emacs
pinky](http://wiki.c2.com/?EmacsPinky), and on Linux and Windows, most
shortcuts involve control.

I also frequently hit escape just to close things. Escape and control are
usually in the corners of the keyboard, while caps lock occupies prime keyboard
real estate that it doesn't deserve. Set up this remap for the sake of
ergonomics and speed. You can remap escape to caps lock as well if you want to
retain a caps lock button.

## Linux

I've used [xcape](https://github.com/alols/xcape) (check out this [Ask Ubuntu
answer](https://askubuntu.com/a/228379/772322)) on
[Ubuntu](https://www.ubuntu.com/desktop) and
[caps2esc](https://gitlab.com/interception/linux/plugins/caps2esc) on
[Arch](https://www.archlinux.org/). I originally tried to use xcape on Arch as
well, but I ran into the [same
problem](https://gitlab.com/interception/linux/plugins/caps2esc#history) as the
caps2esc author where the remap would need to be re-executed every time I woke
my laptop from sleep. caps2esc has worked flawlessly for me.

### caps2esc

[Install](https://gitlab.com/interception/linux/plugins/caps2esc#installation)
the program. For Arch users, there is an [AUR
package](https://aur.archlinux.org/packages/interception-caps2esc).

Add this job to `/etc/udevmon.yaml`:

```yaml
- JOB: "intercept -g $DEVNODE | caps2esc | uinput -d $DEVNODE"
  DEVICE:
    EVENTS:
      EV_KEY: [KEY_CAPSLOCK, KEY_ESC]
```

Start the process with [systemd](https://en.wikipedia.org/wiki/Systemd):

```sh
sudo systemctl enable udevmon
```

### xcape

[Install](https://github.com/alols/xcape#minimal-building-instructions) the program.
On recent versions of Ubuntu, you should be able to just run:

```sh
sudo apt update
sudo apt install xcape
```

Next you need to remap caps lock to control. Check out this [EmacsWiki
page](https://www.emacswiki.org/emacs/MovingTheCtrlKey) for options.  For
Ubuntu/[GNOME](https://www.gnome.org/), I use [GNOME
Tweaks](https://wiki.gnome.org/Apps/Tweaks) (`$ sudo apt install
gnome-tweak-tool`), which has a setting for caps lock as control under the
"Typing" tab.

Now run xcape:

```sh
xcape -e 'Control_L=Escape'
```

To keep it working through system restarts, you can add that line to your
`~/.profile` or use any method for running a script on startup.

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

I use [AutoHotkey](https://www.autohotkey.com/) with a script from this [Super
User answer](https://superuser.com/a/581988/922801). Save it as a text file
with a `.ahk` extension. To run it, just double click the file after you
install AutoHotkey. To automatically run it after restarts, add a shortcut to
the script to your [Startup
folder](https://support.microsoft.com/en-us/help/4026268/windows-10-change-startup-apps).
Reference the [docs](https://www.autohotkey.com/docs/Program.htm#run) for more
info.

```
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
