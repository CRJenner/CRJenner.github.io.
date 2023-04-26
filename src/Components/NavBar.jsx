import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar () {
    return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">Exam list</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark" />
            <Navbar.Collapse id="navbar-dark">
              <Nav>
                <NavDropdown
                  id="nav-dropdown"
                  title="Filter location"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#">Sydney</NavDropdown.Item>
                  <NavDropdown.Item href="#">London </NavDropdown.Item>
                  <NavDropdown.Item href="#">Athens</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown"
                  title="Filter candidate"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#">Wilmers</NavDropdown.Item>
                  <NavDropdown.Item href="#">Bob </NavDropdown.Item>
                  <NavDropdown.Item href="#">Dave</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown
                  id="nav-dropdown"
                  title="Filter Date"
                  menuVariant="dark"
                >
                  <NavDropdown.Item href="#">5th May</NavDropdown.Item>
                  <NavDropdown.Item href="#">18th June </NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
export default NavBar