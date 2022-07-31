import React, { useEffect, useState } from "react";

const Messages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`http://localhost:9211/messages`)
      .then((res) => res.json())
      .then((d) => {
        let rev = [...d.contacts].reverse();
        setData(() => rev);
      });
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
        <h1>Loading...</h1>
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