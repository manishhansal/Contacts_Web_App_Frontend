import React, { useState } from "react";
import { FormControl, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.first_name !== "" && form.last_name !== "" && form.phone !== "") {
      const payloadjson = JSON.stringify(form);
      const url =
      "https://my-contacts-web-app.herokuapp.com/contacts" ||
      "http://localhost:9211/contacts";
      fetch(url, {
        method: "POST",
        body: payloadjson,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          // console.log(response);
          if (response.status === 409) {
            alert("Mobile Number Already Exists.");
          } else if (response.status === 200) {
            alert("Conatct Added Successfully.");
            navigate("/contacts");
          } else {
            alert("Error Occured.");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Email and Password are required.");
    }
  };

  const { first_name, last_name, phone } = form;
  return (
    <div style={{ marginTop: "10px" }}>
      <FormControl isRequired>
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          placeholder="Enter your first name"
          style={{ marginRight: "5px" }}
          id="first_name"
          value={first_name}
          onChange={handleChange}
        />
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          placeholder="Enter your last name"
          style={{ marginRight: "5px" }}
          id="last_name"
          value={last_name}
          onChange={handleChange}
        />
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          maxLength="10"
          placeholder="Enter your valid mobile"
          style={{ marginRight: "5px" }}
          id="phone"
          value={phone}
          onChange={handleChange}
        />

        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          style={{ marginTop: "1px" }}
          onClick={handleSubmit}
        >
          Add Contact
        </Button>
      </FormControl>
    </div>
  );
};

export default AddContact;
