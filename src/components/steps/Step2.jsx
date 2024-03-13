import { Box, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import {
  renderButton,
  renderInputText,
  renderText,
} from "../Common/displayComponents";

export default function Step2({
  state,
  handleOnChange,
  handleNext,
  handlePrev,
}) {
  let history = useHistory();
  const [details, setDetails] = useState({
    rName: "",
    accName: "",
    bank: "",
    acctype: "",
    ifsccode: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { rName, accName, bank, acctype, ifsccode } = details;

    const res = await fetch(
      "https://startup-builder-835b1-default-rtdb.firebaseio.com/step2.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rName,
          accName,
          bank,
          acctype,
          ifsccode,
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
      <Box mt={6} mb={6}>
        {renderText({ label: "Add Your Bank Details", variant: "h6" })}
      </Box>

      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Recepient Name *"
            onChange={(e) => setDetails({ ...details, rName: e.target.value })}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Account Number*"
            onChange={(e) =>
              setDetails({ ...details, accName: e.target.value })
            }
          />{" "}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <input
          id="form_email"
          type="rname"
          name="rname"
          className="form-control"
          placeholder="Bank Name*"
          onChange={(e) => setDetails({ ...details, bank: e.target.value })}
        />{" "}
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Account type*"
            onChange={(e) =>
              setDetails({ ...details, acctype: e.target.value })
            }
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="IFSC code*"
            onChange={(e) =>
              setDetails({ ...details, ifsccode: e.target.value })
            }
          />{" "}
        </Grid>
      </Grid>

      <Grid container spacing={2} justify="flex-end">
        <Box p={2}>
          <input
            type="submit"
            className="btn btn-light"
            value="Submit"
            onClick={PostData}
          />{" "}
        </Box>
        <Box p={2}>
          {renderButton({
            label: "Back",
            handleOnClick: handlePrev,
            color: "default",
          })}
        </Box>
        <Box p={2}>
          {renderButton({ label: "next", handleOnClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
}
