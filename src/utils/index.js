export function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getFilledArray(len,val) {
  return Array.apply(null, {length: len}).map(Function.call,()=>{return val})
}

export function swapArrayItems(array,n,m) {
  let x = array[m]
  let y = array[n]
  array[n] = x
  array[m] = y
  return array
}

export function getKFYShuffledIndex(size) {
  let output = []
  for (let n=0; n<size; n++) {
    output.push(n)
  }
  for (let i = size-1; i>-1; i--) {
    let j = getRandomInt(i)
    output = swapArrayItems(output,i,j)
  }
  return output
}

export function shuffleArrayWithKFY(array) {
  for (let i = array.length-1; i>-1; i--) {
    let j = getRandomInt(i)
    array = swapArrayItems(array,i,j)
  }
  return array
}
