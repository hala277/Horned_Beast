import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">  <h3>author : Hala Al-masharfeh </h3></Navbar.Brand>
        </Navbar>

      </>
    );
  }
}

export default Footer;