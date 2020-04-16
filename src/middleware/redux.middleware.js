import { connect } from 'react-redux';

export default () => Component => {
  const mapStateToProps = state => ({ redux: state });
  const mapDispatchToProps = dispatch => ({ dispatch });
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
