export const marcas = [
    {
        id: 'Estandar',
        nombre: 'Estandar',
    },
    {
        id: 'Premium',
        nombre: 'Premium',
    },
    {
        id: 'Deportivo',
        nombre: 'Deportivo',
    }

]

const yearsmax = new Date().getFullYear() + 1;
export const years = Array.from(new Array(20), (x, i) => yearsmax - i);

export const planes = [
    {
        id: 'Basico',
        nombre: 'Básico'
    },
    {
        id: 'Completo',
        nombre: 'Completo'
    }
]