import React from "react";
import { Container } from "@mui/material";

export default function Note({ children }) {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Container maxWidth="lg">{children}</Container>
    </main>
  );
}
