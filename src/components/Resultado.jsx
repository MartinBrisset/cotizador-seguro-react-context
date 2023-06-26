import useCotizador from "../hooks/useCotizador"

const Resultado = () => {
    
    const { resultado, data } = useCotizador()

    const { marca, year, plan } = data

    if (resultado === 0) {
        return null
    }

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">
            Resumen de cotización
        </h2>

        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {marca}
        </p>
        
        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {plan}
        </p>

        <p className="my-2">
            <span className="font-bold">Año: </span>
            {year}
        </p>

        <p className="my-2 text-2xl">
            <span className="font-bold">Total: </span>
           $ {resultado}
        </p>

    </div>
  )
}

export default Resultado