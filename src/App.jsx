import { useState } from "react";
import Button from "./components/Button.jsx";

const clickSound = new Audio("/sounds/click.wav");
const playClick = () => {
  clickSound.currentTime = 0;
  clickSound.play();
};

const equalSound = new Audio("/sounds/equalToSound.wav");
const equalClick = () => {
  equalSound.currentTime = 0;
  equalSound.play();
};
export default function CalculatorApp() {
  const [expression, setExpression] = useState("0");

  const handleClick = (value) => {
    playClick();
    setExpression((prev) => (prev === "0" ? value : prev + value));
  };

  const handleAllClear = () => {
    playClick();
    setExpression("0");
  };

  const handleBackspace = () => {
    playClick();
    setExpression((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };
  const handleEqual = () => {
    equalClick();
    try {
      const result = new Function("return " + expression)();
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const buttons = [
    { label: "AC", action: handleAllClear, className: "bg-red-500 text-white" },
    { label: "←", action: handleBackspace, className: "bg-red-400 text-white" },
    {
      label: "%",
      action: () => handleClick("%"),
      className: "bg-orange-400 text-white",
    },
    {
      label: "÷",
      action: () => handleClick("/"),
      className: "bg-orange-400 text-white",
    },
    {
      label: "-",
      action: () => handleClick("-"),
      className: "bg-orange-400 text-white",
    },
    { label: "7", action: () => handleClick("7") },
    { label: "8", action: () => handleClick("8") },
    { label: "9", action: () => handleClick("9") },
    {
      label: "×",
      action: () => handleClick("*"),
      className: "bg-orange-400 text-white",
    },

    { label: "4", action: () => handleClick("4") },
    { label: "5", action: () => handleClick("5") },
    { label: "6", action: () => handleClick("6") },
    {
      label: "+",
      action: () => handleClick("+"),
      className: "bg-orange-400 text-white",
    },

    { label: "1", action: () => handleClick("1") },
    { label: "2", action: () => handleClick("2") },
    { label: "3", action: () => handleClick("3") },
    {
      label: "=",
      action: handleEqual,
      className: "bg-orange-500 text-white row-span-2",
    },

    {
      label: "0",
      action: () => handleClick("0"),
      className: "col-span-2 bg-blue-300",
    },
    {
      label: ".",
      action: () => handleClick("."),
      className: "bg-blue-500 text-white",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-900 flex items-center justify-center p-4">
      <div className="w-[320px] rounded-3xl bg-zinc-800 shadow-lg p-4">
        {/* Display */}
        <div className="h-20 bg-zinc-100 rounded-xl mb-4 flex items-end justify-end px-4 py-2 text-3xl font-semibold text-zinc-800 overflow-x-auto">
          {expression.replace(/\*/g, "×").replace(/\//g, "÷")}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map(({ action, className, label }, id) => (
            <Button
              key={id}
              onClick={action}
              className={`h-16 ${className || "bg-zinc-100 text-black"}`}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
