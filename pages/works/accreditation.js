import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title='Accréditation'>
    <Container>
      <Title>
        Accréditation <Badge>2021</Badge>
      </Title>
      <P>
        A platform used during the Mediterranean Games of Oran 2022 for the
        Ministry of Youth and Sports. Allowing the registration and management
        of various administrators, organizers, as well as the journalists
        participating in this event.
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
      <WorkImage src='/images/works/accreditation_01.png' alt='Accreditation' />
      <WorkImage src='/images/works/accreditation_02.png' alt='Accreditation' />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
