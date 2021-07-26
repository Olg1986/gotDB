import React, {Component}from 'react';
import RowBlock from '../rowBlock';
import ItemList from '../itemList';
import CharDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotServices';

export default class BookPage extends Component {

    gotService = new gotService();
    state = {
        selectedBook: 5,
        error: false
    }

    componentDidCatch() {
        this.setState({
           error: true
        })
    }

    selectedBook = (id) => {
        this.setState({
            selectedBook: id
        })
    }


    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllBooks}
            renderItem={({name}) => `${name}`}/>
        )

        const charDetails = (
            <CharDetails charId={this.state.selectedChar}>
                <Field field=' numberOfPages' label=' Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </CharDetails>
        )

        return (
            <RowBlock left={itemList} right={charDetails}/>
        )
    }
}