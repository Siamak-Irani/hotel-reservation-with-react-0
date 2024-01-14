import { useEffect, useState } from "react";
import { createContext } from "react";
import items from "../../data/data";
import { Room } from "../../lib/type";
import { formatData } from "../../uitls/functions";

type StoreContext = {
  loading: boolean;
  featuredRooms: Room[];
};

const Store = createContext({} as StoreContext);

type StoreContextProviderProps = {
  children: React.ReactNode;
};

export const StoreContextProvider = ({
  children,
}: StoreContextProviderProps) => {
  const [state, setState] = useState<StoreContext>({
    loading: true,
    featuredRooms: [],
  });

  useEffect(() => {
    let rooms: Room[] = formatData(items);
    let featuredRooms = rooms.filter((room: Room) => room.featured === true);

    setState((prev) => {
      return { ...prev, featuredRooms, loading: false };
    });
  }, []);

  return <Store.Provider value={state}>{children}</Store.Provider>;
};

export default Store;
