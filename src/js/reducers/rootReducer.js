export default function reducer ( state = initialState ,action ){

    const newState = state;

    if( action.type === 'ACTIVE_LINK') {

        newState.navigation.activeClass = action.payload;

        return {...newState};

    }


    return state


}
