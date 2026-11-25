C Playground (C and C++)
========================
One folder, three ways to use it:

1. On your computer: double-click index.html (Chrome, Edge or Firefox). No server needed.
2. On Vercel: drag this whole folder onto vercel.com/new (framework: Other), or run
   "npx vercel" inside it. No build step.
3. Any other static host (Netlify, GitHub Pages, cPanel): upload the folder as is.

Keep every file and the "clang" folder together. The first visit loads about 39 MB;
on a website, browsers cache it after that (vercel.json sets the cache headers).

Updating: replace all files at once. index.html, editor.js, workers.js and clang/ belong together.

Credits: Clang 22 compiled to WebAssembly (@live-codes/clang-wasm, MIT),
clang-format 23 (@wasm-fmt/clang-format, MIT), CodeMirror 5 (MIT), Lucide icons (ISC), fonts from Fontsource (OFL). See clang/LICENSE.txt and clang/THIRD-PARTY-NOTICES.md.
