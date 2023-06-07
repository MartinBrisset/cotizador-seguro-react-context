import { Formulario } from "./Formulario"

export const AppSeguro = () => {
  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl">Cotizador de seguros de auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario />
        </main>
    </>
  )
}
