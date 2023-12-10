import axios from "axios"
import { mainUrl } from "./index"

export async function getUsers() {
    let result
    result = await axios(mainUrl + "/users").then(res => {
        return res.data
    })
    return result
}

export async function getUser(id) {
    let result
    result = await axios(mainUrl + "/users/" + id).then(res => {
        return res.data
    })
    return result
}

export async function putUser(id, data) {
    const result = await axios.put(mainUrl + "/users/" + id, data);
    console.log("removed");
    return result.data;
}

