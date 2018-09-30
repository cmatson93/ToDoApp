import axios from "axios";

export default {
    // Gets all todos
    getToDos: function(params) {
        return axios.get("/api/toDos", { params });
    },
    // Gets the book with the given id
    getToDo: function(id) {
        return axios.get("/api/toDos/" + id);
    },
    // Deletes the book with the given id
    deleteToDo: function(id) {
        return axios.delete("/api/toDos/" + id);
    },
    // Saves a book to the database
    saveToDo: function(toDoData) {
        console.log(toDoData);
        return axios.post("/api/toDos", toDoData);
    }
};