import { useAppDispatch, useAppSelector } from "shared/libs/redux";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { themeSwitch } from "entitites/theme/model/theme";

export const ThemeSwitch = () => {
  const mode = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <IconButton
      sx={{ mr: 1 }}
      onClick={() => dispatch(themeSwitch())}
      color="inherit"
    >
      {mode.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
