import React, { Component } from 'react'
import request from 'superagent'

import SearchBar from './components/SearchBar'
import GifList from './components/GifList'

import './styles/app.css'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state= {
            gifs: [],
            selectedGif: null,
            modalIsOpen: false
        }
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={ this.handleTermChange.bind(this) }/>
                <GifList gifs={ this.state.gifs } />
            </div>
        )
    }

    handleTermChange(term) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${ term.replace(/\s/g, '+') }&api_key=dc6zaTOxFJmzC`

        request.get(url, (err, res) => {
            this.setState({ gifs: res.body.data })
        })
    }
}
