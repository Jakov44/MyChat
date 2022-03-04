import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IconButton,
  Box,
  MenuItem,
  Select,
  InputLabel,
  FormGroup,
  Stack,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { orange, blue, green } from "../styles/colors";

const RoomsList = () => {
  const currentFont = useSelector((state) => state.fontSize);
  const backgroundColor = useSelector((state) => state.backColor);
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };
  return (
    <Box
      className="sidebar"
      sx={{
        display: "flex",
        width: "15%",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        paddingTop: "2%",
      }}
    >
      <FormGroup className="sidebar-form">
        <Stack
          sx={{
            direction: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
          className="forms"
          spacing={2}
        >
          <IconButton
            onClick={(e) => onClickHandler(e)}
            sx={{ fontSize: "50px" }}
            className="logout"
          >
            <LogoutIcon fontSize="inherit"></LogoutIcon>
          </IconButton>
          <InputLabel id="label-font" className="label">
            Font Size
          </InputLabel>
          <Select
            labelId="label-font"
            className="select"
            autoWidth={true}
            value={currentFont}
            onChange={(e) =>
              dispatch({ type: "FONT_SIZE", payload: e.target.value })
            }
          >
            <MenuItem disabled value="">
              <em>Font</em>
            </MenuItem>
            <MenuItem value="default">Default</MenuItem>
            <MenuItem value="small">Small</MenuItem>
            <MenuItem value="large">Large</MenuItem>
          </Select>
          <InputLabel id="label-color" className="label">
            Background Color
          </InputLabel>
          <Select
            labelId="label-color"
            className="select"
            autoWidth={true}
            value={backgroundColor}
            onChange={(e) =>
              dispatch({ type: "BACKGROUND_COLOR", payload: e.target.value })
            }
          >
            <MenuItem disabled value="">
              <em>Color</em>
            </MenuItem>
            <MenuItem value={orange}>Orange</MenuItem>
            <MenuItem value={blue}>Blue</MenuItem>
            <MenuItem value={green}>Green</MenuItem>
          </Select>
        </Stack>
      </FormGroup>
    </Box>
  );
};

export default RoomsList;
