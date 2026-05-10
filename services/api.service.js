import https from 'https'
import { getKeyval, TOKEN_DICT } from './storage.service.js'
import { printErr } from './log.service.js'

const getWeather = async city => {
    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
    const token = await getKeyval(TOKEN_DICT.token)
    // console.log(token);
    
    if(!token){
        printErr("token yoq");
        return;
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather')
    url.searchParams.append('q', city)
    url.searchParams.append('appid', token)
    url.searchParams.append('lang', 'en')
    url.searchParams.append('units', 'metric')
    // console.log(url);
    
    https.get(url, res =>{
        let resp = ''
        res.on('data', chunk => {
            resp += chunk
        })
        res.on('end', () => {
            console.log(resp);
            
        })
    })
}

export {getWeather}