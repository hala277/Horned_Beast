import React from 'react';
import HornedBeast from './HornedBeast'
import displayImg from './assest.json'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


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
          {displayImg.map((element, index) => {
            return (
            <HornedBeast
            model={this.props.model}
              selectedBeast={element.displayImg}
               key={index}
               title={element.title} 
               image_url={element.image_url} 
               description={element.description}
                keyword={element.keyword} 
                horns={element.horns} 
                openModal = {this.props.openModal}
                />)
          })}
        </Row>
       </Card>
      </div>
    );
  }
}





export default Main;
