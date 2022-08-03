module.exports = function reverse (n) {
    const num = Math.abs(n)

    return (
    parseFloat(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    ) 
  )
}
