import React, { Component } from 'react'

export default class GifItem extends Component {
    render() {
        const { gif, onGifSelect } = this.props

        return (
            <div className='gif-item' onClick={ () => onGifSelect(gif) }>
                <img src={ gif.images.downsized.url } alt="" />
            </div>
        )
    }
}
