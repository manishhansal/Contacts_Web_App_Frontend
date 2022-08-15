import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact";
import ContactDetails from "./Components/ContactDetails";
import Contacts from "./Components/Contacts";
import Messages from "./Components/Messages";
import Navbar from "./Components/Navbar";
import SendMessage from "./Components/SendMessage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddContact/>
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contacts/:contactId" element={<ContactDetails />} />
        <Route path="/contacts/:contactId/:id" element={<SendMessage />} />
      </Routes>
    </div>
  );
}

export default App;
