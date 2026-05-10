import chalk from "chalk";
import dedent from "dedent";


const printErr = err => {
    console.log(chalk.bgRed("Error" + " " + err));    
}

const printSucc = success => {
    console.log(chalk.green("Success" + " " + success));   
}

const printHelp = () => {
    console.log(dedent
        `
            ${chalk.bgCyan("Help")}
            -s [CITY] for install
            -h for Help
            -t [API_KEY for saving token]
        `
    );
    
}

export {
    printErr, 
    printSucc,
    printHelp
}