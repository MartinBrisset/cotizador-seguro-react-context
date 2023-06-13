import { Formulario } from "./Formulario"
import useCotizador from "../hooks/useCotizador"

export const AppSeguro = () => {

  const { resultado } = useCotizador()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl">Cotizador de seguros de auto</h1>
        </header>

        <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
            <Formulario />
        </main>

        {resultado > 0 && (
            <div className="bg-green-500 text-white text-center mt-5 p-3">
                <p className="text-xl">El total es: $ {resultado}</p>
            </div>
        )}
    </>
  )
}
