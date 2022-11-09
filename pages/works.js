import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbMirsad from '../public/images/works/mirsad.png'
import thumbMaktaba from '../public/images/works/maktaba.png'
import thumbCvlj from '../public/images/works/cvlj.png'
import thumbAccreditation from '../public/images/works/accreditation.png'
import thumbEams from '../public/images/works/eams.png'
import thumbIcosHouse from '../public/images/works/icoshouse.png'
import thumbStockmetrics from '../public/images/works/stockmetrics.png'
import thumbCinegate from '../public/images/works/cinegate.png'

const Works = () => (
  <Layout title='Works'>
    <Container pt={14}>
      <Heading as='h3' fontSize={20} mb={4}>
        Some of my works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id='eams' title='Eams' thumbnail={thumbEams}>
            An event management platform Used in the Arab Summit 2022
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id='cvlj' title='Cvlj' thumbnail={thumbCvlj}>
            A summer camp management application
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id='accreditation'
            title='Accréditation'
            thumbnail={thumbAccreditation}
          >
            An HR management software used for the Mediterranean Games of Oran
            2022
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id='maktaba' title='Maktaba' thumbnail={thumbMaktaba}>
            A library digitization solution
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id='icoshouse'
            title='IcosHouse'
            thumbnail={thumbIcosHouse}
          >
            Smart Home Project
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
            id='cinegate'
            title='Cinegate'
            thumbnail={thumbCinegate}
          >
            Movie theater access management system
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id='stockmetrics'
            title='Stockmetrics'
            thumbnail={thumbStockmetrics}
          >
            Real-time warehouse monitoring
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
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
