import React, { Component } from "react";
import Api from "../utils/API";




class Search extends Component {
    //set the initial values of this.state.topic, this.state.startYear, this.state.endYear
    state = {
        topic: " ",
        startYear: " ",
        endYear: " "
    };

    //handle the changes to the input fields
    handleInputChanges = event => {
        const { name, value } = event.target;
    //set the state for the appropriate input field
    this.setState ({
        [name]: value
    });
    };

    //when form is submitted, prevent the default event and alert the topic, start and end year
    handleFormSubmit = event => {
        event.preventDefault();
        alert(`Topic: ${this.state.topic}\nStart Year: ${this.state.startYear}\nEnd Year: ${this.state.endYear}`);
        this.setState({ topic: "", startYear: "", endYear: ""});
    };


    render() {
        return(
        <div className ="container">
            <form>
            <p>Topic: {this.state.topic}</p>
            <p>startYear: {this.state.startYear}</p>
            <p>endYear: {this.state.endYear}</p>
            <div className = "form-group">
                <label htmlFor = "Topic">Topic</label>
                <input
                type = "text"
                className ="form-control"
                name = "topic"
                value = {this.state.topic}
                onChange = {this.handleInputChanges}
                id = "topic"
                />
            </div>
            <div className = "form-group">
                <label htmlFor = "startYear">Start Year</label>
                <input
                type = "text"
                className="form-control"
                name = "startYear"
                value = {this.state.startYear}
                onChange = {this.handleInputChanges}
                id = "startYear"
                />
            </div>
                <div className = "form-group">
                <label htmlFor = "Topic">End Year</label>
                <input
                type = "text"
                className = "form-control"
                name = "endYear"
                value = {this.state.endYear}
                onChange = {this.handleInputChanges}
                id = "endYear"
                />
            </div>
            <button onClick = {this.handleFormSubmit} className ="btn btn-primary">Search</button>
            </form>
        </div>

            );
    }
    }

export default Search;