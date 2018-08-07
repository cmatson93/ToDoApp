import axios from "axios";

export default {
    // Gets all books
    getChurches: function(params) {
        return axios.get("/api/churches", { params });
    },
    // Gets the book with the given id
    getChurch: function(id) {
        return axios.get("/api/churches/" + id);
    },
    // Deletes the book with the given id
    deleteChurch: function(id) {
        return axios.delete("/api/churches/" + id);
    },
    // Saves a book to the database
    saveChurch: function(churchData) {
        return axios.post("/api/churches", churchData);
    }
};