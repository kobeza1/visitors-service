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

  useEffect(() => {
    try {
      fetchVisitors().then((res) => {
        setVisitors(res);
        // console.log(`res.data`, res);
        // console.log(`visitors`, visitors);
      });
    } catch (error) {
      console.log(error);
    }
  }, [visitors]);

  const handleDelete = (id) => {
    console.log(visitors.filter((items) => items.userId !== id));
  };

  const handleClose = () => {
    setAdd(!add);
  };

  const handleEditClose = () => {
    setEdit(!edit);
  };

  const sendData = (data) => {
    const { name } = data;
    const newVisitor = { userId: nanoid(), name: name };
    addVisitor(newVisitor);
  };

  return (
    <Container>
      <Table
        visitors={visitors}
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
