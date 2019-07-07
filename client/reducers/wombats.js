const initialState = ['Gertrude', 'Batholemew']

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_WOMBAT':
      return [...state, action.wombat]
    default: 
      return state
  }
}

export default reducer
