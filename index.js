import {createStore, combineReducers} from 'redux'
import {deleteWombat} from './actions'
import reducers from './reducers'

// const initialWombatState = ['Gertrude', 'Bartholemew']
// const initialAardvarkState = ['Barry', 'Des', 'Aaron', 'Gina']

// action = {
//   type: 'ADD_WOMBAT',
//   wombat: 'Jim'
// }


// state = ['one', 'two']
// [...state.wombats, action.wombat]
// ['one', 'two', 'Jim']

// const wombatReducer = (state = initialWombatState, action) => {
//   switch (action.type) {
//     case 'ADD_WOMBAT':
//       return [...state.wombats, action.wombat]
//     case 'DEL_WOMBAT':
//       return state.wombats.filter((wombat) => wombat !== action.wombat)
//     default:
//       return state
//   }
// }

// const aardvarkReducer = (state = initialAardvarkState, action) => {
//   switch (action.type) {
//     case 'ADD_AARDVARK':
//       return [...state.aardvarks, action.aardvark]
//     case 'DEL_AARDVARK':
//       return state.aardvarks.filter((aardvark) => aardvark !== action.aardvark)
//     default:
//       return state
//   }
// }

// const wombatReducer = (state = initialWombatState, action) => {
//     if (action.type == 'ADD_WOMBAT') {
//       return {
//         wombats: [...state.wombats, action.wombat]
//       }
//     } else if (action.type == 'DEL_WOMBAT') {
//       return {
//         wombats: state.wombats.filter((wombat) => wombat !== action.wombat)
//       }
//     } else {
//       return state
//     }
// }

// const reducers = combineReducers(
//   {
//     wombats: wombatReducer,
//     aardvarks: aardvarkReducer,
//   }
// )

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render()
  store.subscribe(render)
})

// Action creator function
// function deleteWombat(wombat) {
//   return {
//     type: 'DEL_WOMBAT',
//     wombat: wombat
//   }
// }

function render () {
  console.log('Render')
  const state = store.getState()
  const wombats = state.wombats
  document.getElementById('app').innerHTML = renderWombats(wombats)

  for (const wombat of wombats) {
    let button = document.getElementById(`delete-${wombat}`)
    button.addEventListener('click', function() {
      // const deleteAction = {
      //   type: 'DEL_WOMBAT',
      //   wombat: wombat
      // }
      // store.dispatch(deleteAction)

      store.dispatch(deleteWombat(wombat))
    })
  }
  
}

function renderWombats (wombats) {
  let output = '<ul>'
  for (const wombat of wombats) {
    output += `<li>${wombat} <button id='delete-${wombat}'>Delete</button></li>`
  }
  output += '</ul>'
  return output
}
