import Button from "react-bootstrap/Button";

export const AddButton = ({ handleClick }) => {
  return (
    <Button onClick={() => handleClick()} variant="dark">
      Add new visitor
    </Button>
  );
};
