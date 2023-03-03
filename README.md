




A Node.js command-line application that takes in user input to generate a logo and save it as an .svg file. The application will prompt the user to select color, shape, and provide text for the logo and save the generated svg to file.

# User Story
AS a web developer
I WANT to generate a simple logo for my projects
SO THAT I can have a logo for my projects without paying for a designer.

# Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to 3 characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from including: circle, triangle, or square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered all prompts
THEN an SVG file is created named `logo.svg`
AND "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered.
