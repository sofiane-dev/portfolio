import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='IcosHouse'>
    <Container>
      <Title>
        Icoshouse <Badge>2016</Badge>
      </Title>
      <P>Smart home project for ICOSNET company</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Java, Java EE, MQTT, OpenHAB, C, Firmata, Javascript, NodeJs,
            Node-RED
          </span>
        </ListItem>
        <ListItem>
          <Meta>Hardware</Meta>
          <span>ESP8266, Raspberry Pi</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
