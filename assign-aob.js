const shoes = {
  id: "NK-270-BLK",
  brand: "Nike",
  model: "Air Max 270",
  price: 150,
  releaseYear: 2025,
  inventory: {
    size9: "14 pairs",
    size10: "8 pairs",
    size11: "3 pairs",
  },
  colorWays: {
    color1: "Black",
    color2: "White",
    color3: "Triple Black",
  },
};

const cloth = {
  name: "Floral Midi Dress",
  sizes: {
    size1: "small",
    size2: "medium",
    size3: "large",
  },
  colorWays: {
    color1: "Blue",
    color2: "Yellow",
  },
  material: "100% Rayon",
};

const medicine = {
  patientInfo: {
    name: "Jhon Doe",
    age: 45,
    weight: "80 KG",
    BloodType: "O+",
  },
  Diagonses: {
    primary: {
      name: "Type 2 Diabetic",
      status: "chronic",
      DiagnosesDate: 20210314,
    },
    secondary: {
      name: "Hypertension",
      status: "Managed",
      DiagnosesDate: 20191102,
    },
  },
  Medication1: {
    name: "Metformin",
    Details: {
      Category: "Biguanide",
      Form: "Extended-Release Tablet",
      Strength: "500 mg",
    },
    Instruction: {
      Dosage: "Take 1 tablet",
      Frequency: "Twice a day",
      Timing: "With morning and evening meals",
    },
    SideEffects: {
      Common: "Nausea, mild diarrhea, stomach upset",
      Severe: "Lactic acidosis (seek immediate care)",
    },
    Refills: {
      totalAllowed: 6,
      Remaining: 4,
    },
  },
};

console.log(shoes);
console.log(cloth);
console.log(medicine);
