import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Loader from "./Loader";

const Contacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const url =
      "https://my-contacts-web-app.herokuapp.com/contacts" ||
      "http://localhost:9211/contacts";
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(() => d.contacts))
      .catch((err) => console.log(err));
  };

  localStorage.setItem("data", JSON.stringify(data));

  return (
    <div className="ContactsList">
      {data.length === 0 ? (
        <Loader/>
      ) : (
        data.map((contact, idx) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={`/contacts/${contact._id}`}
              key={contact._id}
            >
              <div className="contact">
                <h3 style={{ marginTop: "50px", cursor: "pointer" }}>
                  {idx + 1 + " " + contact.first_name + " " + contact.last_name}
                </h3>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Contacts;
