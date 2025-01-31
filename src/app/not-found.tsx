import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh" textAlign="center">
      <Typography variant="h4" gutterBottom>
        존재하지 않는 페이지입니다.
      </Typography>
      <Button variant="contained" color="primary" component={Link} href="/">
        홈 이동
      </Button>
    </Box>
  );
}
