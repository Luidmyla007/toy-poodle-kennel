import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Title, Footer } from './Layout.styled';
import { Loader } from '../../components/Loader/Loader';
import {  TbDog} from "react-icons/tb";

export const Layout = () => {
  return (
    <Container>      
          <Header><Title><TbDog />Max&Grace</Title></Header>          
      <Footer><h3>© All rights reserved</h3></Footer>
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>      
    </Container>
  );
};