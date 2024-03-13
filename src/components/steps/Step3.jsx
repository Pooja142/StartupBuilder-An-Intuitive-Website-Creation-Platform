import { Box, Grid, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";

import {
  renderButton,
  renderInputText,
  renderSelect,
  renderText,
} from "../Common/displayComponents";

export default function Step3({
  state,
  handleOnChange,
  handleNext,
  handlePrev,
}) {
  let history = useHistory();
  const [details, setDetails] = useState({
    bName: "",
    btype: "",
    state: "",
    Websiteurl: "",
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { bName, btype, state, Websiteurl } = details;

    const res = await fetch(
      "https://startup-builder-835b1-default-rtdb.firebaseio.com/step3.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bName,
          btype,
          state,
          Websiteurl,
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
        {renderText({ label: "More Information", variant: "h6" })}
      </Box>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Business Name *"
            onChange={(e) => setDetails({ ...details, bName: e.target.value })}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Business type *"
            onChange={(e) => setDetails({ ...details, btype: e.target.value })}
          />{" "}
        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          {renderSelect({
            label: "Country",
            name: "country",
            state,
            options: [
              { key: "India", value: "India" },
              { key: "United State", value: "United State" },
              { key: "other", value: "other" },
            ],
          })}
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{ marginBottom: "10px" }}>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="State *"
            onChange={(e) => setDetails({ ...details, state: e.target.value })}
          />{" "}
        </Grid>
        <Grid item xs={12} sm={6}>
          <input
            id="form_email"
            type="rname"
            name="rname"
            className="form-control"
            placeholder="Websiteurl *"
            onChange={(e) =>
              setDetails({ ...details, Websiteurl: e.target.value })
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
          {renderButton({ label: "finish", handleOnClick: handleNext })}
        </Box>
      </Grid>
    </Paper>
  );
}
