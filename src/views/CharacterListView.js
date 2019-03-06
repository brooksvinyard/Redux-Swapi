import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {
  // constructor() {
  //   super();

  // }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      
      return (
        <Loader type="Triangle" color="#7f7878" height="90" width="90" />
      )
    }
    return (
      <div className="CharactersList_wrapper">
        {this.props.characters.results && <CharacterList characters={this.props.characters.results} />}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  
  isLoading: state.charsReducer.isLoading,
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
});

export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
