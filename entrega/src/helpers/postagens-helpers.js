const getNewID = function (array) {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

// ======== Código apresentando falha ===========

/*function newId(array) {
    if (array.length == 0) {
        return 1
    } else {
        return array.length + 1;
    }
}
*/


module.exports = {
    getNewID    
}

