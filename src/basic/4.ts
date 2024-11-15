function showMessage(message: string): void {
  console.log(message);
}

type CalcType = (num1: number, num2: number) => number;
const calc: CalcType = (num1, num2) => {
  return num1 + num2;
};

function customError(): never {
  throw new Error("Error");
}

console.log(calc(1, 2));
