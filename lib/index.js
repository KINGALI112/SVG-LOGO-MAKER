const { createCanvas } = require("canvas");
const fs = require("fs");
const Prompt = require("./prompt");
const { Square, Circle, Triangle } = require("./shapes");

const canvas = createCanvas(300, 200, "svg");
const context = canvas.getContext("2d");
context.fillStyle = "#ffffff";
context.textAlign = "center";

module.exports = () => {
  Prompt().then((res) => {
    const TextToRender = res.textPrompt;
    const TextPromptColor = res.textPromptColor;
    const Shape = res.Shape;
    const ShapeColor = res.ShapeColor;

    switch (Shape.toLowerCase()) {
      case "circle":
        const circ = new Circle(ShapeColor, 50, context);
        circ.Render();
        circ.RenderText(TextToRender, TextPromptColor);
        break;
      case "square":
        const sqr = new Square(100, 300, ShapeColor, context);
        sqr.Render();
        sqr.RenderText(TextToRender, TextPromptColor);
        break;
      case "triangle":
        const tri = new Triangle(ShapeColor, context);
        tri.Render();
        tri.RenderText(TextToRender, TextPromptColor);
        break;
      default:
        break;
    }
    const buffer = canvas.toBuffer("image/svg");
    fs.writeFileSync("./examples/Logo.svg", buffer);
    console.log("\nGenerated Logo.svg✨");
  });
};
