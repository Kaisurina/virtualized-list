import { CSSProperties, memo } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { IPost } from "entitites/posts/model/posts";
import Button from "@mui/material/Button";

interface ItemProps {
  style: CSSProperties;
  data: IPost;
  width: number;
}

export const PostItem = memo(function ({ style, data, width }: ItemProps) {
  const navigate = useNavigate();
  return (
    <ListItem
      secondaryAction={
        <Button size="small" onClick={() => navigate(`/post/${data.id}`)}>
          Просмотр
        </Button>
      }
      sx={{ ...style }}
      key={data.id}
      disablePadding
    >
      <ListItemButton>
        <ListItemText
          primary={`${data.id}: ${data.title}`}
          secondary={data.body}
          secondaryTypographyProps={{
            width: width - 50,
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        />
      </ListItemButton>
    </ListItem>
  );
});
