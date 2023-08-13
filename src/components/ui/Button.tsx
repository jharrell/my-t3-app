import React from "react";
import RippleEffect from "../effects/RippleEffect";
import { BaseButton } from "./BaseButton";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const Button: React.FC<ButtonProps> = ({
  label,
  variant = "default",
  ...props
}) => {
  return (
    <RippleEffect>
      <BaseButton
        className="bg-blue-500 px-4 py-2 text-white"
        variant={variant}
        {...props}
      >
        {label}
      </BaseButton>
    </RippleEffect>
  );
};

Button.displayName = "Button";
export default Button;
