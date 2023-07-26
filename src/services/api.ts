import axios from "axios";

// export const key = '0033e2b9a6995dd108e6e4e5c43fbb5';
export const key = '0033e2b9a6995dd108e6e4e5c43fbb5a';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});