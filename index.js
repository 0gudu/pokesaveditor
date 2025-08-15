const fs = require("fs");
const funcsv = require("./save/funcs");

function getTrainerName(data) {
  const datafile = fs.readFileSync(data);

  //location and size of the trainer name in the game memory
  var offset = 0x2598;
  var size = 8;
  
  return funcsv.getTextString(offset, size, datafile);
}

function setTrainerName(name, arquivo){
  const datafile = fs.readFileSync(arquivo);

  //location and size of the trainer name in the game memory
  var offset = 0x2598;
  var size = 8;

  if(size < name.length) return false;
  let data = funcsv.setTextString(offset, size, datafile, name );
  fs.writeFileSync(arquivo, data);
  return true;
}

module.exports = { getTrainerName, setTrainerName };
