import { Grid, AppBar, Typography, Toolbar, Box } from "@material-ui/core";
import React from "react";
import Allpost from "./post/Allposts";
import CreatePost from "./post/createpost";

const Home = () => {
  return (
    <>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">G Notes</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box m={3}>
        <Grid container>
          <Grid item xs={3}>
            <Allpost />
          </Grid>
          <Grid item xs={9}>
            <CreatePost />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
