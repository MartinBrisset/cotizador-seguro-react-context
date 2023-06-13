import useCotizador from "../hooks/useCotizador"

import React from 'react'

const Error = () => {
    const { error } = useCotizador()
  return (
    <div className="border text-center border-red-400 gb-red-100 py-3 text-red-700">
        <p>
            {error}
        </p>
    </div>
  )
}

export default Error