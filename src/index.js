module.exports = function check(str, bracketsConfig) {
  const pairs = bracketsConfig
    .reduce((pairs, [open, close])=> Object.assign(pairs, {[open]: close}), {})
  let queue = ''
  for (const char of str) {
    if (queue.slice(-1) == char) queue = queue.slice(0, -1)
    else if (char in pairs) queue += pairs[char]
    else return false
  }
  return !queue
}
