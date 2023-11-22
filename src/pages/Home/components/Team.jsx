import React from "react";
import styled from "styled-components";
import TeamMember from "./TeamMember";

const TeamWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0px 100px 0px;   
  background-color: hsl(40, 35%, 90%);  
  
 
  
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 36px;
  }
  color: hsl(200, 120%, 50%);
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight:600px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: blue;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;


const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
  max-width: 1200px;
  color: hsl(200, 120%, 50%);
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Team = () => {
  const member = [{
    name: "Rahul Naha",
    title: "Full-Stack Developer",
    bio: "Registration Number 21BCE3162"
  },

  {
    name: "DHRUV",
    title: "Full-Stack Developer",
    bio: "Registration Number : 21BCE0865 "
  },
  {
    name: "SRAJAL AGARWAL ",
    title: "Full-Stack Developer",
    bio: "Registration Number : 21BCE3392 "
  },
  {
    name: "Reddipalli Satya Sai Saandeep",
    title: "Full-Stack Developer",
    bio: "Registration Number : 21BCE2885"
  },
  {
    name: "Prakhar Vishwas",
    title: "Full-Stack Developer",
    bio: "Registration Number : 21BCE3163"
  }
];
  return (
    <TeamWrapper id="team">
      <Title style>TEAM MEMBERS</Title>
      <br></br>
      <br></br>
      <TeamContainer>
        {member.map((member, index) => (
          <TeamMember key={index} name={member.name} title={member.title} bio={member.bio} />
        ))}
      </TeamContainer>

    </TeamWrapper>
  );
};

export default Team;