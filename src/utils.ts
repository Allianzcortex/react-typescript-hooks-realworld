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

// will show 10 articles in each page
export const PER_PAGE_COUNT = 10;

/**
 * 
 * @param limitCount 
 * Limit number of articles (default is 20):
    ?limit=20
    Offset/skip number of articles (default is 0):
    ?offset=0
 * @param offset 
 * @returns 
 */
export const pageParameter = (limitCount: number, page: number) => {
  return `limit=${limitCount}&offset=${PER_PAGE_COUNT * (page - 1)}`;
};
