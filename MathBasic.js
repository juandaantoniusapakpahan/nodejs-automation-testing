const MathBasic = {
  add: (a, b) => {
    if (!a || !b) {
      return "Silahkan masukan paramater";
    }
    if (typeof a !== "number" || typeof b !== "number") {
      return "Silahkan masukan paramater dengan data number";
    }

    return a + b;
  },
  subtract: (a, b) => {
    if (!a || !b) {
      return "Silahkan masukan paramater";
    }
    if (typeof a !== "number" || typeof b !== "number") {
      return "Silahkan masukan paramater dengan data number";
    }

    return a - b;
  },

  multiply: (a, b) => {
    if (!a || !b) {
      return "Silahkan masukan paramater";
    }
    if (typeof a !== "number" || typeof b !== "number") {
      return "Silahkan masukan paramater dengan data number";
    }

    return a * b;
  },
  divide: (a, b) => {
    if (!a || !b) {
      return "Silahkan masukan paramater";
    }
    if (typeof a !== "number" || typeof b !== "number") {
      return "Silahkan masukan paramater dengan data number";
    }

    return a / b;
  },
};

module.exports = MathBasic;
