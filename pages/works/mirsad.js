import {
  Container,
  Badge,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Mirsad'>
    <Container>
      <Title>
        Mirsad <Badge>2016</Badge>
      </Title>
      <P>
        A solution for real-time monitoring in the fields: Agriculture, Health,
        Industry, Home automation.It provides an advanced level of end-to-end
        data encryption to avoid any injection of data into a sensitive
        decision-making system.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, Java EE, Javascript, JSP, JSTL, HTML, CSS, MySQL, C</span>
        </ListItem>
        <ListItem>
          <Meta>Hardware</Meta>
          <span>Atmega328P, SIM800, NEO-6M</span>
        </ListItem>
      </List>
      <WorkImage src='/images/works/mirsad_01.jpg' alt='Mirsad' />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
