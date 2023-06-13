import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import { routes, Link } from '@redwoodjs/router'
import { NavItem } from 'react-bootstrap';

const Header = ({ title }: { title: string }) => {
  return (
    <Navbar style={{ backgroundColor: '#749DF5', }} expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-light" href={routes.home()}>Atividade 2 - FMCCII</Navbar.Brand>
        <NavItem>{ title }</NavItem>
        <NavItem>
          <Image src="\logo_ufcg.png" width={40} height={40}/>
        </NavItem>
      </Container>
    </Navbar>
  );
}

export default Header
