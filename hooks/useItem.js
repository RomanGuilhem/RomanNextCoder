"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const useItems = (categories) => {
  const [itemsData, setItemsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const itemsCollection = collection(db, categories);
    getDocs(itemsCollection)
      .then((snapshot) => {
        setItemsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, [categories]);

  return { itemsData, loading };
};

export default useItems;
