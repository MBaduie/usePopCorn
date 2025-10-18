import { useState } from "react";
import Button from "../../UI/Button/Button";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <Button isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
