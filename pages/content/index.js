import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../../shared/Loading";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Layout from "../../layout/Layout";
import Grid from '@material-ui/core/Grid';
import firebase from "firebase";
import MessageList from "../../components/message/MessageList";
import MessageBox from "../../components/message/MessageBox";

class contentDetail extends Component {
  constructor(props) {
    super(props);

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "xxxxxxxxxx",
      authDomain: "xxxxxxxxxx",
      databaseURL: "xxxxxxxxxx",
      projectId: "xxxxxxxxxx",
      storageBucket: "xxxxxxxxxx",
      messagingSenderId: "xxxxxxxxxx",
      appId: "xxxxxxxxxx"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    this.state = {
      loading: true,
      msgId: this.props.router.query.msgId,
      contents: ""
    };
  }

  componentDidMount() {
    this.getContentsById(this.state.msgId);
  }

  getContentsById = async id => {
    const res = await fetch(
      "https://my-json-server.typicode.com/phongsakornm/myjson/contents/" + id
    );
    const data = await res.json();

    if (data.id == id) {
      this.setState({ contents: data });
      this.setState({ loading: false });
    } else {
      console.error(
        this.props.url,
        "can't get https://my-json-server.typicode.com/phongsakornm/myjson/contents/" +
        id
      );
    }
  };

  render() {
    return (
      <div>
        <CssBaseline />
        {this.state.loading ? (
          <Loading />
        ) : (
            <Layout>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={9}>
                  <Paper elevation={0}>
                    <Typography variant="h5" component="h3">
                      {this.state.contents.title}
                    </Typography>
                    <img
                      src={
                        "/static/images/content/" + this.state.contents.imagesName
                      }
                      alt="background"
                      width="100%"
                    />
                    <Typography component="p">
                      {this.state.contents.shortDetail}
                    </Typography>
                  </Paper>
                  <hr />
                  <MessageList db={firebase} msgId={this.state.msgId} />
                  <MessageBox db={firebase} msgId={this.state.msgId} />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Paper elevation={0}>
                    <Typography variant="h6" gutterBottom>
                      About
                    </Typography>
                    <Typography>
                      Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                      amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Layout>
          )}
      </div>
    );
  }
}

export default withRouter(contentDetail);