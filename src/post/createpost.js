import React, { useEffect, useState } from "react";
import { Button, TextField, Grid, ButtonGroup } from "@material-ui/core";
import { connect } from "react-redux";
import NewID from "../utils/newID";

const Createpost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const updateDate = (id) => {
    const data = {
      title,
      body,
    };
    props.dispatch({
      type: "UPDATE",
      id: id,
      data: data,
    });
  };

  useEffect(() => {
    if (props.currentPost.length > 0) {
      setBody(props.currentPost[0].body);
      setTitle(props.currentPost[0].title);
    }
  }, [props.currentPost]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: NewID(),
      title,
      body,
    };
    props.dispatch({
      type: "ADD_POST",
      data,
    });
  };
  return (
    <div>
      <Grid container justify="center" direction="row">
        <Grid item style={{ width: "75%" }}>
          <Grid container direction="column" justify="center" spacing={5}>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={3}>
                  <Grid item>
                    <TextField
                      type="text"
                      placeholder="Title"
                      fullWidth
                      name="title"
                      variant="outlined"
                      required
                      autoFocus
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="text"
                      placeholder="Body"
                      fullWidth
                      multiline
                      rows={4}
                      rowsMax={8}
                      name="body"
                      variant="outlined"
                      required
                      value={body}
                      onChange={(event) => setBody(event.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <ButtonGroup
                      color="secondary"
                      aria-label="outlined secondary button group"
                    >
                      <Button variant="contained" color="primary" type="submit">
                        Add Note
                      </Button>
                      <Button
                        disabled={
                          Object.keys(props.currentPost).length === 0
                            ? true
                            : false
                        }
                        variant="contained"
                        color="secondary"
                        type="button"
                        onClick={() => updateDate(props.currentPost[0].id)}
                      >
                        Save Note
                      </Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentPost: state.currentPost,
  };
};

export default connect(mapStateToProps)(Createpost);
