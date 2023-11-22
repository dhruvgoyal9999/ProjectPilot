import styled from 'styled-components';

const FeaturesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
   background-color: #FFFFFF;
  padding-bottom: 200px;
  margin-top: 0px;
  background: #FFFFFF;

@media (max-width: 768px) {
    padding-bottom: 100px;
    margin-top: 0px;
    

  }
`;

const FeaturesTitle = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 800;
  margin-top: 20px;
    color: #2b7bb6;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 36px;
    }
`;


const FeatureDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight:600px;
  width: 100%;
  max-width: 700px;
  text-align: center;
  color: #13cecf;
  margin-bottom: 80px;
  @media (max-width: 768px) {
    width: 100%;
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
  background-color: #06a2fc;
  border: 0.1px solid #306EE8;
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

  @media (max-width: 728px)
  {
    padding: 20px 20px;
  }

`;
const FeatureTitle = styled.div`
  font-size: 20px;
  color: #FFFFFF;
  margin-bottom: 10px;
  margin-top: 16px;
  font-weight: 600;
`;

const FeatureCardDescription = styled.div`
  font-size: 16px;
  line-height: 1;
  color: #FFFFFF;
`;

const featuresData = [{  title: 'Project Planning', description: 'Streamline task organization and resource allocation for clear project goals and efficient execution.', },
{ title: 'Project Management', description: 'Enhance communication and cooperation among team members for increased productivity and collective problem-solving.', },
{  title: 'Collabaration of Teams', description: 'Efficiently coordinate tasks, resources, and timelines to ensure smooth project workflows.', },
{  title: 'Project Tracking', description: 'Implement real-time tracking for milestones, tasks, and resource utilization, aiding informed decision-making.', },];

const Features = () => {
  return (
    <FeaturesWrapper id="features">
      <FeaturesTitle>Services</FeaturesTitle>
      <FeatureDescription>Explore how our services-based project simplifies project management and effortlessly facilitates collaboration.</FeatureDescription>
      <Content>
        <FeaturesContainer>
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} >
              <div>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureCardDescription>{feature.description}</FeatureCardDescription>
              </div>
              
            </FeatureCard>
          ))}
        </FeaturesContainer>
          

      </Content>
    </FeaturesWrapper>
  );
};

export default Features;