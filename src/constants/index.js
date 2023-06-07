export const marcas = [
    {
        id: 1,
        nombre: 'Estandar',
    },
    {
        id: 2,
        nombre: 'Premium',
    },
    {
        id: 3,
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