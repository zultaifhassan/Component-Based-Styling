import React from "react";
import classNames from "classnames";
import "./Button.css";

const Button = ({
  children,
  className,
  varient = "full-button",
  br = "br-10",
  px = "btn-px-6",
  py = "btn-py-20",
}) => {
  const buttonClass = classNames(varient, className, br, px, py);
  return <button className={buttonClass}>{children}</button>;
};

export default Button;
