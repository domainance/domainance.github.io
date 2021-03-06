let t = 0;
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c.fillStyle = "hsla(0, 0%,0%,1)";

window.addEventListener(
  "resize",
  function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerheight;
  },
  false
);

function draw() {
  // section 1 - fill black screen
  c.globalCompositeOperation = "source-over";
  c.fillStyle = "hsla(0,0%,0%,1)";
  c.fillRect(0, 0, canvas.width, canvas.height);
  var foo, b, i, j;
  // foo represents an angle in radians, increasing in t which means it takes on values in range of sin

  // t is getting incremented
  foo = Math.sin(t) * 2 * Math.PI;
  // increasing i is increasing the hue/color of the particles in c.fillstyle
  for (i = 0; i < 400; ++i) {
    r = 400 * Math.sin(i * foo);
    c.globalCompositeOperation = "";
    c.fillStyle = "hsla(" + i + 12 + ", 100%, 60%, 1)";
    c.beginPath();
    // most complicated part
    // basically since i is being incremented
    // move the
    c.arc(
      // r?
      Math.sin(i) * r + canvas.width / 2,
      Math.cos(i) * r + canvas.height / 2,
      1.5,
      0,
      Math.PI * 2
    );
    c.fill();
  }
  t += 0.000005;
  return (t %= 2 * Math.PI);
}

function run() {
  window.requestAnimationFrame(run);
  draw();
}

run();
