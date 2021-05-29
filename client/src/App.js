import "./App.css";

import { DataProvider } from "./Context";
import TabPanel from "./TabPanel";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <TabPanel />
      </DataProvider>
    </div>
  );
}

export default App;
