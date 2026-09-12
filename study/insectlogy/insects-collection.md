# Insects collection:

1.  The selected debounce value does not control the actual debounce. openWideAndPuuurrr
    captures the initial 500 ms value when the module loads. Changing the setting only
    changes the displayed signal; it does not recreate or reconfigure the debouncer.
    [openWideAndPuuurrr.ts (line 8)](C:/top/draksa/src/draksa/perf/club/openWideAndPuuurrr.ts:8)
    [BounceOption.tsx (line 15)](C:/top/draksa/src/draksa/cumponents/MeowAloud/ClubEntrance/BounceOption.tsx:15)

2.  useThroat leaks a useless subscription during cleanup. The real subscription is
    correctly unsubscribed on line 39, but line 40 creates a new subscription and discards
    its cleanup function.
    [useThroat.ts (line 37)](C:/top/draksa/src/draksa/cumponents/MeowAloud/useThroat.ts:37)

3.  Ripple timers are never added to the cleanup set. The cleanup code looks responsible,
    but timeOuts.current.add(timeoutId) is missing. Unmounting therefore does not cancel
    active timers.
    [useRipples.ts (line 29)](C:/top/draksa/src/draksa/cumponents/ui/Ripples/useRipples.ts:29)

4.  Clipboard paste can permanently lock itself. If clipboard access rejects, the state
    remains pastingAfterButtonClick. If “meow on type” is disabled, the early return also
    skips stopButtonPasting().
    [pasteButtonClick.ts (line 7)](C:/top/draksa/src/draksa/voice/cb/pasteButtonClick.ts:7)

5.  The code pronunciation regex is incorrect. ...args is unescaped, so it means “any
    three characters followed by args”, not literal ...args. For example, abcargs becomes
    restArgs. [regexp.ts (line 22)](C:/top/draksa/src/draksa/magic/regexp.ts:22)

6.  The pitch slider’s visual value can disagree with application state. The signal starts
    at 1.15, but the range input has no value or defaultValue. The browser can initially
    render the thumb at a different position.
    [Pitch.tsx (line 29)](C:/top/draksa/src/draksa/cumponents/MeowAloud/Pitch.tsx:29)
