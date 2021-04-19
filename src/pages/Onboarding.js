import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import '../styles/onboarding.css';

const Onboarding = () => {
  return (
    <Container className='innerContainer'>
      <Nav
        activeKey='/Onboarding'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href='/Onboarding' className='navLink'>
            Adolfo Moyano
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1' className='navLink'>
            Acerca de Mí
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2' className='navLink'>
            Mi Trabajo
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-3' className='navLink'>
            Mis Emprendimientos
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <h2 className='slideInText'>Full Stack Developer</h2>
    </Container>
  );
};

export default Onboarding;
