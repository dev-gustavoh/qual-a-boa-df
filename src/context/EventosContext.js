import React, { createContext, useContext, useState } from 'react';

const EventosContext = createContext();

export const useEventos = () => useContext(EventosContext);

export const EventosProvider = ({ children }) => {
  const [eventosMarcados, setEventosMarcados] = useState([]);

  const marcarEvento = (evento) => {
    setEventosMarcados((prev) => [...prev, evento]);
  };

  return (
    <EventosContext.Provider value={{ eventosMarcados, marcarEvento }}>
      {children}
    </EventosContext.Provider>
  );
};
