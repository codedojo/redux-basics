import React from 'react';

import HeaderContainer from './containers/HeaderContainer';
import FilterContainer from './containers/FilterContainer';
import ListContainer from './containers/ListContainer';
import FormContainer from './containers/FormContainer';

function App() {
    return (
        <main>
            <HeaderContainer />
            <FilterContainer />
            <ListContainer />
            <FormContainer />
        </main>
    );
}

export default App;