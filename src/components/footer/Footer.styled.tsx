import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    padding: 1rem;
    background-color: rgb(235, 195, 64);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    > .copyright: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  
    > .author: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
`;

export const TagContainer = styled.div`
  display: flex;
  padding: 1 rem;
  color: #fff;
`

export const CopyrightContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`