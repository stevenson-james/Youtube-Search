import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        // initialize state with term property
        this.state = { term: '' };
    }
    render() {
        // onChange is a React defined property
        return (
            <div className="search-bar">
                <input
                    value={this.state.term} 
                    onChange={event => this.onInputChange(event.target.value)} />
                    {/* onKeyPress={event => this.onInputKeyPress(event.key)}*/}
            </div>
        );
        //return <input onChange={this.onInputChange} />;
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(this.state.term);
    }

    /*
    // if enter is pressed search for the term
    onInputKeyPress(key){
        if(key === 'Enter')
            this.props.onSearchTermChange(this.state.term);
    }
    */

}

export default SearchBar;