import React from 'react';
import './List.css';
import { threadId } from 'worker_threads';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null
        }
    }
}

export default List;