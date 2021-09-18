import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'



class Form extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            hornsData: this.props.displayImg,
           hornsNumber :0,
          
        }
    }
    // its define but never used !! 

    hornsFilter = (element) => {
        let horns1 = this.props.horns;
        let hornsArray = this.props.displayImg.filter(element2 =>{
            if(element === 0){
                return element2;
            }
            else {
               
                if(this.props.horns.element2 === element){
                    return true;
                }
                else{
                    return false;
                }
            }
        });
        
        return hornsArray;
    }
    // this.props.hornsFilter(event.target.horns.value)
    hornsForm = async(event) =>{
        event.preventDefault();
        await this.setState({
            hornsNumber: event.target.value,
            hornsData : this.hornsFilter(Number(event.target.value))
        });
    //   console.log(this.state.horns);
        
    }

    openForm = () =>{
        this.props.hornsForm(this.props.horns)
       
    }
    render() {
        return (
            <>
                 
                <FloatingLabel controlId="horns" >
                    <form.Select name= "horns" aria-label="Default select example" onChange={this.hornsForm}  >
                        {/* there is some thing related to filter in onchange */}
                        <option>chose your fav horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>
                        
                    </form.Select>
                    {/* <Button type = "onClick" >  </Button> */}
                </FloatingLabel>
               
               
               
            </>
        );
    }
}
export default Form
