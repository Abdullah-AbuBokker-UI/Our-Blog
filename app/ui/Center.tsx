import React, { FC, ReactNode } from "react";
import { cn } from "../utilis/cn";
interface center {
  className?: string;
  children?: ReactNode;
}
const Center: FC<center> = ({ className, children }) => {
  return (
    <div className={cn("w-full xl:w-2/3 mx-auto", className || "")}>
      {children}
    </div>
  );
};

export default Center;
