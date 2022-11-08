import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Accréditation'>
    <Container>
      <Title>
        EAMS <Badge>2022</Badge>
      </Title>
      <P>
        An event management platform for the Ministry of Interior. Used during
        the Arab Summit 2022. Employing RFID technology for visitor access
        control and advanced security algorithms for data exchange between the
        different modules.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Java, JasperReport, Spring(boot, data, security), JWT, PostgreSQL,
            NextJs, React, Context API, Chart JS, TailwindCSS, Docker, Docker
            Compose
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
