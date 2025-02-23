"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const useItemById = (id) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id || typeof id !== "string") {
            console.warn("ID inválido:", id);
            setLoading(false);
            return;
        }

        const fetchProduct = async () => {
            setLoading(true);
            try {
                const itemRef = doc(db, "products", id);
                const snapshot = await getDoc(itemRef);

                if (snapshot.exists()) {
                    setProduct({ id: snapshot.id, ...snapshot.data() });
                } else {
                    console.warn("Producto no encontrado");
                    setProduct(null);
                }
            } catch (error) {
                console.error("Error obteniendo producto:", error);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    return { product, loading };
};

export default useItemById;
