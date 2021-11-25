import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import './Favorites.css';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="h2">Películas Favoritas</h2>
        <ul className="ul">
          {
            this.props.favs?.map( ele =>(
              <div>
                                <Link to={`/movie/${ele.imdbID}`}>  

              <li className="li" key={ele.imdbID}>{ele.Title}  </li>
              </Link>
             
                <button  onClick={()=>{this.props.removeMovieFavorite(ele.imdbID)}} className='x'> <DeleteForeverIcon className='icono' /> </button>
          </div>   )

            )
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    favs: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: id => dispatch(removeMovieFavorite(id)),
   
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (ConnectedList);
