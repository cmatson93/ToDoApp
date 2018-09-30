import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import SearchBar from "../../components/SearchBar";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Churches extends Component {
    state = {
        churches: [],
        name: "",
        location: "",
        summary: "",
        query: this.props.match.params || {}
    }

    componentDidMount = () => {
      this.loadChurches();
    }

    checkState = () => {
        let searchObj = {};
        if (this.state.name.length > 0) {
            searchObj.name = this.state.name;
        }
        if (this.state.location.length > 0) {
            searchObj.location = this.state.location;
        }
        return searchObj;
    }

    handleInputChange = event => {
        console.log("-");
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

    handleFormSubmit = event => {
        console.log("Button pushed");
        // console.log(this.state.location);
        event.preventDefault();
        if (this.state.location) {
            API.getChurches({
                    location: this.state.location
                })
              .then(res => this.setState({ churches: res.data, name: "", location: "", summary: "" }))
                //  console.log(res.data)
              .catch(err => console.log(err));
        }
    }

    loadChurches = () => {
      console.log("LOADING CHURCHES...");
        API.getChurches()
            .then(res =>
                this.setState({ churches: res.data, name: "", location: "", summary: "" },
              console.log("STATE", this.state))
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
          <div>
            <SearchBar 
            className = "searchBar"
            inputHandler = { this.handleInputChange }
            buttonHandler = { this.handleFormSubmit }
            value = { this.state.location }
            location = { this.state.location }
            name = 'location' 
            />
            {this.state.churches.length ? (
              <List>
                {this.state.churches.map(church => (
                  <ListItem key={church._id}>
                    <Link to={"/churches/" + church._id}>
                      <strong>
                        {church.name} , {church.location}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteChurch(church._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        );
    }
}

export default Churches;