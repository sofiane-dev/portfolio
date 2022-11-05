import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoLogoLinkedin,IoLogoFacebook } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW='xl' mt='8'>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as='h2' variant='page-title'>
            Sofiane Benmahiddine
          </Heading>
          <p>Software Engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign='center'
        >
          <Box
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            w='100px'
            h='100px'
            display='inline-block'
            borderRadius='full'
            overflow='hidden'
          >
            <ProfileImage
              src='/images/sofiane.png'
              alt='Profile image'
              borderRadius='full'
              width='100%'
              height='100%'
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as='h3' variant='section-title'>
          Work
        </Heading>
        <Paragraph>
          I&apos; am a full-stack software engineer based in Algeria with a passion
          for building digital solutions. I have a knack for all things,
          launching products, from planning and designing all the way to solving
          real-life problems with code.
        </Paragraph>
        <Box align='center' my={4}>
          <NextLink href='/works' passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme='cyan'>
              Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as='h3' variant='section-title'>
          Bio
        </Heading>
        <BioSection>
          <BioYear>1991</BioYear>
          Born in Setif, Algeria.
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Completed the Master&apos;s Degree in Ferhat Abbas University at The
          Institute of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Worked at{' '}
          <Link href='https://en.hdec.kr/en/main.aspx' isExternal>
            Hyundai Engineering And Construction
          </Link>{' '}
          as an IT Engineer
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at{' '}
          <Link href='https://icosnet.com.dz/' isExternal>
            Icosnet
          </Link>{' '}
          as a FreeLance IOT Engineer
        </BioSection>
        <BioSection>
          <BioYear>2016 to Present</BioYear>
          Working as a Software Engineer at{' '}
          <Link href='http://spintechs.net/' isExternal>
            SpinTechs
          </Link>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          I ♥
        </Heading>
        <Paragraph>Music, Books , Video Games, Mangas</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as='h3' variant='section-title'>
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href='https://github.com/sofiane-dev' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<IoLogoGithub />}
              >
                @sofiane-dev
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href='https://www.linkedin.com/in/sbenmahiddine/' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<IoLogoLinkedin/>}
              >
                @sofiane
              </Button>
            </Link>
          </ListItem>

          <ListItem>
            <Link href='https://facebook.com/sofiene.Benmahiddine/' target='_blank'>
              <Button
                variant='ghost'
                colorScheme='teal'
                leftIcon={<IoLogoFacebook/>}
              >
                @sofiane
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
