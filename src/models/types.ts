export type IError = string[]

export type messageType = 'success' | 'error' | 'warning' | 'info' | null

export interface IUser {
    email:string;
    token:string;
    username:string;
    bio:string;
    image:string;
}

export interface Iuser {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  }
  
  export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string; // TODO or should we use typescript timestamp ?
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Iuser;
  }
  