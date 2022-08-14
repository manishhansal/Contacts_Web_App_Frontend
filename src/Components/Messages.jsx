import React, { useEffect, useState } from "react";
import Loader from "./Loader";

const Messages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const url =
      "https://my-contacts-web-app.herokuapp.com/messages" ||
      "http://localhost:9211/messages";
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        let rev = [...d.contacts].reverse();
        setData(() => rev);
      })
      .catch((err) => console.log(err));
  };

  const myCard = {
    width: "300px",
    border: "1px solid #cecece",
    textAlign: "center",
    marginLeft: "40%",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginTop: "20px",
    padding: "5px",
  };
  return (
    <div>
      {data.length === 0 ? (
        <Loader/>
      ) : (
        data.map((item) => {
          return (
            <div key={item._id} style={myCard}>
              <p>{`Date and Time: ${item.date + " " + item.time}`}</p>
              <h3>{`To: ${item.firstName + " " + item.lastName}(${
                item.phone
              })`}</h3>
              <h3>{`Message: ${item.message}`}</h3>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Messages;
