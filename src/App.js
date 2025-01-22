import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Portfolio />
        </>
    );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
