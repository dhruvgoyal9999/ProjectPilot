import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  box-shadow: inset 0px 5px 10px 0px rgba(0, 0, 0, 0.7);
  
  background-color: hsl(200, 200%, 40%);
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: white};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: white};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: white};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: white};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo>ProjectPilot</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#features">Services</NavLink>
        <NavLink href="#benefits">Benefits</NavLink>
        <NavLink href="#team">Team</NavLink>
      </Nav>
      <Copyright>
        &copy; 2023 ProjectPilot. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;