import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
        Volver a la página de inicio
      </Link>
    </div>
  );
}
