import { Fragment } from "react"
import { marcas, years, planes } from "../constants"
import useCotizador from "../hooks/useCotizador"
export const Formulario = () => {


    const { handleChangeData, data } = useCotizador()



  return (
    <>
        <form>
            <div className="my-5">
                <label className="blocl mb-3 font-bold text-gray-400 uppercase">
                    Marca
                </label>
                <select 
                    name="marca" 
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={e => handleChangeData(e)}
                    value={data.marca}
                >
                    <option value="">-- Seleccione --</option>
                    {marcas.map((marca) => (
                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="blocl mb-3 font-bold text-gray-400 uppercase">
                    Año
                </label>
                <select 
                    name="year" 
                    className="w-full p-3 bg-white border border-gray-200"
                    onChange={e => handleChangeData(e)}
                    value={data.year}
                >
                    <option value="">-- Seleccione --</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div className="my-5">
                <label className="blocl mb-3 font-bold text-gray-400 uppercase">
                    Plan
                </label>
                <div className="flex gap-3 items-center">
                    {planes.map((plan) => (
                        <Fragment key={plan.id}>
                            <label>
                                {plan.nombre}
                            </label>
                            <input 
                                type="radio" 
                                name="plan" 
                                value={plan.id} 
                                onChange={e => handleChangeData(e)}
                            />
                        </Fragment>
                    ))}
                </div>
            </div>
            <input 
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold p-3 uppercase cursor-pointer"     
                value="Cotizar"       
            />
        </form>
    </>
  )
}
