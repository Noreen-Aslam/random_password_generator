// npm i typescript -g
// npm init -y
// tsc --init
// npm i inquirer
// npm i @type/inquirer -D
import inquirer from "inquirer";
const generatePassword = (length) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+{}|:<>?~';
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
};
const mainMenuPrompt = async () => {
    const { length } = await inquirer.prompt([{
            type: "number",
            name: "length",
            message: "Enter password length",
            default: 12,
        },
    ]);
    const password = generatePassword(length);
    console.log(`Generate password , ${password}`);
};
console.log("Welcome to the Password Generator CLI App\n");
mainMenuPrompt();
