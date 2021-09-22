import './App.css';
import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast'
import data from './components/assest.json'
import FormH from './components/FormH'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
     
      selectedBeast: data[0],
      title: " ",
      image_url: " ",
      description: " ",
       data: data,
       FormHorns:0,
    };
   
  }
  
  


  model = (title, image_url, description,horns) =>
    this.setState({
      selectedBeast :this.model,
      title: title,
      image_url: image_url,
      description: description,
      horns: horns,
      isOpen: true,

    });

    hornsForm = (horns) =>{
    console.log("string from app",horns);
    let formArray= [];
    formArray = data.filter((value) => value.horns == horns);
   

    this.setState({
      data:formArray

    })
    
    };
    
    openModal = (slectbeast) => {this.setState({ isOpen: true, selectedBeast: data[slectbeast] });}
  closeModal = () => this.setState({ isOpen: false });

    
  

  // Form =(horns) => {
  //   this.setState({
  //     selectedBeast: this.FormHorns,
  //     Form :Number(horns),
  //     horns:horns,
  //     isOpen:true,
  //   })
  // }
  render() {
    return (
      <>
        <Header />
       
        <FormH  hornsFilter = {this.hornsFilter} hornsForm = {this.hornsForm}/>
        <br></br>
        <br></br>
        <Main assest={this.state.data} openModal={this.openModal} model = {this.model} FormHorns ={this.FormHorns}/>
        <Footer />
        <SelectedBeast
          isOpen={this.state.isOpen} 
          model = {this.model}
          closeModal={this.closeModal}
          selectedBeast={this.state.selectedBeast}
          title={this.state.title}
          image_url={this.state.image_url}
          description={this.state.description}
          horns = {this.props.horns}
        />
       
       
      </>
    );
  }
}
export default App;
