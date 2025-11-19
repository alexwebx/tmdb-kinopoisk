import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
    const [value, setValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        const handleStorageChange = () => {
            try {
                const item = window.localStorage.getItem(key);
                setValue(item ? JSON.parse(item) : defaultValue);
            } catch (error) {
                console.error(`Error reading localStorage key "${key}":`, error);
            }
        };

        // Слушаем изменения в LocalStorage
        window.addEventListener('storage', handleStorageChange);

        // Также можно слушать кастомные события, если изменения происходят в этом же окне
        window.addEventListener('localStorageChange', handleStorageChange as EventListener);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('localStorageChange', handleStorageChange as EventListener);
        };
    }, [key, defaultValue]);

    return value;
};