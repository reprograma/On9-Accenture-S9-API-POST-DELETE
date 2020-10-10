const getNewID = function (array) {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

const newDate = () => new Date().toString()

//NÃO ESQUECER DE EXPORTAR!!!!!!! 

module.exports = {
    getNewID,
    newDate   
}