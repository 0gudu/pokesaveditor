const defs  = require("./defs");

function getTextString(offset, size, data) {
  let output = "";
  for (let i = 0; i < size; i++) {
    const code = data[offset + i];
    console.log(`Byte ${i}: 0x${code.toString(16)} => ${defs.getChar(code)}`);
    if (code === 0x50) break;
    output += defs.getChar(code);
  }
  return output;
}

function setTextString(offset, size, data, code) {
  let output = "";
  for (let i = 0; i < size; i++) {
    console.log(`Byte ${i}: var: ${code[i]} ${defs.getHex(code[i])} => ${data[offset + i]}`);
    if (!code[i]) break;
    output += defs.getChar(code);
    data[offset + i] = defs.getHex(code[i]);
  }
  return data;
}

module.exports = { getTextString, setTextString };
