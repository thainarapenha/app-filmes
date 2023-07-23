import NetInfo from '@react-native-community/netinfo';
import React, { createContext, useEffect, useState } from "react";

interface IConnectionContext {
  connection: boolean;
}

export const ConnectionContext = createContext<IConnectionContext>({} as IConnectionContext);

type IConnectionProps = {
  children: JSX.Element;
}

export function ConnectionProvider({ children }: IConnectionProps) {
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    workerConnection();
  }, []);

  function workerConnection() {
    NetInfo.addEventListener(state => {
      setConnection(state.isConnected === true);
      // setConnection(false);
    });
  }

  return (
    <ConnectionContext.Provider
      value={{ connection }}
    >
      {children}
    </ConnectionContext.Provider>

  )

}