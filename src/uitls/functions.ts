import { RawRoom } from "../lib/type";

export const formatData = (items: RawRoom[]) => {
  let tempItems = items.map((item: any) => {
    let id = item.sys.id;
    let images = item.fields.images.map((image: any) => image.fields.file.url);
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
};

const getRoom = (slug: any, state: any) => {
  let tempRooms = [...state.rooms];
  const room = tempRooms.find((room) => room.slug === slug);
  return room;
};

const handleChange = (event: any, setState: any) => {
  const target = event.target;
  const value = target.type === "checkbox" ? target.checked : target.value;
  const name = target.name;

  setState(
    (prevState: any) => ({
      ...prevState,
      [name]: value,
    }),
    filterRooms
  );
};

const filterRooms = (state: any, setState: any) => {
  let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
    state;

  let tempRooms = [...rooms];
  capacity = parseInt(capacity);
  price = parseInt(price);

  if (type !== "all") {
    tempRooms = tempRooms.filter((room) => room.type === type);
  }
  if (capacity !== 1) {
    tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
  }
  tempRooms = tempRooms.filter((room) => room.price <= price);
  tempRooms = tempRooms.filter(
    (room) => room.size >= minSize && room.size <= maxSize
  );
  if (breakfast) {
    tempRooms = tempRooms.filter((room) => room.breakfast === true);
  }
  if (pets) {
    tempRooms = tempRooms.filter((room) => room.pets === true);
  }

  setState((prevState: any) => ({
    ...prevState,
    sortedRooms: tempRooms,
  }));
};
