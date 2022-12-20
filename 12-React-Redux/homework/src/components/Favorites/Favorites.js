import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions/index"
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  constructor(props){
    super(props)
  }

  handlerClick(id) {
    this.props.removeMovieFavorite(id)
    console.log(id);
    console.log(this.props.favorites);
  }
    
    render() {
      return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.favorites.map(fav => {
              return(
                <li key={fav.Id}>
                  <Link to ={`/movie/${fav.Id}`}>
                    <span>{fav.Title}</span>
                  </Link>
                    <button onClick={() => this.handlerClick(fav.Id)}>X</button>
                </li>
              )
            })
          }
          {/* Aqui deberias poner tu lista de peliculas! */}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { favorites: state.favorites }
}

const mapDispatchToProps = (dispatch) => {
  return { removeMovieFavorite: (id) => { dispatch(removeMovieFavorite(id)) }}
}

export default connect (mapStateToProps, mapDispatchToProps) (ConnectedList);