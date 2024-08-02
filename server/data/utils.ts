let orderId: number = 1

const addOne =() => {
    orderId ++
}

const getOrderId =() => {
    return orderId
}

module.exports = {
    getOrderId,
    addOne
}