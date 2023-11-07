import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeSwitch } from "features/theme/ui";

export const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar variant="dense" disableGutters>
          <Typography variant="h6" color="inherit" component="div">
            Virtualized list + Infinite scroll
          </Typography>
          <ThemeSwitch />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
