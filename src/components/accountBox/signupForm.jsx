import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  let history = useHistory();
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("Successfully register");
      history.push("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        {/* <Input type="text" placeholder="Full Name" /> */}
        <Input
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        {/* <Input type="password" placeholder="Confirm Password" /> */}
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={register}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink>
        Already have an account?
        <BoldLink onClick={switchToSignin}>Signin</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
