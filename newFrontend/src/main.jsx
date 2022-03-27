import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./styles/tailwind.css";
import "./styles/global.css";
import StoreProvider from "./context/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SpeechProvider } from '@speechly/react-client';


const client = new ApolloClient({
  uri: "https://xciteserver.herokuapp.com/xcite",
  cache: new InMemoryCache(),
});

render(
  <StrictMode>
    <BrowserRouter>
    <SpeechProvider appId="d3145c99-ff6c-4a11-9bf9-013a6b127b08" language="en-US">
      <ApolloProvider client={client}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </ApolloProvider>
      </SpeechProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
