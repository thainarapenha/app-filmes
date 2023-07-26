import { api, key } from '@services/api';
import React, { createContext, useEffect, useState } from "react";
import IMovies from 'src/interface/IMovies';

interface IMoviesContent {
  nowMovies: IMovies[];
  popularMovies: IMovies[];
  topMovies: IMovies[];
  setNowMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setTopMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  getMovies(): Promise<void>;
}

export const MoviesContext = createContext<IMoviesContent>({} as IMoviesContent);

type IMoviesProps = {
  children: JSX.Element;
}

export function MoviesProvider({ children }: IMoviesProps) {
  const [nowMovies, setNowMovies] = useState<IMovies[]>([]);
  const [popularMovies, setPopularMovies] = useState<IMovies[]>([]);
  const [topMovies, setTopMovies] = useState<IMovies[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const [nowData, popularData, topData] = await Promise.all([
      api.get<IMovies[]>('movie/now_playing',{
        params:{
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      }),

      api.get<IMovies[]>('movie/popular',{
        params:{
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      }),

      api.get<IMovies[]>('movie/top_rated',{
        params:{
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      }),
    ])

    console.log(nowData.data);
  }

  return (
    <MoviesContext.Provider
      value={{ nowMovies, popularMovies, topMovies, setNowMovies, setPopularMovies, setTopMovies, getMovies }}
    >
      {children}
    </MoviesContext.Provider>
  )
}