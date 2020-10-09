const obterNovoValor = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
  }
  
  const novaData = () => new Date().toString()
  
  module.exports = {
    obterNovoValor,
    novaData
  }