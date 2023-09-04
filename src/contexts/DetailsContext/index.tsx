// import { api } from '@services/api';
// import React, { createContext, useState } from "react";
// import IMovies from 'src/interface/IMovies';

// interface IDetailsContent {
//   details: IMovies | undefined;
//   setDetails: React.Dispatch<React.SetStateAction<IMovies | undefined>>;
//   getDetailsMovies(id: number): void;
// }

// export const DetailsContext = createContext<IDetailsContent>({} as IDetailsContent);

// type IDetailsProps = {
//   children: JSX.Element;
// }

// export const DetailsProvider: React.FC<IDetailsProps> = ({ children }) => {
//   const [details, setDetails] = useState<IMovies>();

//   // useEffect(() => {
//   //   getMovies();
//   // }, []);

//   async function getDetailsMovies(id: number) {
//     try {
//       const response = await api.get(`/${id}`)

//       console.log(response.data)
//       setDetails(response.data);

//     } catch (error) {
//       console.log('Error details (DetailsContext)', error)
//       alert('Ops :/ \n\nAlgo inesperado aconteceu. Tente novamente');
//     }
//   }

//   return (
//     <DetailsContext.Provider
//       value={{ details, setDetails, getDetailsMovies }}
//     >
//       {children}
//     </DetailsContext.Provider>
//   )
// }