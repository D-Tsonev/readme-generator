# Professional README Generator

## Overview

This command-line application is designed to help developers quickly create a professional README.md file for their projects. It uses the Inquirer package to prompt users for information about their application, generating a high-quality README with sections for the project title, description, installation instructions, usage details, chosen license, contribution guidelines, test instructions, and contact information.

## How to Use

To use this application, follow these steps:

1. Install the necessary dependencies by running `npm install`.
2. Invoke the application by running the command `node index.js` in your terminal.

## User Input

The application will prompt you for the following information:

1. **Project Title:** Enter the title of your project.
2. **Description:** Provide a brief description of your project.
3. **Installation:** Explain how to install the project.
4. **Usage:** Describe how to use the project.
5. **License:** Choose a license for your project from a list of options.
6. **Contributing:** Specify how others can contribute to your project.
7. **Tests:** Describe how to run tests for your project.
8. **GitHub Username:** Enter your GitHub username.
9. **Email:** Provide your email address.


## Example README

For a sample README generated using the application, check the [Sample README](README-demo.md).

## Walkthrough Video

Watch the [Walkthrough Video](https://drive.google.com/file/d/1qs52TpTL2LIqcH0w0eh7sRh3F2eSKVaV/view?usp=drive_link) to see how to use the application and understand its functionality.


![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

## GitHub Repository

<p>Link to  <a href="https://github.com/D-Tsonev/readme-generator">Repository</a><p>



---

## Code Explanation

The application utilizes Node.js and the Inquirer package to prompt users for input. The `generateMarkdown` function takes user input and creates a formatted README. The `writeToFile` function writes the generated README to a file named `README.md`. The `init` function initializes the program by calling the necessary functions.

Feel free to use, modify, and share this application to streamline your README creation process. Happy coding!
