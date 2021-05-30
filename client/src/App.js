import "./App.css";
import AppointmentView from "./Appointments/AppointmentView";

import { DataProvider } from "./Context";
import TabPanel from "./TabPanel";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div style={{flexGrow:'1'}}>
          <TabPanel />
        </div>

        <div><AppointmentView /></div>
      </div>
    </DataProvider>
  );
}

export default App;
