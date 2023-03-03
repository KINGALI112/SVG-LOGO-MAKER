const inquirer = require("inquirer");

module.exports = async () => {
  const res = await inquirer.prompt([
    {
      name: "textPrompt",
      message: "1.> Headline for Logo: ",
      type: "input",
      validate: (input) => {
        if (!input || input.length > 3) {
          return "Length of the Input Must Be Smaller Or Equal to 3";
        }
        return true;
      },
    },
    {
      name: "textPromptColor",
      message: "2.> Color for Headline: ",
      type: "input",
    },
    {
      name: "Shape",
      message: "3.> Please Select Shape of your Logo",
      choices: ["circle", "triangle", "square"],
      type: "list",
    },
    {
      name: "ShapeColor",
      message: "4.> Color for Shape: ",
      type: "input",
    },
  ]);
  return res;
};
