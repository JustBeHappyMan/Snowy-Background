window.onload = () => {
  // Set Canvas and Context
  const canvas = document.getElementById("sky");
  const context = canvas.getContext("2d");

  // set canvas dimensions
  const W = window.innerWidth;
  const H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // generate snowflakes
  const mf = 100;
  const flakes = [];

  // loop fot creating snowflakes
  for (let i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 4 + 2, // radius 2 to 6 px
      d: Math.random() + 1, // density
    });
  }

  // draw snowflakes to canvas
  const drawFlakes = () => {
    context.clearRect(0, 0, W, H);
    context.fillStyle = "white";
    context.beginPath();
    for (let i = 0; i < mf; i++) {
      const f = flakes[i];
      context.moveto(f.x, f.y);
      context.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    context.fill();
  };
};
