export function formatCurrency (currency) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(currency)
}