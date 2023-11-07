import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IPost } from "entitites/posts/model/posts";

export const PostCard = (props: IPost) => {
  const { userId, id, title, body } = props;
  return (
    <Card sx={{ width: 575 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          UserID: {userId}
        </Typography>
        <Typography variant="h5" component="div">
          Title: {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Id: {id}
        </Typography>
        <Typography variant="body2">Body: {body}</Typography>
      </CardContent>
    </Card>
  );
};
