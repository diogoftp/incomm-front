/**
 * Returns an object with color depending on whether the number is positive or negative and toLocaleString formated number.
 *
 * @param {number} number
 */
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

/**
 * Returns a string with green color for positive and red for negative number.
 *
 * @param {number} number
 */
export function colorFromNumber(number: number) {
  if (number === null || number === undefined) {
    return '-';
  }
  if (number < 0) return 'red';
  return 'green';
}
