import './App.css';
import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import SelectedBeast from './components/SelectedBeast'
import assest from './components/assest.json'
import Form from './components/Form'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
     
      selectedBeast: assest[0],
      title: " ",
      image_url: " ",
      description: " ",
       horns: assest,
       Form:0,
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

    hornsForm = (horns) =>
    this.setState({
      SelectedBeast:this.hornsForm,
      horns : Number(horns),
      isOpen: true,
      horns:horns,
    });
    
    // check again
    // hornsFilter = (arr,numberOfHorns ) => {
      // let formArray =[];
      // formArray =
      //  assest.filter(element => element.horns == numberOfHorns)
      // console.log(formArray)

      // this.setState({
      //   horns:formArray,

      // })
    //   if (numberOfHorns === 0){
    //     return arr;
    //   }
    //   else{
    //     return arr.filter(element => element.horns === numberOfHorns)
    //   }
    // }  

  openModal = (slectbeast) => this.setState({ isOpen: true, SelectedBeast: assest[slectbeast] });
  closeModal = () => this.setState({ isOpen: false });
  render() {
    return (
      <>
        <Header />
       
        <Form  hornsFilter = {this.hornsFilter}/>
        <Main asses={this.state.horns} openModal={this.openModal} model = {this.model} />
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
