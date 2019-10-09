import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import List from './List/List';
import Detail from './components/detail/Detail';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" component={List} exact />
                <Route path="/currency/:id" component={Detail} />

            </Switch>
        </div>
    )
}

export default App;