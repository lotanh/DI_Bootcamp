let initState = {
    property_one : 'ex 1',
    property_two : 'ex 2'
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case 'PROP_ONE':
            return {...state , property_one: action.payload}
        case 'PROP_TWO':
            return {...state , property_two: state.property_one}
        default:
            return{...state}
    }
}