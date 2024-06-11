import inquirer from "inquirer";
let loop = true;
while (loop) {
    let convertor = await inquirer.prompt([
        {
            name: "operetor",
            type: "confirm",
            message: "Are you want to change the Currency",
            default: false
        },
        {
            name: "currency",
            type: "list",
            choices: ["Pakistan", "India", "US Dollar"],
        }
    ]);
}
