import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {

componentDidMount(){
    this.props.getMovieDetail(this.props.match.params.id)
}

    render() {
        return (
            <div className="movie-detail">
                {console.log(this.props.movieDetail.Title)}
                Detalle de la pelicula 
                <p>{this.props.movieDetail.Title}</p>
                <p>{this.props.movieDetail.Year}</p>
                <p>{this.props.movieDetail.Genre}</p>
                <p>{this.props.movieDetail.Plot}</p>
                <img src={this.props.movieDetail.Poster}></img>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { movieDetail: state.movieDetail }
}

const mapDispatchToProps = (dispatch) => {
    return { getMovieDetail: (id) =>{ dispatch(getMovieDetail(id) ) }}
}


export default connect( mapStateToProps, mapDispatchToProps ) (Movie);