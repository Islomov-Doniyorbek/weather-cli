import getArgs from './helpers/args.js'
import { printErr, printSucc, printHelp } from './services/log.service.js'

const strs = () => {
    const args = getArgs(process.argv)
    printSucc("good")
    printErr("err")

    console.log(args);
    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.h){

    }
}

strs()