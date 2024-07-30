// host-app/src/App.js
import React from "react";
// import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));
const RemoteButton = React.lazy(() => import("Remote/Button"));
const RemoteDataFetch = React.lazy(() => import("Remote/DataFetch"));
const RemoteUserDetails = React.lazy(() => import("Remote/UserDetails"));
const RemoteBanner = React.lazy(() => import("Remote/Banner"));
const RemoteFooter = React.lazy(() => import("Remote/Footer"));
const RemoteNavBar = React.lazy(() => import("Remote/NavBar"));
const RemoteFaq = React.lazy(() => import("Remote/Faq"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    {children}
  </div>
);

export const App = () => (
  <div style={{ background: "rgba(43, 192, 219, 0.3)" }}>
    <h1>This is the Host!</h1>
    <h2>Remote App:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    <h2>Remote Button:</h2>
    <RemoteWrapper>
      <RemoteButton />
    </RemoteWrapper>

    <h2>Dummy Data Fetching:</h2>

    <RemoteWrapper>
      <RemoteBanner />
    </RemoteWrapper>

    <RemoteWrapper>
      <RemoteNavBar />
    </RemoteWrapper>

    <RemoteWrapper>
      <RemoteDataFetch />
    </RemoteWrapper>

    <RemoteWrapper>
      <RemoteUserDetails />
    </RemoteWrapper>

    <RemoteWrapper>
      <RemoteFaq />
    </RemoteWrapper>

    <RemoteWrapper>
      <RemoteFooter />
    </RemoteWrapper>
    <br />
    <a href="http://localhost:4000">Link to Remote App</a>
  </div>
);
export default App;
