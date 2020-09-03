import { CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './constants';
export const changeSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => { 
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: robots}))
      .catch(err => dispatch({type: REQUEST_ROBOTS_FAILED, payload: err}))
}