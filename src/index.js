module.exports = function reverse (n) {
  n = n.toString()
  let newString = ''
  n = n.replace('-','')
  for (let i=0; i<n.length; i++){
      newString +=n[n.length-i-1]
  }
  return newString
}