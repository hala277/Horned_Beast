import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'



class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0
    }
  }

  increaseNumberOfClicks = () => {
    this.setState({
      numOfClicks: this.state.numOfClicks + 1
    })
  }
  render() {
    return (
      <div>



        <Col>

          <Card style={{ width: '18rem' }}>
            <Card.Img className='cardCat' variant="top" src={this.props.image_url} alt={this.props.keyword} style={{ height: "250px" }} />
            <Card.Body>
              <Card.Title>{this.props.horns}</Card.Title>
              <Card.Text>
                Number of Pets {this.state.numOfClicks}
              </Card.Text>
              <Button onClick={this.increaseNumberOfClicks} variant="primary">vote here</Button>
            </Card.Body>
          </Card>
        </Col>
      </div>


    );
  }
}

export default HornedBeast;