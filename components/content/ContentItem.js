import React, { Component } from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Link from "next/link";

export class ContentItem extends Component {
  render() {
    const {
      id,
      title,
      shortDetail,
      lastUpdate,
      imagesName
    } = this.props.contentItem;
    return (
      <div>
        <Link prefetch as={`/content/${id}`} href={`/content?msgId=${id}`}>
          <CardActionArea>
            <CardMedia
              style={{ height: 240 }}
              image={"/static/images/content/" + imagesName}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ height: 70 }}
              >
                {shortDetail}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <CardActions>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <small>Last updated {lastUpdate} ago</small>
        </CardActions>
      </div>
    );
  }
}

export default ContentItem;
