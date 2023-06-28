import { useEffect, useState } from "react";
import { addVisitor, fetchVisitors } from "../utils/api-service";
import { AddButton } from "./AddButton/AddButton";
import { ModalComponent } from "./Modal/Modal";
import { Table } from "./Table/Table";
import { Container } from "./Container/Container";
import { FormComponent } from "./Form/Form";
import { nanoid } from "nanoid";

const App = () => {
  const [visitors, setVisitors] = useState([]);
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const fetchFunction = async () => {
    const fetch = await fetchVisitors();
    setVisitors(fetch);
  };

  useEffect(() => {
    try {
      fetchFunction();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleDelete = (id) => {
    console.log(visitors.filter((items) => items.userId !== id));
  };

  const handleClose = () => {
    setAdd(!add);
  };

  const handleEditClose = () => {
    setEdit(!edit);
  };

  const handleSort = (newArray) => {
    setVisitors([...newArray]);
    // console.log(newArray);
  };

  const sendData = (data) => {
    const { name, surname } = data;
    const time = new Date();
    const now = time.toLocaleString();
    console.log(time);
    console.log(now);
    const newVisitor = {
      userId: nanoid(),
      name: name,
      lastName: surname,
      time: now,
    };
    addVisitor(newVisitor);
    setVisitors([...visitors, newVisitor]);
  };

  return (
    <Container>
      <Table
        visitors={visitors}
        handleSort={handleSort}
        handleDelete={handleDelete}
        handleClick={handleEditClose}
        show={edit}
      />
      <AddButton handleClick={handleClose} />
      <ModalComponent type={"edit"} handleClose={handleEditClose} show={edit}>
        <FormComponent
          type={"edit"}
          sendData={sendData}
          handleClose={handleEditClose}
        />
      </ModalComponent>
      <ModalComponent handleClose={handleClose} show={add}>
        <FormComponent sendData={sendData} handleClose={handleClose} />
      </ModalComponent>
    </Container>
  );
};

export default App;
