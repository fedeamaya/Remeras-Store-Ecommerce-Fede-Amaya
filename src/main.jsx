import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ChakraProvider } from "@chakra-ui/react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAyUASpyGbfgfNSdIK5d7WBNGXEyW7_Z_8",
  authDomain: "remeras-store.firebaseapp.com",
  projectId: "remeras-store",
  storageBucket: "remeras-store.appspot.com",
  messagingSenderId: "434304375536",
  appId: "1:434304375536:web:19d44b39d70c80ad470035"
};

initializeApp(firebaseConfig);

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);