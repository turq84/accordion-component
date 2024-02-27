import styled from '@emotion/styled';

import { Stack } from '../components/uikit';
import Layout from '../components/Layout';
import Accordion from '../components/Accordion';
import { accordionContent } from '../data/accordionContent';

const Home = () => {
  return (
    <Layout>
      <Container axis='y' spacing='medium' align='center'>
        {accordionContent.map(({ header, content }, index) => (
          <Accordion key={index} title={header}>
            {content}
          </Accordion>
        ))}
      </Container>
    </Layout>
  );
};

export default Home;

const Container = styled(Stack)`
  width: 700px;
  margin: auto;
`;
