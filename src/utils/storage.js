const PREFIX = 'little-explorers:';

export function readStorage(key, fallback) {
  try {
    const stored = window.localStorage.getItem(`${PREFIX}${key}`);
    return stored === null ? fallback : JSON.parse(stored);
  } catch (error) {
    console.error(`Could not read "${key}" from local storage.`, error);
    return fallback;
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  } catch (error) {
    console.error(`Could not save "${key}" to local storage.`, error);
  }
}

export function removeStorage(key) {
  try {
    window.localStorage.removeItem(`${PREFIX}${key}`);
  } catch (error) {
    console.error(`Could not remove "${key}" from local storage.`, error);
  }
}
