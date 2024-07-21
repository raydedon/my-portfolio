'use client';
import { Avatar, Box, Container, Typography } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

const Description = ['Animesh Ray.', 'a Javascript enthusiast.', 'a Father to two daughters.', 'a Story teller.']
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

                <Avatar alt="Animesh Ray" src="/dp.jpeg" sx={{ width: 200, height: 200 }} />
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
                <Typography variant="h5" sx={{ textAlign: 'center' }}>A software developer with enterprenuer at heart. Expertise in several technologies, including NodeJS, ReactJS, NestJS, MySQL, and MongoDB, and can build apps while enjoying my passion for motorcycles.</Typography>
            </Container>
        </Box>
    );
}

export default Profile;
