import React from "react";
import { Card, CardContent, CardHeader, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import Typography from "@mui/material/Typography";

export default function CardNote({
  title,
  subTitle,
  note,
  archived,
  ArchiveAction,
  DeleteAction,
}) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={title.substring(0, 20) + "..."}
          subheader={subTitle}
          action={
            <Grid container>
              <Grid item>
                <IconButton onClick={ArchiveAction} color="textSecondary">
                  <ArchiveIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton onClick={DeleteAction} color="textSecondary">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          }
        />
        <CardContent>
          <Typography color="text.secondary" paragraph>
            {note}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
