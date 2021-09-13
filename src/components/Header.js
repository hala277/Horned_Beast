import React from 'react';
import Navbar from 'react-bootstrap/Navbar'


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home"> <h1>Horned Beasts </h1></Navbar.Brand>
        </Navbar>

      </>
    );
  }
}

export default Header;

