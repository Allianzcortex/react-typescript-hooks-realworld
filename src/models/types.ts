export type IError = string[];

export type messageType = "success" | "error" | "warning" | "info" | null;

export interface IUser {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
}

export interface IProfile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
  favorited: boolean;
  favoritesCount: number;
  author: IProfile;
}

export interface IArticleMeta {
  title: string;
  description: string;
  body: string;
  tags: string[];
}

export interface IComment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: IProfile;
}
