import { atom } from "recoil";

const searchValueState = atom({
    key:'SEARCH_VALUE',   
    default:[],
})
export default searchValueState;