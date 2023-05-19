import React from "react";
import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  content: string;
  onClick: () => void;
};

export default function Button({ content, onClick }: ButtonProps) {
  return (
    <div>
      <MUIButton onClick={onClick}>{content} </MUIButton>
    </div>
  );
}
