import React from "react";
import styled from "styled-components";

const TeamMemberContainer = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  background-color:  hsl(200, 120%, 50%);
  box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
  1px 2px 4px 0px rgba(0,255,255,0.7),
  2px 4px 8px 0px rgba(0,255,255,0.7),
  2px 4px 16px 0px rgba(0,255,255,0.7);
  border: 1px solid rgba(252, 3, 111, 0.3);
  padding: 24px;
  border-radius: 12px;
  gap: 8px;
  cursor: pointer;
  @media (max-width: 925px) {
    width: 300px;
  }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
`;

const TeamMemberData = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 4px;
`;



const TeamMemberName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white};
`;

const TeamMemberTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white};
`;

const TeamMemberBio = styled.p`
    font-size: 16px;
    line-height: 1.5;
  color: white};
`;

const TeamMember = ({  name, title, bio }) => {
    return (
        <TeamMemberContainer>
            <Header>
                
                <TeamMemberData>
                    <TeamMemberName>{name}</TeamMemberName>
                    <TeamMemberTitle>{title}</TeamMemberTitle>
                </TeamMemberData>
            </Header>
            <TeamMemberBio>{bio}</TeamMemberBio>
        </TeamMemberContainer>
    );
};

export default TeamMember;