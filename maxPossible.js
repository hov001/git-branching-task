'use strict'

// Write a function that makes the first number as large as possible by swapping out its digits for digits in the second number.
// maxPossible(9328, 456) ➞ 9658
// 9658 is the largest possible number built from swaps from 456.
// 3 replaced with 6 and 2 replaced with 5.
// maxPossible(523, 76) ➞ 763
// maxPossible(9132, 5564) ➞ 9655
// maxPossible(8732, 91255) ➞ 9755

const maxPossible = (numberOne, numberTwo) => {
  const arrayOne = String(numberOne).split(''),
    arrayTwo = String(numberTwo).split('')

  const result = arrayOne.map((el) => {
    const maxEl = Math.max(...arrayTwo),
      splicedIndex = arrayTwo.indexOf(String(maxEl))

    if (el < maxEl) {
      arrayTwo.splice(splicedIndex, 1)
      return maxEl
    } else {
      return el
    }
  })

  return Number(result.join(''))
}

console.log(maxPossible(523, 76))
console.log(maxPossible(9132, 5564))
console.log(maxPossible(8732, 91255))
