const criarId = (array) => {
    if(array.length > 0){
        return array[array.length - 1 ].id + 1
    }
    else {
        return 1
    }
}

const criarData = () => new Date().toString()

module.exports = {
    criarId,
    criarData
}