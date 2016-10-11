import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    render() {
        return (
            <div>
                <input placeholder='Enter text to search for gifs!' className='search' type="text" onChange={ this.onInputChange.bind(this) }/>
            </div>
        )
    }

    onInputChange(e) {
        const term = e.target.value
        this.setState({ term })
        this.props.onTermChange(term)
    }
}
