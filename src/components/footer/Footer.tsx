import {FooterContainer, TagContainer, CopyrightContainer} from "./Footer.styled";
import { Container, Grow, Grid, Button, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
    return (
        <FooterContainer>
            <h1>Footer</h1>
            <TagContainer>
                <p>Tag 1</p>
                <p>Tag 2</p>
                <p>Tag 3</p>
                <p>Tag 4</p>
            </TagContainer>
            <CopyrightContainer>
                <Typography variant="subtitle2">
                Made with{' '}
                <FavoriteIcon fontSize="small" color="secondary" style={{ padding: '0 0.25rem' }} /> by{' '}
                <a href="https://gozderapatryk.pl" style={{ marginLeft: '0.25rem' }}>
                gozderapatryk.pl
                </a>
            </Typography>
          </CopyrightContainer>
        </FooterContainer>
    );
}

export default Footer;