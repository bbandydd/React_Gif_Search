import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    render() {
        return (
            <div className='search'>
                <input type="text" onChange={ this.onInputChange.bind(this) }/>
            </div>
        )
    }

    onInputChange(e) {
        const term = e.target.value
        this.setState({ term })
        this.props.onTermChange(term)
    }
}
