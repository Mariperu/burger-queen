import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { onSnapshot, collection, query } from "firebase/firestore";

//Hook "customizado" (o personalizado)
//Para traer data de firebase
export const useData = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, collectionName));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setDocs(documents);
    });
    //Limpia el componente
    return () => unsubscribe();
  }, [collectionName]);
  return { docs };
};
