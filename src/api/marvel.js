import axios from "axios"
import cryptoJS from "crypto-js"

const privateKey = "666771d4344d36e88416549dc01cc89e77aef44f"

const publicKey = "2077f290d4af055dd6b9c195f7b77f82"

const timeStamp = Date.now()

const md5hash = cryptoJS.MD5(timeStamp+privateKey+publicKey).toString()

export default axios.create({
    method: "GET",
    headers: {
        Accept: "*/*"
    },
    baseURL: "http://gateway.marvel.com/v1/",
    params: {
        "apikey": publicKey,
        "ts": timeStamp,
        "hash": md5hash
    }
})