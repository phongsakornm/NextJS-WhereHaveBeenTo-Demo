import React, { Component } from "react";
import ContentItem from "./ContentItem";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";


export class ContentList extends Component {
  render() {
    return this.props.contentList.map(item => (
      <Grid item xs={12} sm={6} md={4}  key={item.id}>
        <Card style={{ padding: 8 }}>
          <ContentItem contentItem={item} />
        </Card>
      </Grid>
    ));
  }
}

export default ContentList;
