import React from "react";

const styles = {
    buttonStyle : {
        marginRight: "10px"
    },

};

const SearchForm = props => (

    <div className="container search-wrap">

            <form>
              <div className="form-group">
                <label>Search</label>
                <input
                id="name-input"
                type="text"
                name="term"
                className="form-control"
                placeholder="Topic"
                value={props.term} onChange={props.handleInputChange}>
                </input>
            </div>

            <div className="form-group">
              <label>Start Year</label>
                <input
                id="start-date"
                type="text"
                name="startDate"
                className="form-control"
                placeholder="Start Year"
                onChange={props.handleInputChange} value={props.startDate}></input>
            </div>
            <div className="form-group">
                <label>End Year</label>
                <input
                id="end-date"
                type="text"
                name="endDate"
                className="form-control"
                placeholder="End Year"
                onChange={props.handleInputChange} value={props.endDate}>
                </input>
            </div>

                <button style = {styles.buttonStyle}
                type="submit"
                className="btn search-btn btn-info"
                onClick={props.handleFormSubmit}
                href="/articles">Submit
                </button>

                <button
                type="submit"
                className="btn clear-btn btn-danger"
                onClick={props.handleFormClear}>Clear Search</button>
            </form>

    </div>
);

export default SearchForm;