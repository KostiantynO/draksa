#### Normal

- [x] add more sound names for components. More logical. `Mood` is not in `Lips`. `Mood`
      is `Emotions`.
- [ ] Make `Play/FeedHer` buttons UI smaller, absolute positioned.
- [x] Hide mood under Mood button.
- [x] add Ripple Button
- [x] add paste button (from clipboard)
- [x] use 0.5s debounce timer onKeyUp, so it will not fire speech/text parse so many
      times - fans will be more silent.
  - Bouncer has a `Wristwatch` to select bounce time you wish.
- [x] use 50ms debounce timer onPaste
- [x] make her speak new added information, after you type smth at the end.
  - if old textarea.value.length is bigger than the its length from the previous call of
    `openWideAndPurr`.
    - and it is usually almost always bigger then before
    - because `openWideAndPurr` is only called when you type/paste into a Throat textarea
    - only sometimes you may delete smth... - this case is too hard...
    - so i will implement only the speaking of newly added text for now.
  - call text parser
    - then split new textarea.value into chucks and proceed as usual -> call
      `speakCurrentChunk`
- [x] Pass children as a slot into parent jsx <Parent>{children}</Parent> (very relevant)
      especially with smaller `Server Components` passed as `{slots}` into
      `Client Components`, but only when `imported` and called `inside` the big wrapping
      `Server Component parent` like below:

  ```tsx
  import { ServerRenderedContent } from '@/draksa/ServerRenderedContent';
  import { ServerHTML } from '@/draksa/ServerHTML';
  import { ClientModal } from '@/draksa/ClientModal';

  const Page = () => {
    return (
      <ServerHTML>
        <ClientModal mySlot={<ServerRenderedContent />} />
      </ServerHTML>
    );
  };

  export default Page;
  ```
