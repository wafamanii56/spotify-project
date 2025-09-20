
import './App.css'
import {FormControl, Container, Button, InputGroup } from "react-bootstrap";

// Declare variables from .env
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;


function App() {
  

  return (
   <>
    <Container>
      <InputGroup>
        <FormControl
          placeholder="Search for Artist"
          type="input"
          aria-label="Search for Artist"
          onKeyDown={(e) => {}}//Search Function
          onChange={(e) => {}} //setSearch
          style={{
            width: "300px",
            height: "35px",
            borderWidth: "0px",
            borderStyle: "solid",
            borderRadius: "5px",
            marginRight: "10px",
            paddingLeft: "10px",
          }}
        />

        <Button onClick={() => {}}>Search</Button>

      </InputGroup>
    </Container>


    </>
  )
}

export default App
