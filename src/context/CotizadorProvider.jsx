import { createContext, useState } from 'react'

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

    return (
        <CotizadorContext.Provider value={{
            handleChangeData,
            data
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext