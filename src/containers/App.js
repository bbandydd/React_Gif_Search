import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from '../components/SearchBar'
import GifList from '../components/GifList'
import GifModal from '../components/GifModal'
import * as modalActions from '../actions/modal'
import * as gifsActions from '../actions/gifs'

import '../styles/app.css'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { gifs, modalIsOpen, selectedGif, modalActions, gifsActions } = this.props

        return (
            <div>
                <SearchBar onTermChange={ gifsActions.requestGifs }/>
                <GifList
                    gifs={ gifs }
                    onGifSelect={ (selectedGif) => modalActions.openModal(selectedGif) }
                />
                <GifModal
                    modalIsOpen={ modalIsOpen }
                    selectedGif={ selectedGif }
                    onRequestClose={ () => modalActions.closeModal() }
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gifs: state.gifs.data,
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalActions: bindActionCreators(modalActions, dispatch),
        gifsActions: bindActionCreators(gifsActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
