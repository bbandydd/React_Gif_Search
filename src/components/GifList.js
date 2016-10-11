import React, { Component } from 'react'
import GifItem from './GifItem'

export default class GifList extends Component {
    render() {
        const { gifs } = this.props

        const gifItems = gifs.map((image) => {
            return <GifItem key={ image.id } gif={ image } />
        })

        return (
            <div className='gif-list'>{ gifItems }</div>
        )
    }
}
