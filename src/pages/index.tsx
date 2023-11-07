import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { ListPage } from "./list";
import { PostPage } from "./post";
import { Header } from "widgets";

export const Routing = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />
      <Routes>
        <Route path="*" element={<ListPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Box>
  );
};
