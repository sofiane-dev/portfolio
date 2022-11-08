import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Cvlj'>
    <Container>
      <Title>
        Cvlj <Badge>2021</Badge>
      </Title>
      <P>
        A Web application used by the ministery of Youth and Sports to manage
        the summer camps they organize.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Java, JasperReports, Spring(Boot, Data, Security), JWT, PostgreSQL,
            NextJs, React, Context API, ChartJs, TailwindCSS
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
