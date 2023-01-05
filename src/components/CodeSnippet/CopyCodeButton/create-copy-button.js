const blocks = document.querySelectorAll("pre");
console.log("create-copy-button.js");

blocks.forEach((block) => {
  let button = document.createElement("copy-code-button");
  block.appendChild(button);
});
