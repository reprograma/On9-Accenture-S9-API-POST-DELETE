const getNewID = function (array){
    if(array.length > 0){
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

module.exports = {
    getNewID    
}
