import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class FormH extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Form: 0,
    };
  }

  hornsForm = (event) => {
    event.preventDefault();
    this.props.horn(event.target.hornsname.value);
    this.setState({
      horns: event.target.hornsname.value,
    });
  };

  openForm = () => {
    this.props.hornsForm(this.props.horns);
  };
  render() {
    return (
      <>
        <Form onSubmit={this.hornsForm}>
          <FloatingLabel label="Works with selects">
            <Form.Select aria-label="Default select example" name="hornsname">
              <option>chose your fav horns</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="100">100</option>
            </Form.Select>
            {/* <Button

              variant="primary"
              type="submit"
            >
              Submit
            </Button> */}
          </FloatingLabel>
        </Form>
      </>
    );
  }
}
export default FormH;
