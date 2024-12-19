
const intialState = {
    recipes: [],
    favorites: [],
    recipe: null,
    isCreated: false,
    isLoading: false,
    isUpdated: false,
    isDelete: false
}

const SubmitReducer = (state = intialState, action) => {
    switch (action.type) {

        case "VIEW_RECIPE_SUC":
            return{
                ...state,
                recipes: action.payload,
                isCreated: false,
                isUpdated: false,
                isDelete: false,
                recipe: null
            }

        case "VIEW_FAVORITE_RECIPE_SUC":
            return{
                ...state,
                favorites: action.payload
            }

        case "ADD_RECIPE_SUC":
            return{
                ...state,
                isCreated: true
            }

        case "SINGLE_RECIPE_SUC":
            return{
                ...state,
                recipe: action.payload
            }

        case "UPDATE_RECIPE_SUC":
            return{
                ...state,
                isUpdated: true,
            }

        case "FILTER_RECIPE_SUC":
            return{
                ...state,
                recipes: action.payload
            }


        default:
            return state;
    }
}

export default SubmitReducer;