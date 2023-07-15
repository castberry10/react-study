// useActions는 react-redux 릴리즈에서 제외되었지만 사용한다면 여러개의 액션을 사용해야하는 경우 코드가 간결해진다. 

import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}

// 코드는 https://react-redux.js.org/api/hooks#recipe-useactions에서 가져오면 된다. 
