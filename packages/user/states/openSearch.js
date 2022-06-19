import { atom } from "recoil";
// it is one state to handle of opening search bar 
const openSearch = atom({
    key:'OPENSEARCH',
    default:false
})
export default openSearch;