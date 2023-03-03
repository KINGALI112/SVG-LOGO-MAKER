class Shape {
  constructor(Height, Width, Color, Canvas) {
    this.Height = Height;
    this.Width = Width;
    this.Color = Color;
    this.Canvas = Canvas;
  }
  Render() {
    this.Canvas.fillStyle = this.Color;
    this.Canvas.beginPath();
    this.Canvas.rect(0, 0, 300, 150);
    this.Canvas.stroke();
    this.Canvas.fill();
  }
  RenderText(text, color) {
    let FontSize = 45;
    this.Canvas.font = `800 ${FontSize}px sans-serif`;
    this.Canvas.fillStyle = color;
    this.Canvas.fillText(text, 150, 125);
  }
}

class Circle extends Shape {
  constructor(Color, Radius, Canvas) {
    super(0, 0, Color, Canvas);
    this.Radius = Radius;
  }
  Render() {
    this.Canvas.fillStyle = this.Color;
    this.Canvas.beginPath();
    this.Canvas.arc(150, 100, 100, 0, Math.PI * 2);
    this.Canvas.stroke();
    this.Canvas.fill();
  }
}

class Triangle extends Shape {
  constructor(Color, Canvas) {
    super(0, 0, Color, Canvas);
  }
  Render() {
    this.Canvas.fillStyle = this.Color;
    this.Canvas.beginPath();
    this.Canvas.moveTo(0, 200);
    this.Canvas.lineTo(150, 0);
    this.Canvas.lineTo(300, 200);
    this.Canvas.lineTo(0, 200);
    this.Canvas.stroke();
    this.Canvas.closePath();
    this.Canvas.fill();
  }
}

class Square extends Shape {
  constructor(Height, Width, Color, Canvas) {
    super(Height, Width, Color, Canvas);
  }
  RenderText(text, color) {
    const horizontal_align = this.Canvas.canvas.width / 2;
    let FontSize = 45;
    this.Canvas.font = `800 ${FontSize}px sans-serif`;
    this.Canvas.fillStyle = color;
    this.Canvas.fillText(text, horizontal_align, 200);
  }
}

module.exports = { Square, Triangle, Circle };
