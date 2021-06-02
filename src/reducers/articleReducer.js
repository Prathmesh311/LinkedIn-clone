import { GET_ARTICLES, SET_LOADING } from '../actions/actionType';

export const initState = {
    articles: [],
    loading: false,
};

const articleReducer = (state = initState, action) => {
    console.log(action.type);
    console.log('payload articles = ', action.payload);

    switch(action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
            };

        case SET_LOADING:
            return{
                ...state,
                loading: action.state
            }
        
        default:
            return state;
    }
    
    //console.log(articles);
};

export default articleReducer;
