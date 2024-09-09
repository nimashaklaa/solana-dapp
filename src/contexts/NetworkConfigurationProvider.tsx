import { useLocalStorage } from "@solana/wallet-adapter-react";
import { createContext, FC, ReactNode, useContext } from "react";

export interface networkConfigurationState {
  networkConfiguration: string;
  setNetworkConfiguration(networkConfiguration: string): void;
}

export const networkConfigurationContext =
  createContext<networkConfigurationState>({} as networkConfigurationState);

export function useNetworkConfiguration(): networkConfigurationState {
  return useContext(networkConfigurationContext);
}

export const NetworkConfigurationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [networkConfiguration, setNetworkConfiguration] = useLocalStorage(
    "network",
    "devnet"
  );
  return (
    <networkConfigurationContext.Provider
      value={{ networkConfiguration, setNetworkConfiguration }}
    >
      {children}
    </networkConfigurationContext.Provider>
  );
};
