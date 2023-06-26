export function obtejerDiferenciaYear(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
    let incremento;

    switch (marca) {
        case 'estandar':
            incremento = 1.15;
            break;

        case 'premium':
            incremento = 1.3;
            break;

        case 'depotivo':
            incremento = 1.5;
            break;

        default:
            break;
    }

    return incremento;
}

export function obtenerPlan(plan) {
    return (plan === 'Basico') ? 1.2 : 1.5;
}

export function formatearDolares(monto) {
    return monto.toLocaleString('en-US', {
        style: 'currency', 
        currency: 'USD' 
    })
}