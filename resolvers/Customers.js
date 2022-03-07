const { clientes } = require('../data/newDB')


module.exports = {
  customers(_, { id }) {
    const sels = clientes
        .filter(p => p.id === id)
    return sels ? sels[0] : null
}
}

