import { api, key } from '@services/api';
import React, { createContext, useEffect, useState } from "react";
import IMovies from 'src/interface/IMovies';

interface IMoviesContent {
  nowMovies: IMovies[];
  popularMovies: IMovies[];
  topMovies: IMovies[];
  bannerMovies: IMovies | undefined;
  setNowMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setPopularMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  setTopMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  getMovies(): Promise<void>;
  randomBanner(movies: IMovies[]): void;
  setBannerMovies: React.Dispatch<React.SetStateAction<IMovies | undefined>>;
}

export const MoviesContext = createContext<IMoviesContent>({} as IMoviesContent);

type IMoviesProps = {
  children: JSX.Element;
}

export const MoviesProvider: React.FC<IMoviesProps> = ({ children }) => {
  const [nowMovies, setNowMovies] = useState<IMovies[]>([]);
  const [popularMovies, setPopularMovies] = useState<IMovies[]>([]);
  const [topMovies, setTopMovies] = useState<IMovies[]>([]);
  const [bannerMovies, setBannerMovies] = useState<IMovies>();

  useEffect(() => {
    getMovies();
  }, []);

  function randomBanner(movies: IMovies[]){
    return Math.floor(Math.random() * movies.length);
  }

  async function getMovies() {
    try {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),

        api.get('movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),

        api.get('movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
      ])

      setNowMovies(nowData.data.results);
      setPopularMovies(popularData.data.results);
      setTopMovies(topData.data.results);
      setBannerMovies(nowData.data.results[randomBanner(nowData.data.results)]);

    } catch (error) {
      console.log('Error movies (MoviesContext)', error)
      alert('Ops :/ \n\nAlgo inesperado aconteceu. Tente novamente');
    }
  }

  return (
    <MoviesContext.Provider
      value={{ nowMovies, popularMovies, topMovies, bannerMovies, setBannerMovies, randomBanner, setNowMovies, setPopularMovies, setTopMovies, getMovies }}
    >
      {children}
    </MoviesContext.Provider>
  )
}