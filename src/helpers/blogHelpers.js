const createId = (array) => {
    if(array.length > 0) {
        return array[array.length - 1].id + 1
    }
    else {
        return 1
    }
}

const createData = () => new Date().toString()

module.exports = {
    createId,
    createData
}
