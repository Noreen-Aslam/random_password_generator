// Importing the 'inquirer' module for CLI prompts
import inquirer from "inquirer";

// Function to generate a random password of specified length
const generatePassword = (length: number): string => {
    // Characters to be used in the password
    const charset = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+{}|:<>?~';
    let password = "";

    // Loop to generate each character of the password
    for (let i = 0; i < length; i++) {
        // Generating a random index to select a character from the 'charset' string
        const randomIndex = Math.floor(Math.random() * charset.length);
        // Appending the randomly selected character to the password
        password += charset[randomIndex];
    }
    return password; // Returning the generated password
};

// Function to prompt the user for the length of the password and generate it
const mainMenuPrompt = async () => {
    // Prompting the user for the length of the password, default length is 12
    const { length } = await inquirer.prompt([{
        type: "number",
        name: "length",
        message: "Enter password length:",
        default: 12, // Default password length
    }]);

    // Generating the password based on the specified length
    const password = generatePassword(length);
    // Displaying the generated password
    console.log(`Generated password: ${password}`);
};

// Displaying a welcome message when the script is run
console.log("Welcome to the Password Generator CLI App\n");

// Calling the function to prompt the user for password generation
mainMenuPrompt();
