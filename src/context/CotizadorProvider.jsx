import { createContext, useState } from 'react'
import { obtejerDiferenciaYear, calcularMarca, obtenerPlan, formatearDolares } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan: ''
    })

    const handleChangeData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })

    }

    const [error, setError] = useState('')
    const [resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

    const cotizaSeguro = () => {
        let resultado = 2000

        const diferencia = obtejerDiferenciaYear(data.year)

        resultado -= ((diferencia * 3) * resultado) / 100

        resultado = calcularMarca(data.marca) * resultado

        const incrementoPlan = obtenerPlan(data.plan)

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2)

        formatearDolares(resultado)

        setCargando(true)

        setTimeout(() => {
            setResultado(resultado)
            setCargando(false)
        }, 2000)

    }

    return (
        <CotizadorContext.Provider value={{
            handleChangeData,
            data,
            error,
            setError,
            cotizaSeguro,
            resultado,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext