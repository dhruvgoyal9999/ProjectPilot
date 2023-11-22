// TaskCard.js

import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

const TableItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  gap: 8px;
  border-radius: 8px;
  border: 1.8px solid ${({ theme }) => theme.soft + "99"};
  background-color: ${({ theme, completed }) =>
    completed ? theme.bgDark : theme.card};
  color: ${({ theme }) => (completed ? theme.soft2 : theme.text)};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.bgDark};
  }
`;

const TaskCard = ({ item, index, members }) => {
  const [completed, setCompleted] = useState(item.status === "Completed");

  const completeTask = async () => {
    try {
      const response = await fetch(`/updateTaskStatus/${item._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Completed" }),
      });

      console.log("Response:", response);

      if (response.ok) {
        // Update the completion status locally
        setCompleted(!completed);
      } else {
        console.error("Failed to update task status");
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
    {tasks.map((item, index) => (
      <TaskCard key={item.id} item={item} index={index} members={members} />
    ))}
    
  };

  return (
    <div>
      <TableItem completed={completed}>
        <div>{index + 1}</div>
        <div>{item.title}</div>
        <div>{item.startDate}</div>
        <div>{item.deadline}</div>
        <div>{item.status}</div>
        <div
          style={{
            textAlign: "center",
            width: "20%",
            fontSize: "14px",
            fontWeight: "800",
          }}
          completed={completed}
        >
          {item.members
            .map(
              (memberId) =>
                members.find((member) => member.id === memberId)?.name
            )
            .join(", ")}
        </div>
        {!completed && (
          <IconButton onClick={completeTask}>
            <CheckCircleOutline />
          </IconButton>
        )}
      </TableItem>
    </div>
    
  );
};

export default TaskCard;
