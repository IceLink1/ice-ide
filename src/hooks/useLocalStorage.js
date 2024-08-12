
import { useEffect, useState } from 'react'

const PREFIX = 'cc-'

export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = typeof localStorage !== 'undefined'?localStorage.getItem(prefixedKey):null
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })


  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}