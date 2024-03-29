// import { useState } from "react";

// // Основа
// const useCalc = () => {
//   const pi = 3.1415926535;
//   const [corner, setCorner] = useState(0);
//   const [midline, setMidline] = useState(0);

//   const handleCalculate = ({ firstParams, secondParams }: any) => {
//     let radius = 0, chord = 0, deflection = 0, thickness = 0, type = "Внутренний";

//     if (firstParams.param1.toLowerCase() === "радиус") {
//       radius = parseFloat(firstParams.value1);
//     } else if (firstParams.param1.toLowerCase() === "хорда") {
//       chord = parseFloat(firstParams.value1);
//     }

//     if (secondParams.param2?.toLowerCase() === "хорда") {
//       chord = parseFloat(secondParams.value2);
//     } else if (secondParams.param2?.toLowerCase() === "радиус") {
//       radius = parseFloat(secondParams.value2);
//     }

//     const newCorner = radius > 0 ? (2 * Math.asin(chord / (2 * radius)) * 180) / pi : 0;
//     setCorner(newCorner);

//     if (secondParams.param3) {
//       type = secondParams.param3;
//     }
//     if (secondParams.param4) {
//       thickness = parseFloat(secondParams.param4);
//     }

//     let newMidline = 0;
//     if (type.toLowerCase() === "внутренний") {
//       newMidline = (radius + (thickness / 2)) * 2 * pi * newCorner / 360;
//     } else if (type.toLowerCase() === "наружный") {
//       newMidline = (radius - (thickness / 2)) * 2 * pi * newCorner / 360;
//     }

//     setMidline(newMidline / 2);
//   };

//   return { corner, midline, handleCalculate };
// };

// export { useCalc };


import { useState } from "react";

// Основа
const useCalc = () => {
  const pi = 3.1415926535;
  const [corner, setCorner] = useState(0);
  const [midline, setMidline] = useState(0);

  const handleCalculate = ({ firstParams, secondParams }: any) => {
    let radius = 0,
      chord = 0,
      deflection = 0,
      thickness = 0,
      type = "внутренний";

    // Определение входных значений
    if (firstParams.param1.toLowerCase() === "радиус") {
      radius = parseFloat(firstParams.value1);
    } else if (firstParams.param1.toLowerCase() === "хорда") {
      chord = parseFloat(firstParams.value1);
    } else if (firstParams.param1.toLowerCase() === "прогиб") {
      deflection = parseFloat(firstParams.value1);
    }

    if (secondParams.param2?.toLowerCase() === "хорда") {
      chord = parseFloat(secondParams.value2);
    } else if (secondParams.param2?.toLowerCase() === "радиус") {
      radius = parseFloat(secondParams.value2);
    } else if (secondParams.param2?.toLowerCase() === "прогиб") {
      deflection = parseFloat(secondParams.value2);
    }

    // Дополнительные параметры
    if (secondParams.param3) {
      type = secondParams.param3.toLowerCase();
    }
    if (secondParams.param4) {
      thickness = parseFloat(secondParams.param4);
    }

    // Расчет прогиба, если он не задан и известны радиус и хорда
    if (chord === 0 && radius > 0 && deflection > 0) {
      chord = 2 * Math.sqrt(radius * radius - (radius - deflection) * (radius - deflection));
    } else if (radius === 0 && deflection > 0 && chord > 0) {
      radius = deflection / 2 + (chord * chord) / (8 * deflection);
    }

    const newCorner = radius > 0 && chord > 0 ? (2 * Math.asin(chord / (2 * radius)) * 180) / pi : 0;
    setCorner(newCorner);

    let newMidline = 0;
    if (type === "внутренний") {
      newMidline = ((radius + thickness / 2) * 2 * pi * newCorner) / 360;
    } else if (type === "наружный") {
      newMidline = ((radius - thickness / 2) * 2 * pi * newCorner) / 360;
    }

    setMidline(newMidline);
  };

  return { corner, midline, handleCalculate };
};

export { useCalc };