import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  null,
  mapDispatchToProps
)(Header);
