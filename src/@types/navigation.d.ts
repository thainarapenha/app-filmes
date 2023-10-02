import IMovies from "src/interface/IMovies";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: IMovies;
      Search: string;
    }
  }
}