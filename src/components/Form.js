import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import form from 'react-bootstrap/Form'


class Form extends React.Component {
  
    constructor(props){
        super(props);
        this.state = {
            horns:"",
        };
    }
    hornsForm = async (event) =>{
        event.preventDefault();
        await this.setState({
            horns: event.target.horns.value,
        });
      console.log("horns",this.state.horns);
        
    }
    render() {
        return (
            <>
          
                <FloatingLabel controlId="floatingSelect" >
                    <form.Select name= "horns" aria-label="Floating label select example">
                        <option>chose your fav horns</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">100</option>

                    </form.Select>
                </FloatingLabel>
            </>
        );
    }
}
export default Form
