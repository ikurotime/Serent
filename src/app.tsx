import { Link, Navigate, Route, Routes } from "react-router-dom";

// Service Worker =>
import ServiceWorker from "@/pwa/serviceWorker";
import { AuthContextProvider } from "./context/AuthContext";

import { createTheme, NextUIProvider } from '@nextui-org/react';
import NavbarComponent from "./components/navbar";
import { Router } from "./Router";

const App = () => {
  
  const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        // brand colors
        primaryLight: '$green200',
        primaryLightHover: '$green300',
        primaryLightActive: '$green400',
        primaryLightContrast: '$green600',
        primary: '#4ADE7B',
        primaryBorder: '$green500',
        primaryBorderHover: '$green600',
        primarySolidHover: '$green700',
        primarySolidContrast: '$white',
        primaryShadow: '$green500',
        background: '#1d1d1d',
        gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
        link: '#5E1DAD',
  
        // you can also create your own color
        myColor: '#ff4ecd'
  
        // ...  more colors
      },
      space: {},
      fonts: {}
    }
  })
  return (
      <NextUIProvider theme={darkTheme}>
    <AuthContextProvider>
      <NavbarComponent/>
      <div id="container">
        <Router/>
      </div>
      <ServiceWorker />
    </AuthContextProvider>
      </NextUIProvider>
  );
};

export default App;
