import { fireStorage } from "../../../services/firebase";

//************  Put file to fireStorage *******************
//***************************************************** */
async function inputFile(folderName, fileName, file) {
  let data = {};
  const storageRef = fireStorage.ref(folderName);
  const fileRef = storageRef.child(fileName);
  try {
    const res = await fileRef.put(file);
    data = res;
  } catch (err) {
    console.log(err);
  }
  return data;
}

//*************** Get link from storage **********************/
//***************************************************** */
async function getLink(folderName, fileName) {
  const storageRef = fireStorage.ref(folderName);
  const fileRef = storageRef.child(fileName);
  let linkImg;
  try {
    linkImg = await fileRef.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return linkImg;
}

//****************  Delete an image ******************* */
//***************************************************** */
function deletImg(folderName, fileName) {
  const storage = fireStorage.ref(folderName);
  const file = storage.child(fileName);
  file
    .delete()
    .then((res) => {
      console.log("delete success!!")
    })
    .catch((err) => {
      console.log(err.message)
    });
}
export { inputFile, getLink, deletImg };
