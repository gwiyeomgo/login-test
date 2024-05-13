import styled from '@emotion/styled';

import colors from '../constants/colors';


const Container = styled.div<{ backgroundColor ?: string }>`
 margin: 15px;
 border: 1px solid #bcbcbc;
 background-color: ${({ backgroundColor}) => (backgroundColor !==""? backgroundColor : 'white')};
  border-radius: 5px;
`;

const Image = styled.img<{ backgroundColor ?: string, url :string }>`
width:100%;
cursor: pointer;
border-radius: 5px;
content:url(${({url})=>url});
background-color: ${({ backgroundColor}) => (backgroundColor !==""? backgroundColor : 'white')};

`
type BigImageButtonProps = {
  backgroundColor ?: string
  url :string
  onClick :()=>void
}
export const BigImageButton = ({backgroundColor,url,onClick}:BigImageButtonProps)=>{
  return <Container backgroundColor={backgroundColor}>
    <Image backgroundColor={backgroundColor} url={url} onClick={onClick}/>
  </Container>
}

