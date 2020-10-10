const newDate = () => new Date().toString();

const newValue = (array) => {
    if(array.length > 0) {
        return array[array.length - 1].id + 1;
    } else {
        return 1
    }
}

module.exports = {
    newDate,
    newValue
}