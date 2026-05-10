const getArgs = require('./helpers/args')


const strs = () => {
    const args = getArgs(process.argv)

    console.log(args);
    console.log(process.argv);
    
}

strs()