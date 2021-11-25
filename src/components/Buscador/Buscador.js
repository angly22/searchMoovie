import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { getMovies, addMovieFavorite } from "../../actions";
import GradeIcon from '@material-ui/icons/Grade';



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({title:''})
  }

  render() {
    const { title } = this.state;
    return (
      <div className="divUl">
        <div className= "div">
        <p className="p">
          Bienvenido, al mejor buscador de películas.<br></br><br></br>
          Acá encontraras toda la información relevante de tus títulos taquilleros preferidos 
          Y también  podrás armar tu lista de peliculas favoritas.<br></br><br></br>
          Que lo disfrutes!!!</p> 
          </div>     
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label  className="label" htmlFor="title">Que película Buscas?</label>
            <input className="input"
            placeholder="             Escribe aqui"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className="button" type="submit">Buscar</button>
        </form>
        <ul className="ul">
         {this.props.movies?.map(ele => ( //? funciona como if this.props.movies existe.
          <div >
            <Link to={`/movie/${ele.imdbID}`}>
              <li className="li" key={ele.imdbID}>  {ele.Title}  </li>
            </Link>
            <div>
            <button  onClick={() => this.props.addMovieFavorite({Title: ele.Title, imdbID: ele.imdbID})}><GradeIcon className='icon'/></button>
          </div>
          </div>
            ))
         }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);



