import { connect } from 'react-redux';

import Header from '../components/Header';

function mapStateToProps(state) {
    return {
        todos: state
    };
}

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;