import { listADocument } from "../fireStore";
import { getLink } from "../fireStorage";
async function getAndStoreOneData(collectionName, id) {
  let dataStore = [];
  const res = await listADocument(collectionName, id)
    const imgName = res.AllImagePaths[0].split("/");
    const result = await getLink(imgName[0], imgName[1])
    if(result){
        dataStore.push({
            Title:res.Title,
            Desc:res.Desc,
            Price:res.Price,
            Author:res.Author,
            Link: result,
            Status:res.Status,
            Category:res.Category,
            Id:res.id,
            ImageName: imgName[1],
            ImagePath: imgName[0],
          });
    }
  return dataStore;
}
export { getAndStoreOneData };
