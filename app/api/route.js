import { db } from "@/Firebase/firebase"
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function GET(request) {
    const { searchParams } = request.nextUrl
    const categoria = searchParams.get("categoria")

    const productsCollection = collection(db, "products")

    try {
        const filtro = query(productsCollection, where("category", "==", categoria))
        const snapshot = await getDocs(categoria ? filtro : productsCollection)

        const productosFinales = snapshot.docs.map((documentRef) => {
            const id = documentRef.id
            const productoData = documentRef.data()
            productoData.id = id
            return productoData
        })

        return NextResponse.json({
            message: "Productos obtenidos con éxito",
            error: false,
            payload: productosFinales
        })

    } catch (error) {
        return NextResponse.json({
            message: `Error al obtener los productos: ${error.message}`,
            error: true,
            payload: null
        })
    }
}

export async function POST(request) {
    const producto = await request.json()

    try {
        const productsCollection = collection(db, "products")
        await addDoc(productsCollection, { ...producto })

        return NextResponse.json({
            message: "Producto creado con éxito",
            error: false,
            payload: null
        })

    } catch (error) {
        return NextResponse.json({
            message: `Error al crear el producto: ${error.message}`,
            error: true,
            payload: null
        })
    }
}