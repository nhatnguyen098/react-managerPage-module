import axios from 'axios'
import * as Config from './../constants/config'
export default (endpoint, method, data) => {
    return axios({
        method: method,
        url: `${Config.CALL_API_URL}/${endpoint}`,
        data: data
    }).catch(err=>{
        console.log(err)
    })

}