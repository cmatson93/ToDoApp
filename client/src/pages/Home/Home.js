import React, { Component } from "react";
import { Container, Col, Row, Jumbotron, Button } from 'reactstrap';
import "./Home.css";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { List, ListItem } from "../../components/List";
import SearchBar from "../../components/SearchBar";
import DeleteBtn from "../../components/DeleteBtn";

class Home extends Component {

	state = {
        toDos: [],
        toDoName: "",
        isDone: false,
        summary: "",
        query: this.props.match.params || {}
    }

    componentDidMount = () => {
      this.loadToDos();
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
      console.log(event.target);
      console.log(name);
      console.log(value);
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
        // if (this.state.location) {
        //     API.getChurches({
        //             location: this.state.location
        //         })
        //       .then(res => this.setState({ churches: res.data, name: "", location: "", summary: "" }))
        //         //  console.log(res.data)
        //       .catch(err => console.log(err));
		// }
		console.log("NAME>>>>>>>")
		console.log(this.state.toDoName);
		API.saveToDo({
      toDoName: this.state.toDoName,
			isDone: this.state.isDone      
		})
		.then(res => this.loadToDos())
		.catch(err => console.log(err));
    }

    loadToDos = () => {
      console.log("LOADING ToDos...");
        API.getToDos()
            .then(res =>
                this.setState({ toDos: res.data, toDoName: "", isDone: false, summary: "" }),
              // console.log(res.data)
            )
            .catch(err => console.log(err))
	}
	
	deleteToDo = id => {
		API.deleteToDo(id)
			.then(res => this.loadToDos())
			.catch(err => console.log(err));
	}

	render() {
		return (
			<div className="home">
				<Jumbotron fluid className="jumbotron">
						<h1 style={{}}>TO DO</h1>
						<h3>Get things DONE!</h3>
						{/*<Link to={"/toDos"} style={{ textDecoration: 'none' }}>
							<button>
								Go to your list 
							</button>
            </Link>*/}
					<SearchBar 
						className = "searchBar"
						inputHandler = { this.handleInputChange }
						buttonHandler = { this.handleFormSubmit }
						value = { this.state.toDoName }
						name = { this.state.toDoName }
						name = 'toDoName' 
            		/>
				</Jumbotron>
				{this.state.toDos.length ? (
              <List>
                {this.state.toDos.map(toDo => (
                  <ListItem key={toDo._id}>
                    <Link to={"/toDos/" + toDo._id}>
                      <strong>
                        {toDo.toDoName} 
                      </strong>
                    </Link>
                 <DeleteBtn onClick={() => this.deleteToDo(toDo._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
			</div>
		)
	}
}

export default Home;