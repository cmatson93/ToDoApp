import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    church: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/churches/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.props)
    // console.log(this.props)
    API.getChurch(this.props.match.params.id)
      .then(res => this.setState({ church: res.data }))
      // , console.log(res.data)
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <h1>
         {this.state.church.name} , {this.state.church.location}
        </h1>
        <h2>Things to know</h2>
        <h3>
          {this.state.church.summary}
        </h3>
      </Container>
    );
  }
}

export default Detail;
