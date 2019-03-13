import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Character from './Character';

class CharacterList extends Component {
    componentWillMount(){
        this.props.getCharacters();
    }

    render(){
        const { characters } = this.props;
        return(
            <div>
                <h1>Rick & Morty</h1>
                <p>List of characters</p>
                 {characters.map((character, indx) => (
                     <Character key={indx} {...character} />
                 ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({characters: state.characters});

export default connect(mapStateToProps, actions)(CharacterList);