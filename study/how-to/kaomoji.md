# To type hex unicode in windows from Numpad

1. `regedit.msc` > `Computer\HKEY_CURRENT_USER\Control Panel\Input Method`
2. `RMB` on `Input Method` > `New` > `String Value` > paste `EnableHexNumpad`
3. `RMB` on `EnableHexNumpad` > `Modify` > `Value data` > set to `1`

| Name              | Type   | Data |
| ----------------- | ------ | ---- |
| `EnableHexNumpad` | Reg_SZ | 1    |

---

Typing:
---

`Where`: In simple notepad.

`When`: Before typing any unicode character.

## Eyes looking to the left:

`◕‿◕✿`

1. Hold <kbd><kbd>`alt`</kbd></kbd>
2. Press `plus` <kbd><kbd>`+`</kbd></kbd>
3. Type the `code`, e.g. <kbd><kbd>`2`</kbd></kbd> <kbd><kbd>`5`</kbd></kbd>
   <kbd><kbd>`d`</kbd></kbd> <kbd><kbd>`5`</kbd></kbd>
4. Release <kbd><kbd>`alt`</kbd></kbd>
5. Result: `◕`
6. ...
7. Profit :D

| `code` | result |
| ------ | :----: |
| 203f   |   ‿    |
| 25d5   |   ◕    |
| 273f   |   ✿    |

## Eyes looking to the right:

`✿⚆◡⚆` `✿◔‿◔`

25d4 ◔

---

`Why`:
---

Am I creating this file cause whole my life I didn't know how to do this in windows.

I just thought it was impossible cause my windows is broken or smth.

I had access only to basic 255 ascii symbols.

I couldn't even imagine that I need to ENABLE HEX keyboard input in `regedit.msc`!
