"use client";

import React, { useEffect } from "react";
import { Button as MUIButton } from "@mui/material";

type ButtonProps = {
  content: string;
  onClick: () => void;
};

export default function Button({ content, onClick }: ButtonProps) {
  useEffect(() => {
    console.log("USE EFFECT CLIENT");
  }, []);

  return (
    <div>
      <MUIButton onClick={onClick}>{content} </MUIButton>
    </div>
  );
}
