import DEL_WOMBAT from '../actions'

const initialState = ['Gertrude', 'Bartholemew']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]
    case DEL_WOMBAT:
      return state.filter((wombat) => wombat !== action.wombat)
    default:
      return state
  }
}

export default reducer
