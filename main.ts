#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.bold.yellow("\t\tWelcome To Hasnain's Coding World"));
console.log("=".repeat(70));


const res = await inquirer.prompt({
    type:"input",
    name:"userInput",
    message:chalk.bold.green("Please Enter The Amount Of Second"),
    validate:(input) => {
        if (isNaN(input)) {
            return chalk.bold.italic.red("Please Enter A Valid Number")
        }
        else if(input > 60){
            return chalk.bold.italic.red("Enter Seconds Less Then 60")
        }
        else {
            return true
        }
    }
})

let input = res.userInput

function startTime(val : number) {
    const startTime = Date.now();                // Current timestamp in milliseconds
    const targetTime = startTime + (val * 1000); // Target time in milliseconds

    setInterval(() => {
        const currentTime = Date.now();
        const timeDiff = Math.max(0, Math.floor((targetTime - currentTime) / 1000)); // Calculate difference in seconds

        if (timeDiff <= 0) {
            console.log(chalk.bold.italic.red("Timer Expired"));
            process.exit();
        }

        const minute = Math.floor(timeDiff / 60);
        const sec = timeDiff % 60;
        console.log(`${chalk.bold.yellow(minute.toString().padStart(2, '0'))}:${chalk.bold.yellow(sec.toString().padStart(2, '0'))}`);

    }, 1000);
}

startTime(input)

console.log("=".repeat(70));
