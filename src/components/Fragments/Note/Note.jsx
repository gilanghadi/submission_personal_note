import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import CardNote from "../../Elements/CardNote/Cardnote";
import { getInitialData, showFormattedDate } from "../../../utils/data";
import Typography from "@mui/material/Typography";
import Create from "./Create";

export default function Note() {
  const [data, setData] = useState(getInitialData());
  const [isArchived, setIsArchived] = useState(false);
  const dataActive = data.filter((item) => item.archived === false);
  const dataArchived = data.filter((item) => item.archived === true);

  const ArchiveAction = (id) => {
    setIsArchived(
      data
        .filter((item) => item.id === id)
        .map((item2) => {
          item2.archived = !item2.archived;
        })
    );
  };

  const SearchAction = (search) => {
    setData(data.filter((item) => item.title.toLowerCase().includes(search)));
  };

  const DeleteAction = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <Create dataActive={dataActive} data={data} setData={setData} />
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography
            variant="h4"
            align="left"
            sx={{ m: 4 }}
            color="primary.main_dark"
          >
            Your Note
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="standard-basic"
            label="Search"
            sx={{ m: 4 }}
            variant="standard"
            onChange={(e) => SearchAction(e.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" rowGap={4} columnGap={2}>
        {dataActive.length > 0 ? (
          dataActive.map((item, i) => (
            <Grid item key={i}>
              <CardNote
                title={item.title}
                subTitle={showFormattedDate(item.createdAt)}
                note={item.body}
                ArchiveAction={() => ArchiveAction(item.id)}
                DeleteAction={() => DeleteAction(item.id)}
                {...item}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography align="center" color="textSecondary">
              Note is empty
            </Typography>
          </Grid>
        )}
      </Grid>
      <Typography
        variant="h4"
        align="left"
        sx={{ m: 4 }}
        color="primary.main_dark"
      >
        Archive Note
      </Typography>
      <Grid container justifyContent="center" rowGap={4} columnGap={2}>
        {dataArchived.length > 0 ? (
          dataArchived.map((item, i) => (
            <Grid item key={i}>
              <CardNote
                title={item.title}
                subTitle={showFormattedDate(item.createdAt)}
                note={item.body}
                archived={isArchived}
                ArchiveAction={() => ArchiveAction(item.id)}
                DeleteAction={() => DeleteAction(item.id)}
                {...item}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Typography align="center" color="textSecondary">
              Note Archive is empty
            </Typography>
          </Grid>
        )}
      </Grid>
    </>
  );
}
