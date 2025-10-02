// Color palette for random coloring
const colors = [
  "#800000", // maroon
  "#af037b", // pinkish purple
  "#0000a0", // blue
  "#000080", // navy
];
//"#800000", "#af037b", "#0000a0", "#000080"

// Select all paragraph tags
const paragraphs = document.querySelectorAll("p");

// Apply a random color to each paragraph
paragraphs.forEach(p => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  p.style.color = randomColor;
});