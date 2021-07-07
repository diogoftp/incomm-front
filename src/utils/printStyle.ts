export function tableColorNumber(number: number) {
  if (number === null || number === undefined) {
    return '-';
  }
  let color = number < 0 ? 'red' : 'green';
  return {
    props: {
      style: { color: color }
    },
    children: 'R$ ' + number
  }
}

export function colorFromNumber(number: number) {
  if (number === null || number === undefined) {
    return '-';
  }
  if (number < 0) return 'red';
  return 'green';
}
