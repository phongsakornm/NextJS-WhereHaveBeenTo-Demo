import React, { Component } from "react";
import Axios from "axios";
import MovieList from "../../components/movie/MovieList";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Loading from "../../shared/Loading";
import Layout from "../../layout/Layout";

export class movie extends Component {
  componentDidMount() {
    this.search("Avengers");
  }

  state = {
    loading: true,
    movie: []
  };

  search = keyword => {
    setTimeout(() => {
      var dataArray = [];
      var url =
        "https://api.themoviedb.org/3/search/movie?api_key=261651a4c887f2acaa0728792d506b39&query=" +
        keyword;
      Axios.get(url).then(result => {
        result.data.results.forEach(item => {
          item.poster = "https://image.tmdb.org/t/p/w500/" + item.poster_path;
          dataArray.push(item);
        });
        this.setState({ movie: dataArray });
        this.setState({ loading: false });
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <CssBaseline />
        {this.state.loading ? (
          <Loading />
        ) : (
            <Layout>
              <TextField
                id="outlined-with-placeholder"
                label="ค้นหาหนัง"
                placeholder="ชื่อหนัง"
                style={{ width: "100%" }}
                margin="normal"
                variant="outlined"
                onChange={event => {
                  this.search(event.target.value);
                }}
              />
              <MovieList movielist={this.state.movie} />
            </Layout>
          )}
      </div>
    );
  }
}

export default movie;
