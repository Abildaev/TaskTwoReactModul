import {useState, useCallback, useLayoutEffect} from "react";


export function useLocalStorage (key) {
    const [token, setToken] = useState('');

    const setItem = useCallback ((newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken)
    }, [token])

    const removeItem = () => {
        localStorage.removeItem(key)
        setToken('')
    }

    useLayoutEffect(() => {
        setToken(localStorage.getItem(key) ?? 'токена нет')
    }, [setItem])

    return [token, {setItem, removeItem}]
}