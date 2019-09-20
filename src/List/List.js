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
        this.setState({ loading: true })
        fetch(`${API_URL}/cryptocurrencies?page=1b&perPage=20`) 
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }
}

export default List;