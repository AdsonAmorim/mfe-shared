import React, { ChangeEventHandler, FormEvent } from "react";
import { TextField as MUITextField } from "@mui/material";

type TextFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (event: any) => any;
};

export default function TextField({
  value,
  label,
  placeholder,
  type,
  onChange,
}: TextFieldProps) {
  const valueWithMask = () => {
    return value;
  };

  return (
    <div>
      <MUITextField
        value={value}
        label={label}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
