// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header'
// import Main from './components/Main'
import Footer from './components/Footer'
import Add from './components/Add-Img'

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>

         <Add/>
        <Footer/>
      </>
    )
  }
}
export default App;
