"use client";

import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Admin Guny
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
