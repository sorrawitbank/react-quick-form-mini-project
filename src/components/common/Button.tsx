import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type ?? "button"}
      className={`h-10 px-4 py-2 text-sm text-${
        props.textColor ?? "black"
      } bg-${props.bgColor ?? "white"} ${
        props.borderColor && `border border-${props.borderColor}`
      } rounded-lg cursor-pointer`}
    >
      <div className="flex justify-center items-center gap-2">{props.children}</div>
    </button>
  );
}

export default Button;
