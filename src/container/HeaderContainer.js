import Header from '../components/messenger/header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        name :state.name
    }
}

const HeaderContainer = connect(HeaderContainer)(Header)

export default HeaderContainer
