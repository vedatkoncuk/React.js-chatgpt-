import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "./userSlice";

function User() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (newName) => {
    const name = newName;
  };
}

const number = generic;