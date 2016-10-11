import React, { Component } from 'react'

export default class GifItem extends Component {
    render() {
        const { gif } = this.props

        return (
            <div className='gif-item'>
                <img src={ gif.images.downsized.url } alt="" />
            </div>
        )
    }
}
