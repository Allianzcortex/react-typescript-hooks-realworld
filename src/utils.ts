export const setLocalStorage = (key: string, token: string) => {
  localStorage.setItem(key, JSON.stringify(token));
};

export const getLocalStorage = (key: string): string | null => {
  const value = localStorage.getItem(key);
  if (!value) {
    return null;
  }
  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};
