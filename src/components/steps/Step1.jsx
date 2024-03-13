import { Box, Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  renderButton,
  renderInputText,
  renderSelect,
  renderText,
  handleNext,
} from "../Common/displayComponents";

export default function Step1({ state, handleOnChange, handleNext }) {
  let history = useHistory();
  const [details, setDetails] = useState({
    fName: "",
    lName: "",
    email: "",
    mobile: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { fName, lName, email, mobile, message } = details;

    const res = await fetch(
      "https://startup-builder-835b1-default-rtdb.firebaseio.com/step1.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          mobile,
        }),
      }
    );
    alert("submitted");
  };

  return (
    <Paper
      component={Box}
      p={2}
      style={{ marginBottom: "10px", border: "2px solid black" }}
    >
      <form>
        <Box mt={6} mb={6}>
          {renderText({ label: "Please Fill Personal Details", variant: "h6" })}
        </Box>
        <Grid container spacing={2} style={{ marginBottom: "10px" }}>
          <Grid item xs={12} sm={6}>
            <input
              id="form_email"
              type="name"
              name="name"
              className="form-control"
              placeholder="Please enter your First Name *"
              onChange={(e) =>
                setDetails({ ...details, fName: e.target.value })
              }
            />{" "}
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              id="form_email"
              type="email"
              name="email"
              className="form-control"
              placeholder="Please enter your Last Name *"
              onChange={(e) =>
                setDetails({ ...details, lName: e.target.value })
              }
            />{" "}
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginBottom: "10px" }}>
          <Grid item xs={12}>
            {renderSelect({
              label: "Gender",
              name: "gender",
              state,
              options: [
                { key: "male", value: "male" },
                { key: "female", value: "female" },
                { key: "other", value: "other" },
              ],
              handleOnChange,
            })}
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginBottom: "10px" }}>
          <Grid item xs={12} sm={6}>
            <input
              id="form_need"
              type="number"
              name="phone"
              className="form-control"
              placeholder="Please enter your phone no *"
              required
              data-error="Valid Phone is required."
              onChange={(e) =>
                setDetails({ ...details, mobile: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <input
              id="form_need"
              type="text"
              name="phone"
              className="form-control"
              placeholder="Please enter your Email  *"
              required
              data-error="Valid Phone is required."
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} justify="flex-end">
          <Box p={2}>
            <input
              type="submit"
              className="btn btn-light "
              value="Submit"
              onClick={PostData}
            />{" "}
          </Box>
          <Box p={2}>
            {renderButton({ label: "next", handleOnClick: handleNext })}
          </Box>
        </Grid>
      </form>
    </Paper>
  );
}
