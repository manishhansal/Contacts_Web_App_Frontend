import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "./Loader";

const myCard = {
  width: "300px",
  border: "1px solid #cecece",
  textAlign: "center",
  marginLeft: "40%",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  marginTop: "20px",
  padding: "5px",
};

const ContactDetails = () => {
  const { contactId } = useParams();
  const get = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(() => get);
  }, []);

  return (
    <div style={myCard}>
      {data.length === 0 ? (
        <Loader/>
      ) : (
        data
          .filter((contact) => contact._id === contactId)
          .map((item) => {
            return (
              <div key={item._id}>
                <h3>{`First Name : ${item.first_name}`}</h3>
                <h3>{`Last Name : ${item.last_name}`}</h3>
                <h3>{`Phone : ${item.phone}`}</h3>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/contacts/${item._id}/${item._id}`}
                >
                  <button type="button" class="btn btn-info">
                    Send Message
                  </button>
                </Link>
              </div>
            );
          })
      )}
    </div>
  );
};

export default ContactDetails;
