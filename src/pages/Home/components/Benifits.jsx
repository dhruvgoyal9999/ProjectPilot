import styled from "styled-components";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ForumIcon from "@mui/icons-material/Forum";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HeroBgAnimation from "../components/HeroBgAnimation";
import Diversity3Icon from "@mui/icons-material/Diversity3";

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181622;
  padding-bottom: 150px;
  margin-top: -90px;
  @media (max-width: 768px) {
    padding-bottom: 100px;
    margin-top: -50px;
  }
  background: #07a3fc;
`;

const Number = styled.div`
  width: 70px;
  height: 70px;
  font-size: 36px;
  font-weight: 800;
  color: #854ce6;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #854ce616;
  border: 6px solid #854ce6;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 32px;
  }
`;

const FeaturesTitle = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
  color: #ffffff;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 36px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 600px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: #ffffff;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 90%;
    font-size: 16px;
    margin-bottom: 60px;
  }
`;

const Content = styled.div`
  position: relative;
`;

const FeaturesContainer = styled.div`
  position: relative;
  z-index: 1;
  grid-template-columns: repeat(2, 1fr);
  display: grid;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;

const FeatureCard = styled.div`
  width: 350px;
  height: 190px;
  position: relative;
  background-color: #ffffff;
  border: 0.1px solid #854ce6;
  border-radius: 16px;
  padding: 24px 42px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  transition: transform 0.2s ease-in-out;
  display: flex;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 925px) {
    width: 300px;
  }

  @media (max-width: 728px) {
    padding: 20px 20px;
  }
`;

const FeatureTitle = styled.div`
  font-size: 20px;
  color: #07a3fc;
  margin-bottom: 10px;
  margin-top: 16px;
  font-weight: 600;
`;

const FeatureCardDescription = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: hsl(246, 6%, 65%);
`;

const featuresData = [
  {
    title: "Increased Productivity",
    description:
      "Manage your individual projects and team members' assignments with care while monitoring results.",
  },
  {
    title: "Improved Communication",
    description:
      "Clear communication will keep everyone in touch and minimize miscommunication.",
  },
  {
    title: "Better Project Outcomes",
    description:
      "Make wise choices and monitor developments to guarantee the project's accomplishment.",
  },
  {
    title: "Networking Opportunities",
    description:
      "To increase your network and create worthwhile connections, get in touch and work together with other developers and professionals in your field.",
  },
];

const Benefits = () => {
  return (
    <FeaturesWrapper id="benefits">
      <FeaturesTitle>Benefits</FeaturesTitle>
      <FeatureDescription>
        Discover the many benefits of using our app to manage your personal and
        team projects.
      </FeatureDescription>
      <Content>
        {/* <HeroBgAnimation style={{ position: 'absolute', top: 20, left: 20, width: '80%', height: '80%', zIndex: -1 }} /> */}
        <FeaturesContainer>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index}>
              <div style={{ flex: 1 }}>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureCardDescription>
                  {feature.description}
                </FeatureCardDescription>
              </div>
            </FeatureCard>
          ))}
        </FeaturesContainer>
      </Content>
    </FeaturesWrapper>
  );
};

export default Benefits;
