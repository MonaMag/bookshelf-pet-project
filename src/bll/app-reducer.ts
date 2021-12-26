
type stateType = typeof initState

const initState = {
    isFetching: false,
}


export  const appReducer = (state: stateType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'appReducer/SET_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}



//* Action Creators --------------------------------------------------------->
type ActionsType = ReturnType<typeof setIsFetching>

export const setIsFetching = (isFetching: boolean) =>
    ({type: 'appReducer/SET_IS_FETCHING', isFetching} as const)