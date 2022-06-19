import {  fireStore } from "../../../services/firebase";

// ********************** List All Items ***********************
async function listDocuments(collectionName) {
    let data = [];
    try {
      const doc = await fireStore.collection(collectionName).get();
      doc.docs.forEach((item) => {
        if (item.exists) {// .exists mean 
          data.push( {id:item.id, ...item.data()});
        } else {
          console.log("No such document!");
        }
      });
    } catch (err) {
      console.error(err);
    }
    return data
  }

  //******************** listADocument *********************** 
  async function listADocument(collectionName,id){
    let data ={}
    try{
        const doc = await fireStore.collection(collectionName)
        .doc(id)
        .get()
        data = {id:doc.id,...doc.data()}
    }catch(err){
        console.log(err.message)
    }
    return data
  }

    // ******************* Update data ***************************
  async function updateData (collectionName,document,id){
    
    try{
      await  fireStore.collection(collectionName)
      .doc(id)
      .update(document)
    }catch(err){
      console.log(err.message)
    }
    return ;
    }

    // ******************** Delete data *****************************
  async function deleteData(collectionName,id){
       try{
         await fireStore.collection(collectionName)
        .doc(id)
        .delete()
       }catch(er){
            console.log(err.message)
        }
    }

    //****************** Create Collection *************************
    async function createCollection (collectionName,document){
            fireStore.collection(collectionName)
            .add(document)
            .then((res)=>{
              console.log(res)
            }).catch((err)=>{
              console.log
            })
      return ;
    }
  export {
       listDocuments,
       listADocument,
       updateData,
       deleteData,
       createCollection,
     }
