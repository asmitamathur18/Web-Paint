const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let drawing = false;
let color = "black";
let size = 5;

// START drawing
canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

// STOP drawing
canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
  ctx.beginPath();
});

// DRAW
canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.lineCap = "round";

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

// COLORS
document.querySelectorAll(".color").forEach(btn => {
  btn.addEventListener("click", () => {
    color = btn.style.background;
  });
});

// BRUSH SIZE
document.getElementById("size").addEventListener("input", (e) => {
  size = e.target.value;
});

// ERASER
document.getElementById("eraser").addEventListener("click", () => {
  color = "white";
});

// CLEAR
document.getElementById("clear").addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// SAVE
document.getElementById("save").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "drawing.png";
  link.href = canvas.toDataURL();
  link.click();
});
