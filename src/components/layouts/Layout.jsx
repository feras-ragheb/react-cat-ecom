import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom';
import NavBar from './header/NavBar';

function Layout() {
  return (
    <>
    <NavBar />
    <Container>
    <Row>
        <Col>
           <Outlet />
        </Col>
      </Row>
      
    </Container>
    </>
     
  );
}

export default Layout;