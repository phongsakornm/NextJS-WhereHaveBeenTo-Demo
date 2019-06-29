import React, { Component } from "react";
import ContentList from "../components/content/ContentList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../shared/Loading";
import Axios from "axios";
import Grid from "@material-ui/core/Grid";
import Layout from "../layout/Layout";

export class index extends Component {
  componentDidMount() {
    this.getContents();
  }

  state = {
    loading: true,
    contents: []
  };

  getContents = () => {
    var dataArray = [];
    var url =
      "https://my-json-server.typicode.com/phongsakornm/myjson/contents";
    Axios.get(url).then(result => {
      result.data.forEach(item => {
        dataArray.push(item);
      });
      this.setState({ contents: dataArray });
      this.setState({ loading: false });
    });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        {this.state.loading ? (
          <Loading />
        ) : (
            <Layout>
              <div style={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <ContentList contentList={this.state.contents} />
                </Grid>
              </div>
            </Layout>
          )}
      </div>
    );
  }
}

export default index;
