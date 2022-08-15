import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";

const AddContact = () => {
  return (
    <div style={{marginTop:"10px"}}>
      <FormControl isRequired>
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          placeholder="Enter your first name"
          style={{ marginRight: "5px" }}
        />
        <Input
          htmlSize={30}
          width="auto"
          type="text"
          placeholder="Enter your last name"
          style={{ marginRight: "5px" }}
        />
        <Input
          htmlSize={30}
          width="auto"
          type="tel"
          placeholder="Enter your mobile"
          style={{ marginRight: "5px" }}
        />
        <Button
          mt={4}
          colorScheme="teal"
          type="submit"
          style={{ marginTop: "1px" }}
        >
          Add Contact
        </Button>
      </FormControl>
    </div>
  );
};

export default AddContact;
