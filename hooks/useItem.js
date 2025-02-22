"use client"
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const useItems = (collectionname) => {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection)
      .then((snapshot) => {
        setItemsData(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { itemsData, loading };
};

export default useItems;