export function colorNumber(number: number) {
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
