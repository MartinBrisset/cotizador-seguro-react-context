export const marcas = [
    {
        id: 'estandar',
        nombre: 'Estandar',
    },
    {
        id: 'premium',
        nombre: 'Premium',
    },
    {
        id: 'deportivo',
        nombre: 'Deportivo',
    }

]

const yearsmax = new Date().getFullYear() + 1;
export const years = Array.from(new Array(20), (x, i) => yearsmax - i);

export const planes = [
    {
        id: 1,
        nombre: 'Básico'
    },
    {
        id: 2,
        nombre: 'Completo'
    }
]