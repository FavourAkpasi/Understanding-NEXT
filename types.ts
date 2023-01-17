export type Users = {
  users: User[];
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}

export type Posts = {
  posts: Post[];
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Albums = {
  albums: Album[];
};

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type Comments = {
  comments: Comment[];
};
