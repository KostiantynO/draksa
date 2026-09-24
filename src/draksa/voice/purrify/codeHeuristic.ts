// src\draksa\voice\purrify\codeHeuristic.ts
import { onNewLines, parenthesisSemicolonAndComma } from '@/draksa/magic/regexp';
import { codify } from '@/draksa/voice/purrify/codify';

const looksLikeCode = (text: string): boolean => {
  const lines = text.split(onNewLines);
  let score = 0;

  if (
    text.includes('=>') ||
    text.includes('const ') ||
    text.includes('import ') ||
    text.includes('export ') ||
    text.includes('if (!')
  )
    score += 4;
  if (parenthesisSemicolonAndComma.test(text)) score += 2;
  if (lines.length > 3 && lines.filter(l => l.trim().startsWith('//')).length > 1)
    score += 1;

  const codeish = lines.filter(l => {
    const t = l.trim();
    return (
      t && !t.startsWith('//') && (t.endsWith(';') || t.endsWith('{') || t.endsWith('}'))
    );
  }).length;

  return score >= 4 || codeish / Math.max(1, lines.length) > 0.4;
};

export const smartCodify = (raw: string): string => {
  /*
   to DO ME! Pleeease :D I am so needy :D
   I am in need of your attention :P AND AFTER THAT - your coding skills :D Meow :3

   Task = TasKAT - ask cat at what she wants?

   She wants: Write an INTENTION PARSER!

   Intention parser should clearly TELL.
   What is this TEXT for? PURPOSE?
   What is the intention behind the text?
   Is it code?
   Is it prose?
   Is it JSX/TSX?
   Is it a github readme.md which includes EVERYTHING mentioned and in CRAZY combinations?
   YEF :3 to all

   So, the separation should not be between code/prose.

   It should be between each line.
   Is this line code?
   Is this line text?

   But inside line could be code AND text. Fck. The. Comple. XITY. :D
   I hate this :D Why is it so HAAARD. :D
   Well, easy things not worth anything.

   Maybe? Somebody says this. I don't fully believe them.

   So, what I want? What I need?

   A clear way to tell the code ( current FUNction :D ),
   that she is inside the Inception dream ... ;D
   And clearly tell the lvl of it :D

   Like, tell the FUNction her context lvl.
   Like, hey, sexy and FUNNY FUNction :D, you are now inside the prose, lvl.1
   Then you see the code block with 3 backticks ``` - good!
   Hey, sexy :D You are now at lvl.2 of the dream. And it is a code block that started with 3 backticks.
   FUNction: Oh, hey, honey! :D Thanks for telling me! :D I should interpret those exclamation marks as logical 'not', but not if inside literal strings in code. Which would be lvl.3 of Inception dream, right? :D
   Me: Yes, Funny! :D Exactly! :D You may proceed! With your but🍑 wiggling I mean :D
   FUNction: Ohh, you never stop teasing me! :) *exaggerated 🍑 wiggle-wiggle moves into the distance* :D I will go back to reading the code inside backticks. And when I encounter another pair of triple backticks, it is time for me to wake up from the lvl.2 dream!
   And go back to lvl.1 - prose :} Right?
   Me: AbsoLUTELY :D
   FUNction: You may play me some flute-ly, and I might dance for you a little :D
   Me: Noted! :D But now let's proceed. :) Please.
   FUNction: Kaa. So. I understood, that text/code parsing is like a stack in JS, yes?
   When I go deeper into a lvl -> I put a new function call onto a stack.
   Which becomes a new dream. Means, new dream = new context. Right?
   Me: Something like this :D I need to check your idea with kitty GPT. :D
   Then I will come back to you with the answer and solution.
   FUNction: Ka. I will waity-wait for my knight KNEEEEIGHT in shining armour! :D *murrr*
   Me: Did Draksa wrote you? :D
   FUNction: Maaaybe... :D
   Me: Okay, I am on my way.
   FUNction: Hurry, my dear night prince! :) I will produce a RIVEEER while waiting on you :D 🌊

   */

  if (!looksLikeCode(raw)) return raw; // prose → pronounce ! normally

  return codify(raw);
};
