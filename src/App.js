import { Route, Routes } from "react-router-dom";
import "./App.css";
import ContactDetails from "./Components/ContactDetails";
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Messages from "./Components/Messages";
import Navbar from "./Components/Navbar";
import SendMessage from "./Components/SendMessage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/contacts/:contactId" element={<ContactDetails />} />
        <Route path="/contacts/:contactId/:id" element={<SendMessage />} />
      </Routes>
    </div>
  );
}

export default App;
