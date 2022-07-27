const ftoc = function(degrees) {

  // [°C] = ([°F] − 32) × 5⁄9
  let result = (degrees - 32) * (5/9);
  return Math.round(result * 10) / 10;

};

const ctof = function(degrees) {

  //(0 °C × 9/5) + 32
  let result = (degrees * (9/5)) + 32;
  return Math.round(result * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
