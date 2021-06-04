// build basic model

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string; // TODO or should we use typescript timestamp ?
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}
