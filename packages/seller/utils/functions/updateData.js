import { fireStore } from "../../services/firebase";
function updateData(collectionName, document, id) {
  console.log("called");
  fireStore
    .collection(collectionName)
    .doc(id)
    .update(document)
    .then((res) => {
      console.log("update success");
    })
    .catch((err) => {
      console.log(err.message);
    });
}
export { updateData };
