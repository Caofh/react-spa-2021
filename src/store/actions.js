// actions.js

// action也是函数
export function setPageTitle(data, dispatch) {
  dispatch({ type: 'SET_PAGE_TITLE', data: data })
}
