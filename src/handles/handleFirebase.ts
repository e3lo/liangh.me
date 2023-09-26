import { addDoc, collection, getDocs  } from "@firebase/firestore"
import { db } from "../firebase_setup/firebase"
 
const handleSubmit = async (testdata:any) => {
    console.log("handles")

    const ref = collection(db, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    
    try {
        await addDoc(ref, data)
        console.log("Document written with ID: ", ref.id);
    } catch(err) {
        console.log(err)
    }
}

const handleGetData = async () => {
    console.log("getting data ...")
    const querySnapshot = await getDocs(collection(db, "test_data"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    await console.log("done")
}

const handleGetProjects = async () => {
    console.log("getting data ...")
    const querySnapshot = await getDocs(collection(db, "projects"));
    const output:Array<object> = []
    querySnapshot.forEach((doc) => {
        console.log(doc.data)
        output.push(doc.data)
    });
    await console.log("done")
    await console.log(output[0]);
    return output
}

export { handleSubmit, handleGetData, handleGetProjects }