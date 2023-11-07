import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import { PostCard } from "entitites/posts/ui";
import { useGetPostByIdQuery } from "entitites/posts/api/postService";

export const PostPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    data: post,
    error,
    isLoading,
    isUninitialized,
    isError,
  } = useGetPostByIdQuery(+location.pathname.split("/")[2]);

  if (isLoading || isUninitialized) {
    return <LinearProgress />;
  }

  if (isError) {
    return <Box>{JSON.stringify(error)}</Box>;
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      mt={1}
      flexDirection="column"
      gap={1}
    >
      <PostCard {...post} />
      <Button onClick={() => navigate("/")}>Назад</Button>
    </Box>
  );
};
