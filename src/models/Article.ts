// build basic model

import { updateCommaList } from "typescript";

interface IAuthor {
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
  author: IAuthor;
}
