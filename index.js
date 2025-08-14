const fs = require("fs");
const funcsv = require("./save/funcs");

function getTrainerName(data) {
  const datafile = fs.readFileSync(data);
  var offset = 0x2598;
  var size = 8;
  return funcsv.getTextString(offset, size, datafile);
}

function setTrainerName(name, arquivo){
  const datafile = fs.readFileSync(arquivo);
  var offset = 0x2598;
  var size = 8;
  let data = funcsv.setTextString(offset, size, datafile, name );

  fs.writeFileSync(arquivo, data);
  return true;
}

module.exports = { getTrainerName, setTrainerName };
