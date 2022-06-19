import { atom } from "recoil";

const updateState = atom({
    // we use it for update dialog and sell more 
    key:'UPDATESTATE',
    default:false
})
export default updateState;