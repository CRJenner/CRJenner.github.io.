import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar ({ onLocationChange, onDateChange, onCandidateChange }) {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Exam list</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="navbar-dark">
          <Nav>
            <NavDropdown
              id="nav-dropdown-location"
              title="Filter location"
              menuVariant="dark"
              onSelect={(location) => onLocationChange(location)}
            >
              <NavDropdown.Item eventKey="Sydney">Sydney</NavDropdown.Item>
              <NavDropdown.Item eventKey="London">London</NavDropdown.Item>
              <NavDropdown.Item eventKey="Berlin">Berlin</NavDropdown.Item>
              <NavDropdown.Item eventKey="Woking">Woking</NavDropdown.Item>
              <NavDropdown.Item eventKey="Milan">Milan</NavDropdown.Item>
              <NavDropdown.Item eventKey="Leeds">Leeds</NavDropdown.Item>
              <NavDropdown.Item eventKey="">clear location</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-candidate"
              title="Filter candidate"
              menuVariant="dark"
              onSelect={(candidate) => onCandidateChange(candidate)}
            >
              <NavDropdown.Item eventKey="Wilmers">Wilmers</NavDropdown.Item>
              <NavDropdown.Item eventKey="Mateos">Mateos</NavDropdown.Item>
              <NavDropdown.Item eventKey="Ward">Ward</NavDropdown.Item>
              <NavDropdown.Item eventKey="Donnelly">Donnelly</NavDropdown.Item>
              <NavDropdown.Item eventKey="">clear candidate</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-date"
              title="Filter Date"
              menuVariant="dark"
              onSelect={(date) => onDateChange(date)}
            >
              <NavDropdown.Item eventKey="05/05/2023, 15:30:00">5th May 2023</NavDropdown.Item>
              <NavDropdown.Item eventKey="17/06/2023, 17:30:00">17th June 2023</NavDropdown.Item>
              <NavDropdown.Item eventKey="25/08/2023, 10:30:00">25th August 2023</NavDropdown.Item>
              <NavDropdown.Item eventKey="">clear date</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <NavDropdown
              id="nav-dropdown-clear"
              title="Clear filters"
              menuVariant="dark">
              <NavDropdown.Item eventKey="" onClick={() => {
                onLocationChange(null);
                onDateChange(null);
                onCandidateChange(null);
            }}>Clear all filters</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar