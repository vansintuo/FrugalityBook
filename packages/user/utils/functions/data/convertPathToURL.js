
import { getLink } from "../fireStorage";

const convertPathToURL=async(data)=>{
  let dataStore =[];
      if (data?.length != 0 ){
        for (let i = 0; i < data?.length; i++) {
          const imgName = data[i].allImagePaths[0].split("/");
           const result = await  getLink(imgName[0], imgName[1])
           dataStore.push({
            ...data[i],
            link: result
          })
          }
      }
    return dataStore
}
export {
  convertPathToURL
}