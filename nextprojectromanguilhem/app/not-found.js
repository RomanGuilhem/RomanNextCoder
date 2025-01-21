import Link from "next/link"

function NotFound ({href}){
    return (
        <div>
            <p>No se encontro la pagina</p>
            <Link href="#">Volver a la pagina de inicio</Link>
        </div>
    )
}

export default NotFound