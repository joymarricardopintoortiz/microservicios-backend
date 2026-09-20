function info(mensaje) {
  console.log(`[MICROSERVICIOS] ${mensaje}`);
}

function error(mensaje) {
  console.error(`[MICROSERVICIOS][ERROR] ${mensaje}`);
}

module.exports = { info, error };
