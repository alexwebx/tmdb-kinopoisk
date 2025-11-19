export function setItemLS<T>(key: string, value: T): void {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
        window.dispatchEvent(new Event('localStorageChange'));
    } catch (error) {
        console.error(`Error updating localStorage key "${key}":`, error);
    }
}

export function getItemLS<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
}