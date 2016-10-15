import request from 'superagent'
import gifsConstants from '../constants/gifs';

export function requestGifs(term) {
    return function (dispatch) {
        const url = `http://api.giphy.com/v1/gifs/search?q=${ term.replace(/\s/g, '+') }&api_key=dc6zaTOxFJmzC`

        request.get(url, (err, res) => {
            dispatch({
                type: gifsConstants.REQUEST_GIFS,
                payload: res
            })
        })
    }
}
