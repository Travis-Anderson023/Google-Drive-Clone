import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/app";
import ApolloContainer from "./app/containers/ApolloContainer";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <ApolloContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloContainer>
  </StrictMode>,
);
