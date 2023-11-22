// WorkCards.js

import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const WorkCards = ({ status, work, completeWork }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {work.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {work.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status}
        </Typography>
        <IconButton
          onClick={() => completeWork(work._id)}
          disabled={status === "Completed"} // Disable the button if the status is already completed
        >
          <CheckCircleOutline />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default WorkCards;
