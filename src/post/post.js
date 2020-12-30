import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";

const Post = (props) => {
  return (
    <div>
      <List component="nav" aria-label="post">
        <ListItem button onClick={() => props.dispatch({ type: "SELECTED_POST", id: props.post.id })}>
          <ListItemText
            primary={props.post.title}
            secondary={props.post.body}
          />
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() =>
                props.dispatch({ type: "DELETE_POST", id: props.post.id })
              }
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default connect()(Post);
