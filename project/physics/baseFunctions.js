
const c = document.getElementById("canvas")
const ctx = c.getContext("2d")
console.log(window)

const animate = (drawFrame) => {
  let running = true;

  const step = () => {
    drawFrame(performance.now());
    maybeStep();
  };

  const maybeStep = () => {
    if (running) {
      requestAnimationFrame(step);
    }
  };

  document.documentElement.onclick = (e) => {
    running = !running;
    maybeStep();
  };

  maybeStep();
};


const registerOnClick = (callFunc) => {
  ThisCallFunc = callFunc(mouseX, mouseY);
}

const drawLine = (x1, y1, x2, y2, color, ctx) => {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

const drawRect = (x1, y1, width, height, color, ctx) => {
  drawLine(x1, y1, x1 + width, y1, color, ctx);
  drawLine(x1 + width, y1, x1 + width, y1 + height, color, ctx);
  drawLine(x1 + width, y1 + height, x1, y1 + height, color, ctx);
  drawLine(x1, y1 + height, x1, y1, color, ctx);
}

const drawFilledRect = (x1, y1, side1, side2, color, ctx) => {
  ctx.fillStyle = color;
  ctx.fillRect(x1, y1, side1, side2, ctx);
}

const drawTriangle = (x1, y1, x2, y2, x3, y3, color, ctx) => {
  drawLine(x1, y1, x2, y2, color, ctx);
  drawLine(x2, y2, x3, y3, color, ctx);
  drawLine(x3, y3, x1, y1, color, ctx);
};

const drawFilledCircle = (x, y, size, color, ctx) => {
  ctx.fillStyle = color;
  ctx.arc(x, y, size, 0, Math.PI * 2, false);
  ctx.fill()
}

const drawText = (text, x, y, size, color, ctx) => {
  ctx.font = size + "px Sans-Serif";
  ctx.fillStyle = color;
  ctx.fillText(text, x, y, size, ctx);
}

const clear = (ctx, canvas) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const newCanvas = (id) => {
  const canvas = document.createElement('canvas');
  const body = document.getElementsByTagName("body")[0];
  canvas.id = id;
  canvas.width = window.innerWidth / 4;
  canvas.height = window.innerHeight / 4;
  body.appendChild(canvas);
  return canvas;
}

const getCtx = (canvas) => {
  return canvas.getContext("2d")
}

drawFilledCircle(10, 10, 10, "blue", ctx)
  //drawLine(0, 0, 100, 20, 'red', testCtx)
  //drawRect(100, 100, 200, 100, 'red', testCtx)
  //drawFilledRect (200, 200, 100, 100, 'red', testCtx)
  //drawTriangle(100, 300, 500, 300, 250, 200, 'black', testCtx)
  //clear(testCtx, testCanvas);