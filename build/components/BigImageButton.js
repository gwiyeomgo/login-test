import { jsx as _jsx } from "@emotion/react/jsx-runtime";
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
    return _jsx(Container, { backgroundColor: backgroundColor, children: _jsx(Image, { backgroundColor: backgroundColor, url: url, onClick: onClick }) });
};
