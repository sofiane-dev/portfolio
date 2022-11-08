import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Stockmetrics'>
    <Container>
      <Title>
        Strockmetrics <Badge>2018</Badge>
      </Title>
      <P>Real-time monitoring project for food storage warehouses.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JAVA, INFLUXDB, GRAFANA, C,</span>
        </ListItem>
        <ListItem>
          <Meta>Hardware</Meta>
          <span>Atmega328P, ENC28J60</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
