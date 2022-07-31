import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Contacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`http://localhost:9211/contacts`)
      .then((res) => res.json())
      .then((d) => setData(() => d.contacts));
  };

  localStorage.setItem("data", JSON.stringify(data));

  return (
    <div className="ContactsList">
      {data.length === 0 ? (
        <h1>Loading...</h1>
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
