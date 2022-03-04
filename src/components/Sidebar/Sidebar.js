import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectItem from "./Select";
import { IconButton, Box, FormGroup, Stack } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  blue,
  green,
  orange,
  styleSidebarBox,
  styleSidebarStack,
} from "../../styles/styles";

const Sidebar = () => {
  const currentFont = useSelector((state) => state.fontSize);
  const backgroundColor = useSelector((state) => state.backColor);
  const dispatch = useDispatch();
  const font = {
    value: currentFont,
    labelName: "label-font",
    actionType: "FONT_SIZE",
    text: "Font Size",
    menuItems: [
      { selectValue: "default", selectText: "Default", id: 1 },
      { selectValue: "small", selectText: "Small", id: 2 },
      { selectValue: "large", selectText: "Large", id: 3 },
    ],

    disabledText: "Font",
  };
  const color = {
    value: backgroundColor,
    labelName: "label-color",
    actionType: "BACKGROUND_COLOR",
    text: "Background Color",
    menuItems: [
      { selectValue: orange, selectText: "Orange", id: 1 },
      { selectValue: blue, selectText: "Blue", id: 2 },
      { selectValue: green, selectText: "Green", id: 3 },
    ],

    disabledText: "Color",
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };
  return (
    <Box className="sidebar" sx={styleSidebarBox}>
      <FormGroup className="sidebar-form">
        <Stack sx={styleSidebarStack} className="forms" spacing={2}>
          <IconButton
            onClick={(e) => onClickHandler(e)}
            sx={{ fontSize: "50px" }}
            className="logout"
          >
            <LogoutIcon fontSize="inherit"></LogoutIcon>
          </IconButton>
          <SelectItem info={font} />
          <SelectItem info={color} />
        </Stack>
      </FormGroup>
    </Box>
  );
};

export default Sidebar;
