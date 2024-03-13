import { Button, MenuItem, TextField, Typography } from "@material-ui/core";
import React, { useState, useMemo } from "react";
import Select from "react";
import countryList from "react-select-country-list";
// import copy, {copyToClipboard} from 'copy-to-clipboard';

export const renderText = ({ label, color, align, variant }) => (
  <Typography
    color={color ? color : "primary"}
    align={align ? align : "center"}
    variant={variant ? variant : "h6"}
  >
    {label}
  </Typography>
);

export const Text = ({ label, color, align, variant }) => (
  <Typography
    color={color ? color : "primary"}
    align={align ? align : "left"}
    variant={variant ? variant : "h9"}
  >
    {label}
  </Typography>
);

export const renderInputText = ({
  label,
  name,
  color,
  state,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      size="small"
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleOnChange}
    />
  );
};
export const renderSelect = ({
  label,
  name,
  color,
  state,
  options,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      select
      label={label}
      color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      size="small"
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleOnChange}
    >
      {options.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.key}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CountrySelector;
function CountrySelector() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}

export const renderButton = ({ label, variant, color, handleOnClick }) => (
  <Button
    variant={variant ? variant : "outlined"}
    color={color ? color : "primary"}
    size="small"
    onClick={handleOnClick}
  >
    {label}
  </Button>
);
