import os from 'os'
import path from 'path';
import fs from 'fs'
const filePath = path.join(os.homedir(), 'weather-data.json');
const TOKEN_DICT= {
    token: '9dcde08ceade195d2ba0595f2b0c21d7',
    city: 'city'
}
const savekeyval = async (key, value) => {
    let data = {};

    if(await isExist(filePath)){
        const file = await fs.promises.readFile(filePath);

        data = JSON.parse(file)
    }
    data[key] = value;

    await fs.promises.writeFile(filePath, JSON.stringify(data));
}
const getKeyval = async key => {
    if(await isExist(filePath)){
       const file = await fs.promises.readFile(filePath);

       const data = JSON.parse(file)
        console.log(data);
        
        return data.token
    }

    return undefined
}
const isExist = async (path) => {
    try {
        await fs.promises.stat(path)
        return true
    }catch(err){
        return false
    }
}

export {savekeyval, getKeyval, TOKEN_DICT}