const dpapi = require('./build/Release/node-dpapi.node');

module.exports.protectData = dpapi.protectData;
module.exports.unprotectData = dpapi.unprotectData;
