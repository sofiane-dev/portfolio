import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMirsad from '../public/images/works/mirsad.png'
import thumbMaktaba from '../public/images/works/maktaba.png'
import thumbCvlj from '../public/images/works/cvlj.png'

const Works = () => (
  <Layout title='Works'>
    <Container pt={14}>
      <Heading as='h3' fontSize={20} mb={4}>
        Some of my works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id='mirsad' title='Mirsad' thumbnail={thumbMirsad}>
            A solution for real-time monitoring.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id='maktaba' title='Maktaba' thumbnail={thumbMaktaba}>
            A library digitization solution
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id='cvlj' title='Cvlj' thumbnail={thumbCvlj}>
            A summer camp management application 
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
