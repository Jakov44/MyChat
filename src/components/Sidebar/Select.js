import React from "react";
import { useDispatch } from "react-redux";
import { Box, MenuItem, Select, InputLabel } from "@mui/material";

const SelectItem = ({ info }) => {
  const dispatch = useDispatch();
  const menuItems = info.menuItems.map(({ id, selectValue, selectText }) => {
    return (
      <MenuItem key={id} value={selectValue}>
        {selectText}
      </MenuItem>
    );
  });

  return (
    <Box>
      {" "}
      <InputLabel id={info.labelName} className="label">
        {info.text}
      </InputLabel>
      <Select
        labelId={info.labelName}
        className="select"
        autoWidth={true}
        value={info.value}
        onChange={(e) =>
          dispatch({ type: info.actionType, payload: e.target.value })
        }
      >
        <MenuItem disabled value="">
          <em>{info.disabledText}</em>
        </MenuItem>
        {menuItems}
      </Select>
    </Box>
  );
};

export default SelectItem;
