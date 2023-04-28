
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(http://mrtaba.ir/image/bg2.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top 10px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 10px;
    }
`;

const Text = styled(Typography)`
    color: #878789;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Thanks for Contact us</Typography>    
                <Text variant="h5">
                    Visit my Instagram and send message anytime without any hasitation: 
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/rahul_masterg/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        <br/> Send me an Email:
                        <Link href="mailto:rahulkumar92113012@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;