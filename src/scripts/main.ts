import contextCursor from "../libs/context-cursor/index";

contextCursor({
  radius: 20, // Adjusts the cursor size
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
