import React from 'react';
import HornedBeast from './HornedBeast'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
 import displayImg from './assest.json'


class Main extends React.Component {

//   hornsFilter = (arr,numberOfHorns ) => {
//      if (numberOfHorns === 0){
//     return arr;
//   }
//   else{
//     return arr.filter(element => element.horns === numberOfHorns)
//   }
// }  


   
  render() {
    
    return (

      <div>


       <Card>
       <Row xs={1} md={4} className="g-4">
          {displayImg.map((element1, index1) => {
            return (
            <HornedBeast
            model={this.props.model}
            Form = {this.props.Form}
              selectedBeast={element1.displayImg}
               key={index1}
               title={element1.title} 
               image_url={element1.image_url} 
               description={element1.description}
                keyword={element1.keyword} 
                horns={element1.horns} 
                openModal = {this.props.openModal}
                />);
          })}
        </Row>
       </Card>
      </div>
    );
  }
}





export default Main;
