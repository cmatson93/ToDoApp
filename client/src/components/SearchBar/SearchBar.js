import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import { Input } from 'reactstrap';
import { Button } from 'reactstrap';
import "./SearchBar.css";


export default class SearchBar extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	churches: []
    };
  	// props.platformQuery()
	// 		.then(res => this.setState({ platforms: res.data }))
  	// 	.catch(err => console.log(err));
  }

	render() {
		return (
			<div className='searchbar '>
                <Col className='col-search-location'>
                    <Input
                        className="location-seach-input"
                        placeholder='Search Location'
                        onChange={this.props.inputHandler}
                        name='location'
                        value={this.props.location}
                    />
                </Col>
                <Col className='col-search-btn'>
                    <Button className="btn" onClick={this.props.buttonHandler}>Search</Button>
                </Col>
			</div>
		);
	}
}