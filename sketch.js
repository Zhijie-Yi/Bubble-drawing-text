let bubbles = [];
let gui;
let params = {
  minRadius: 10,
  maxRadius: 50,
  strokeColor: "#FFFFFF",
  strokeWeight: 4,
  jitter: true,
  bgColor: "#000000" // 新增：背景颜色
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupGUI();
}

function draw() {
  background(params.bgColor); // 使用 GUI 控制的背景颜色

  for (let i = 0; i < bubbles.length; i++) {
    if (params.jitter) {
      bubbles[i].move();
    }
    bubbles[i].show();
  }

  drawCopyright();
}

function mouseDragged() {
  let r = random(params.minRadius, params.maxRadius);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

class Bubble {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
    this.z += random(-2, 2);
  }

  show() {
    stroke(params.strokeColor);
    strokeWeight(params.strokeWeight);
    noFill();
    ellipse(this.x, this.y, this.z);
  }
}

function setupGUI() {
  gui = new dat.GUI();
  gui.width = 300;
  gui.add(params, "minRadius", 5, 100).name("最小半径");
  gui.add(params, "maxRadius", 10, 200).name("最大半径");
  gui.addColor(params, "strokeColor").name("描边颜色");
  gui.add(params, "strokeWeight", 1, 20).name("描边粗细");
  gui.add(params, "jitter").name("启用抖动");
  gui.addColor(params, "bgColor").name("背景颜色"); // 新增控制
}

function drawCopyright() {
  push();
  fill(255);
  noStroke();
  textSize(12);
  textAlign(RIGHT, BOTTOM);
  text(
    "Created by @Zhijie-Yi @LuANyxxx\n©️All my products are available for personal and commercial projects",
    width - 10,
    height - 10
  );
  pop();
}
