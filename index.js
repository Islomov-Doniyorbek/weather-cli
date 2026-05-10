import getArgs from './helpers/args.js'
import { printErr, printSucc, printHelp } from './services/log.service.js'
import { savekeyval } from './services/storage.service.js'



const saveToken = async token =>{
    try{
        await savekeyval('token', token)
        printSucc("Token saqlandi")
    }catch(err){
        printErr("xatolik: " + err.message)
    }
}
const strs = () => {
    const args = getArgs(process.argv)
    // printSucc("good")
    // printErr("err")

    console.log(args);
    if(args.h){
        printHelp()
    }
    if(args.s){

    }
    if(args.t){
        return saveToken(args.t)
    }
}

strs()