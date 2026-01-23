'use client';
import { Avatar, Box, Button, Container, Link, Typography } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const Description = ['Animesh Ray.', 'a Javascript enthusiast.', 'Staff software engineer.', 'a Father to two daughters.', 'a Story teller.']
const Profile = () => {
    return (
        <Box>
            <Container maxWidth="md" sx={{
                height: '100vh',
                display: 'grid',
                gridTemplateColumns: '1fr',
                justifyItems: 'center',
                alignItems: 'center',
                alignContent: 'center',
                gridGap: { xs: 24, md: 32 }
            }}>

                <Avatar alt="Animesh Ray" src="/images/dp.jpeg" sx={{ width: 200, height: 200 }} />
                <Typography variant="h3" sx={{ textAlign: 'center' }}>Hi, I am&nbsp;&nbsp;
                    <Typography sx={{ color: 'green', display: { xs: 'block', md: 'inline' } }} variant="inherit">
                        <Typewriter
                            words={Description}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}/>
                    </Typography>
                </Typography>
                <Typography variant="h5" sx={{ textAlign: 'center', textWrap: 'balance' }}>I am currently spearheading the role of a Staff software engineer at, <b>Spotnana</b>, India. The company promises to revolutionize business travel. In my <b>15 years of experience</b> in mobile and web development, I have always worked in startups to build meaningful software products.</Typography>
                <Box sx={{ display: 'flex', columnGap: '20px' }}>
                    <Link href="https://www.instagram.com/animesh6127/" rel="noreferrer" target="_blank" sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <InstagramIcon fontSize="large"/>
                    </Link>
                    <Link href="https://x.com/raydedon" rel="noreferrer" target="_blank" sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <XIcon fontSize="large"/>
                    </Link>
                    <Link href="https://github.com/raydedon" rel="noreferrer" target="_blank" sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <GitHubIcon fontSize="large"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/animesh-ray-wins/" rel="noreferrer" target="_blank" sx={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
                        <LinkedInIcon fontSize="large"/>
                    </Link>
                    <Button variant="contained" startIcon={<ArticleIcon />} href="/assets/Animesh_Ray_Resume.pdf" rel="noreferrer" target="_blank">Resume</Button>
                </Box>
            </Container>
        </Box>
    );
}

export default Profile;
