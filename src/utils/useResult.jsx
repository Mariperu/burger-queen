import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";

//Hook "customizado" (o personalizado)
//Para realizar consulta específica de un estado en firestore
const useResult = (collectionName, state) => {
  //console.log(collectionName, state);

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      where("state", "==", state)
    );
    onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, data: doc.data() });
      });
      setDocs(documents);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return docs;
  //console.log(docs);
};

export { useResult };
