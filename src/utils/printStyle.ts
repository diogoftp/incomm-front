export function tableColorNumber(number: number) {
  if (number === null || number === undefined) {
    return '-';
  }
  let color = number < 0 ? 'red' : 'green';
  return {
    props: {
      style: { color: color }
    },
    children: 'R$ ' + number.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }
}

export function colorFromNumber(number: number) {
  if (number === null || number === undefined) {
    return '-';
  }
  if (number < 0) return 'red';
  return 'green';
}
