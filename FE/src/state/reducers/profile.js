import {LOAD_PROFILE} from '../actions/profile';

const initialState = {
    email: '',
    displayName: '',
    picture: ''
}

const profileReducer  = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_PROFILE : {
            const { email, displayName, picture } = action.payload;
            return {
                ...state,
                email,
                displayName,
                picture
            }
        }
        default: return state
    }
}

export default profileReducer;