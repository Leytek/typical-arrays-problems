
exports.min = array => !array || array.length === 0 ? 0 : array.reduce((a, c) => c <= a ? c : a)

exports.max = array => !array || array.length === 0 ? 0 : array.reduce((a, c) => c >= a ? c : a)

exports.avg = array => !array || array.length === 0 ? 0 : array.reduce((a, c) => a += c, 0)/array.length
