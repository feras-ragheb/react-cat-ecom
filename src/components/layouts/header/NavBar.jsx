import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from '../modal';

function NavBar() {

    const [showModal, setShowModal] = useState(false);
    const [ dataModal , setDataModal] = useState("");
    const [ showUser , setShowUser] = useState(false);

    const ModalHandler = (myData)=>{
        setShowModal((prev) => !prev);
        setDataModal(myData)

    }

    const UserHandler=()=>{

        setShowUser((prev) => !prev);


    }




  return (
<>


    <Modal show={showModal} close={ModalHandler}>
        { dataModal }
    </Modal>
    
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">
            <img src="logo.png" style={{ width: '65px'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#" onClick={ ()=> UserHandler()}>
             { (!showUser) ? 'Login' : 'Logout' } 
            </Nav.Link>
          </Nav>  
          <Nav>
          {
          
          showUser === true ? (
                <Nav.Link href="#deets">
                    {/* <img src="heart.png" width={38} onClick={() => ModalHandler("Fav")} /> */}
                </Nav.Link>
                 ) : null
         }

            <Nav.Link eventKey={2} href="#">
               {/* <img src="cart.png" style={{ width: '35px'}} onClick={()=> ModalHandler("Cart") } /> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
  
  );
}

export default NavBar;