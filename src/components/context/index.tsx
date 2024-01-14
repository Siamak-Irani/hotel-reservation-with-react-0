import { useEffect, useState } from "react";
import { createContext } from "react";
import items from "../../data/data";
import { Room } from "../../lib/type";
import { formatData } from "../../uitls/functions";

type StoreContext = {
  loading: boolean;
  featuredRooms: Room[];
};

const Store = createContext({});

const ContextProvider = () => {
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

  return <Store.Provider value={state}></Store.Provider>;
};
