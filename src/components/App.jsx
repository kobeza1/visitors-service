import { useEffect, useState } from "react";
import {
  addVisitor,
  deleteVisitor,
  fetchVisitors,
  updateVisitor,
} from "../utils/api-service";
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
  const [current, setCurrent] = useState({});

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

  const handleDelete = (ID) => {
    const newArray = visitors.filter((items) => items.ID !== ID);
    deleteVisitor(ID);
    setVisitors(newArray);
  };

  const handleClose = () => {
    setAdd(!add);
  };

  const handleEditClose = () => {
    setEdit(!edit);
  };

  const handleClick = (object) => {
    setCurrent(object);
    handleEditClose();
  };

  const handleSort = (newArray) => {
    setVisitors([...newArray]);
  };

  const sendData = (data) => {
    const { name, surname } = data;
    const time = new Date().toLocaleString();
    const newVisitor = {
      ID: nanoid(),
      name: name,
      lastName: surname,
      createDate: time,
    };
    addVisitor(newVisitor);
    setVisitors([...visitors, newVisitor]);
  };

  const handleEdit = async (data) => {
    const { name, surname } = data;
    const { ID, createDate } = current;
    const newArray = visitors.filter((items) => items.ID !== ID);

    const update = {
      name: name,
      lastName: surname,
    };
    updateVisitor(ID, update);

    setVisitors([{ ID, createDate, ...update }, ...newArray]);
  };

  return (
    <Container>
      <Table
        visitors={visitors}
        handleSort={handleSort}
        handleDelete={handleDelete}
        handleClick={handleClick}
        show={edit}
      />
      <AddButton handleClick={handleClose} />
      <ModalComponent type={"edit"} handleClose={handleEditClose} show={edit}>
        <FormComponent
          type={"edit"}
          sendData={sendData}
          handleClose={handleEditClose}
          handleEdit={handleEdit}
        />
      </ModalComponent>
      <ModalComponent handleClose={handleClose} show={add}>
        <FormComponent sendData={sendData} handleClose={handleClose} />
      </ModalComponent>
    </Container>
  );
};

export default App;
