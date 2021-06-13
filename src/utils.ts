import { IArticleMeta, IJWTPayload } from "./models/types";
import _ from "lodash";
import jwtDecode from "jwt-decode";

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

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

// will show 10 articles in each page
export const PER_PAGE_COUNT = 6;

const isExpValid = (date: number) => {
  // timestamp in typescript will be in miliseconds format
  // epoch
  return new Date().getTime() / 1000 <= date;
};

export const getUserFromJWT = (token: string | null) => {
  if (token === null) {
    return null;
  }
  const decoded = jwtDecode<IJWTPayload>(token); // Returns with the JwtPayload type
  if (!isExpValid(decoded.exp)) {
    return null;
  }
  return decoded.username;
};

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

export const objectDiff = (a1: IArticleMeta, a2: IArticleMeta) => {
  let s = {};
  Object.entries(a1).map(([key, value]) => {
    if (_.get(a2, key) != value) {
      _.set(s, key, value);
    }
  });

  return s;
};

export const updateCreppyDefaultImage = (image: string) => {

  // Am I the only one that thinks default avatar is creppy ? 
  if (image === "https://static.productionready.io/images/smiley-cyrus.jpg") {
    return 'default-avatar.jpg';
  }
  return image;
};