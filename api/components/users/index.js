// Importando controller del usuario
const controller = require("./controller");
// Importando base de datos
const store = require("../../../store/mysql");

// Exportando instancia del controlador con la base de datos para inicializarla
// en el network
module.exports = new controller(store);