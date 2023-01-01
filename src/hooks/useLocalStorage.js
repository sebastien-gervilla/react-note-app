import { useEffect } from "react";
import { useState } from "react";

const getItemByKey = (key, defaultValue) => {
    const item = localStorage.getItem(key);
    if (!item) return defaultValue;
    return JSON.parse(item);
}

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(getItemByKey(key, defaultValue));

    const storeItem = (key, value) => {
        const storedValue = JSON.stringify(value);
        localStorage.setItem(key, storedValue);
    }

    useEffect(() => {
        storeItem(key, value);
    }, [key, value]);

    return [value, setValue];
}