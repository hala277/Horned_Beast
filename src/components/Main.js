import React from 'react';
import HornedBeast from './HornedBeast'
import displayImg from './assest.json'
import Row from 'react-bootstrap/Row'


class Main extends React.Component {


  render() {
    return (


      <div>
        <Row xs={1} md={4} className="g-4">
          {displayImg.map((element, index) => {
            return (<HornedBeast key={index} title={element.title} image_url={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns} />)
          })}
        </Row>
      </div>

    );
  }
}






export default Main;