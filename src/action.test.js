import { CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED
} from './constants';

import * as action from './action';
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk';

const middlewares = [thunk] // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares)

const store = mockStore({})


it('checking changeSearchField action', () => {
    const text = 'woo'; 
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(action.changeSearchField(text)).toEqual(expectedAction)
})


it('Fetching robots has PENDING state', () => {
    store.dispatch(action.requestRobots())
    const actions = store.getActions()
    expect(actions[0]).toEqual({type: REQUEST_ROBOTS_PENDING})
    console.log(actions)
})

// it('fetching SUCCESS', () => {
   
// })

