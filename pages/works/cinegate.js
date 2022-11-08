import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Cinegate'>
    <Container>
      <Title>
        Cinegate <Badge>2019</Badge>
      </Title>
      <P>Access management project for movie theaters</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>| Java, Java EE, JSF, Primfaces,Apache Tomcat, MySQL</span>
        </ListItem>
        <ListItem>
          <Meta>Hardware</Meta>
          <span>Raspberry Pi</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
