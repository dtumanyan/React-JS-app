import React from 'react';
import { API_URL } from './../config';
import './List.css';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null
        }
    }
    render(){
        return (
            <div>
                List
            </div>
        )
    }
    componentDidMount() {
        
        fetch(`${API_URL}/cryptocurrencies?page=1b&perPage=20`) 
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
}

export default List;