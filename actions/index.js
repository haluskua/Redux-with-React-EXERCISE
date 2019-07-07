export const DEL_WOMBAT = 'DEL_WOMBAT'

// Action creator function
export function deleteWombat(wombat) {
  return {
    type: DEL_WOMBAT,
    wombat: wombat
  }
}
