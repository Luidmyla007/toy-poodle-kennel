import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
background-color: rgba(204, 224, 224, 1);
background-image: linear-gradient(to right, rgba(204, 224, 224, 1), rgba(48, 56, 56, 1));
margin-bottom: 30px;
padding-left: 100px;
padding-bottom: 20px;
padding-top: 5px;
 `;

 export const Title = styled.h1`
display: flex;
align-items: center;
gap: 5px;
color: rgba(9, 60, 61, 1);
padding-left: 10px;
font-size: 60px;
text-shadow: 2px 2px 4px rgba(129, 210, 214, 1);
letter-spacing: 1.7;
margin-bottom: 20px;
`;



export const Footer = styled.footer`
background-color: rgba(204, 224, 224, 1);
background-image: linear-gradient(to right, rgba(204, 224, 224, 1), rgba(48, 56, 56, 1));
margin-bottom: 30px;
padding-left: 100px;
padding-bottom: 20px;
padding-top: 5px;
 `;

