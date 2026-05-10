import getArgs from './helpers/args.js'
import { getWeather } from './services/api.service.js';
import { printErr, printSucc, printHelp } from './services/log.service.js'
import { savekeyval, TOKEN_DICT } from './services/storage.service.js'



const saveToken = async token =>{

    if(!token.length) {
        printErr("Token yo'q");
        return 
    }
    try{
        await savekeyval(TOKEN_DICT.token, token)
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
    getWeather('uzbekistan')
}

strs()