import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Maktaba'>
    <Container>
      <Title>
        Maktaba <Badge>2020</Badge>
      </Title>
      <P>
        A library digitization solution. Based on RFID technology and deployed
        in more than 10 cities in Algeria.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Java, MariaDB, Spring, React, Material UI, Docker</span>
        </ListItem>
      </List>
      <WorkImage src='/images/works/maktaba_01.png' alt='Maktaba' />
      <WorkImage src='/images/works/maktaba_02.png' alt='Maktaba' />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
