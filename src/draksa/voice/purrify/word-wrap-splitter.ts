// src\draksa\voice\purrify\word-wrap-splitter.ts
// To gracefully break long prose for a textarea without cutting words in half, you want a greedy word-wrap tokenizer.
// Instead of an arbitrary character split (which leaves broken words at the edge), you should split by your punctuation marks (., !, ,, or spaces) dynamically whenever a line approaches your target width (e.g., 80 or 100 characters).
// Here is a highly efficient, Unicode-safe JavaScript function to handle this exact layout problem.

// The Word-Wrap Prose Splitter

const splitProseForTextarea = (text: string, maxWidth = 80): string[] => {
  // Step 1: Respect existing line breaks first
  const paragraphs = text.split(/\r?\n/);
  const finalLines = [];

  for (const paragraph of paragraphs) {
    if (paragraph.length <= maxWidth) {
      finalLines.push(paragraph);
      continue;
    }

    // Step 2: Smart-wrap long chunks using a sliding window
    let remaining = paragraph.trim();

    while (remaining.length > 0) {
      if (remaining.length <= maxWidth) {
        finalLines.push(remaining);
        break;
      }

      // Look at the chunk that fits the max width
      const chunk = remaining.substring(0, maxWidth);

      // Find the best logical breaking point from right to left
      // Priority: 1. Sentence ends (. ! ? followed by space) -> 2. Clauses (, ; : followed by space) -> 3. Spaces
      let breakIdx = -1;

      // Regex to find trailing punctuation + space or just space
      const breakPattern = /([.!?,;: ]\s+)|(\s+)/gu;
      let match;

      // Find the last good punctuation or space boundary inside our chunk
      while ((match = breakPattern.exec(chunk)) !== null) {
        breakIdx = match.index + match[0].length;
      }

      // If no natural punctuation or space boundary was found, hard split at maxWidth
      if (breakIdx <= 0) {
        breakIdx = maxWidth;
      }

      // Extract the line and clean up whitespace
      const line = remaining.substring(0, breakIdx).trim();
      if (line) finalLines.push(line);

      // Cut the remaining text to process the rest
      remaining = remaining.substring(breakIdx).trim();
    }
  }

  return finalLines;
};

// Example usage:
const longText =
  "Hello ლაშა! This is a very long sentence that doesn't have any newlines, but it needs to be broken up cleanly into smaller chunks of text so it looks nice inside a textarea. It should break at sentences like this! Or clauses, like this, if the sentence goes on for far too long.";

console.log(splitProseForTextarea(longText, 80));
// Use code with caution.

// Why 80 vs 100 Characters?

// • 80 characters is the gold standard for reading comfort (prose, articles, documentation). It prevents the human eye from getting lost when traveling from the end of one line to the start of the next.
// • 100 characters is better if your textarea is wide or if you are displaying code snippets mixed with text, as it minimizes vertical scrolling.

// How this logic solves your problem:

// 1. Preserves Explicit \n: If the user already pressed Enter, it keeps those breaks exactly as they were.
// 2. Prioritizes Sentences: If it has to chop a 150-character block, it scans backward from character 80 to see if a sentence ended (! , . ). If it finds one, it splits right there.
// 3. Falls back to Commas & Spaces: If there is no sentence end, it looks for a comma or a regular space so words stay intact.
// 4. Unicode-Safe: Because it operates on slice boundaries and utilizes the /gu flags on its space-matching tokens, it will not mangle multi-byte international characters like ლ.
// Would you like to auto-calculate the maxWidth dynamically based on the actual pixel width of your DOM <textarea> element, or is a hardcoded character limit (like 80) perfectly fine for your UI?

// type HeadTail<S> = S extends `${infer Head}${infer Tail}` ? [Head, Tail] : never;

// type Result = HeadTail<'ac'>;
