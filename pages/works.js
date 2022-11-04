import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMirsad from '../public/images/works/mirsad.png'

const Works = () => (
  <Layout title='Works'>
    <Container pt={14}>
      <Heading as='h3' fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id='mirsad' title='Mirsad' thumbnail={thumbMirsad}>
            A solution for real-time monitoring.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
