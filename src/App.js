import './App.css';
import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast'
import assest from './components/assest.json'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
     
      selectedBeast: assest[0],
      title: " ",
      image_url: " ",
      description: " ",
    };
   
  }
   
  model = (title, image_url, description) =>
    this.setState({
      selectedBeast :this.model,
      title: title,
      image_url: image_url,
      description: description,
      isOpen: true,
    });
  openModal = (slectbeast) => this.setState({ isOpen: true, SelectedBeast: assest[slectbeast] });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    return (
      <>
        <Header />
        <Main asses={assest} openModal={this.openModal} model = {this.model} />
        <Footer />
        <SelectedBeast
          isOpen={this.state.isOpen} 
          model = {this.model}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}
          title={this.state.title}
          image_url={this.state.image_url}
          alt={this.state.keyword}
          description={this.state.description}
        />
       
      </>
    );
  }
}
export default App;
