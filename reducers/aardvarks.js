const initialState = ['Barry', 'Des', 'Aaron', 'Gina']

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AARDVARK':
      return [...state, action.aardvark]
    case 'DEL_AARDVARK':
      return state.filter((aardvark) => aardvark !== action.aardvark)
    default:
      return state
  }
}

export default reducer
  