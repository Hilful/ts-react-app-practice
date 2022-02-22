import React from "react";
import "./App.css";
import Lists from "./components/Lists";

const Box: React.FunctionComponent<{ title: string }> = ({ title }) => {
  return <div></div>;
};

function App() {
  return (
    <div className="App">
      <Lists></Lists>
      <Box title="Hello World!!">Working</Box>
    </div>
  );
}

export default App;
