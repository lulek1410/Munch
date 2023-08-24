import { createContext } from "react";
import { Event } from "./../common/interfaces/Event";

export const EventsContext = createContext([] as Event[]);
