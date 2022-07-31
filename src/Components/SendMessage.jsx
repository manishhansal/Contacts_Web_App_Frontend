import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SendMessage = () => {
  const { contactId } = useParams();
  const get = JSON.parse(localStorage.getItem("data"));
  const [data, setData] = useState([]);
  useEffect(() => {
    let filter = get.filter((item) => item._id === contactId);
    setData(() => filter[0]);
  }, []);

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const value = `Hi! Your OTP is: ${getRandomInteger(0, 9)}${getRandomInteger(
    0,
    9
  )}${getRandomInteger(0, 9)}${getRandomInteger(0, 9)}${getRandomInteger(
    0,
    9
  )}${getRandomInteger(0, 9)}.`;

  let save = {
    firstName: data.first_name,
    lastName: data.last_name,
    phone: data.phone,
    message: value,
  };

  const saveMessage = () => {
    const payloadjson = JSON.stringify(save);

    fetch(`http://localhost:9211/messages`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {})
      .catch((err) => console.log(err));
  };

  const handleSubmit = () => {
    const details = {
      phone: data.phone,
      message: value,
    };
    const payloadjson = JSON.stringify(details);

    fetch(`http://localhost:9211/sendMessage`, {
      method: "POST",
      body: payloadjson,
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          alert("Message Sent successfully..");
          saveMessage();
        } else {
          alert("Error.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Enter your message."
          id="floatingTextarea2"
          style={{
            height: "100px",
            fontSize: "30px",
            marginBottom: "8px",
            textAlign: "center",
          }}
          value={value}
          readOnly
        ></textarea>
        <label for="floatingTextarea2">Message</label>
        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
