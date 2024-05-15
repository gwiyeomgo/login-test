import styled from '@emotion/styled';
const Container = styled.div `
 margin: 15px;
 border: 1px solid #bcbcbc;
 background-color: ${({ backgroundColor }) => (backgroundColor !== "" ? backgroundColor : 'white')};
  border-radius: 5px;
`;
const Image = styled.img `
width:100%;
cursor: pointer;
border-radius: 5px;
content:url(${({ url }) => url});
background-color: ${({ backgroundColor }) => (backgroundColor !== "" ? backgroundColor : 'white')};

`;
export const BigImageButton = ({ backgroundColor, url, onClick }) => {
    return React.createElement(Container, { backgroundColor: backgroundColor },
        React.createElement(Image, { backgroundColor: backgroundColor, url: url, onClick: onClick }));
};
