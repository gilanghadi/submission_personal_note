import React, { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CreateNote from "../../Elements/CreateNote/CreateNote";

export default function Create({ data, setData }) {
  const [length, setLength] = useState(50);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onCreateNote = (e) => {
    e.preventDefault();
    const note = [
      ...data,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toDateString(),
        archived: false,
      },
    ];
    setData(note);
  };

  return (
    <>
      <Typography
        variant="h4"
        align="left"
        sx={{ m: 4 }}
        color="primary.main_dark"
      >
        Create Your Note
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onCreateNote}
      >
        <Typography
          variant="subtitle1"
          align="right"
          sx={{ m: 4 }}
          color="textSecondary"
        >
          The rest of the characters: {length}
        </Typography>
        <CreateNote
          label={"Note title"}
          value={""}
          onChange={(e) => {
            setTitle(e.target.value);
            setLength(50 - e.target.value.length);
          }}
          inputProps={50}
        />
        <CreateNote
          label={"Write your note"}
          value={""}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          rows={4}
        />
        <Button variant="outlined" sx={{ mx: 4 }} color="primary" type="submit">
          Create Note
        </Button>
      </Box>
    </>
  );
}
