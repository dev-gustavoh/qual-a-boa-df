import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { EventosProvider } from './src/context/EventosContext';

export default function App() {
  return (
    <EventosProvider>
      <AppNavigator />
    </EventosProvider>
  );
}
