import React, { Component } from 'react'
import Modal from 'react-modal'

export default class GifModal extends Component {
    render() {
        const { modalIsOpen, onRequestClose, selectedGif } = this.props

        if (!selectedGif) {
            return <div></div>
        }

        return (
            <Modal
                isOpen={ modalIsOpen }
                onRequestClose={ () => onRequestClose() }
            >
                <div className='gif-modal'>
                    <img src={ selectedGif.images.original.url } alt=""/>
                    <p>
                        <strong>Source:</strong>
                        <a href={ selectedGif.source }>
                            { selectedGif.source }
                        </a>
                    </p>
                    <p>
                        <strong>Rating:</strong>
                        { selectedGif.rating }
                    </p>

                    <button onClick={ () => onRequestClose() }>Close</button>
                </div>
            </Modal>
        )
    }
}
