import { FormGroup, TextField } from "@mui/material";
import React from "react";

export default function CreateNote({
  label,
  value,
  onChange,
  rows,
  inputProps,
}) {
  return (
    <>
      <FormGroup sx={{ m: 4 }}>
        <TextField
          id="outlined-basic"
          label={label}
          variant="outlined"
          onChange={onChange}
          multiline
          inputProps={{ maxLength: inputProps }}
          rows={rows}
        />
      </FormGroup>
    </>
  );
}
