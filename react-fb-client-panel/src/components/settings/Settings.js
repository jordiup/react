import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAllowRegistration, 
          setDisableBalanceOnAdd, 
          setDisableBalanceOnEdit 
} from '../../actions/settingsActions';

class Settings extends Component {

  disableBalanceOnAddChange = () => {
    const { setDisableBalanceOnAdd } = this.props;
    setDisableBalanceOnAdd();
  }

  allowRegistrationChange = () => {
    const { setAllowRegistration } = this.props;
    setAllowRegistration();
  }
  disableBalanceOnEditChange = () => {
    const { setDisableBalanceOnEdit } = this.props;
    setDisableBalanceOnEdit();
  }

  
  render() {
    const { 
      disableBalanceOnAdd, 
      disableBalanceOnEdit, 
      allowRegistration 
    } = this.props.settings;

    return (

      <div>
        <div className="row">
          <div className="col-md-6">
              <Link to="/" className="btn btn-link">
                <i className="fas fa-arrow-circle-left mr-2"></i>
                Back to dashboard
              </Link>
            </div>
        </div>

        <div className="card">
          <div className="card-header">Edit Settings</div>
          <div className="card-body">
            <form>
            <div className="form-group">
                <label>Allow registration</label>{' '}
                <input 
                  type="checkbox" 
                  name="allowRegistration" 
                  check={!!allowRegistration} 
                  onChange={this.allowRegistrationChange}
                />
              </div>
              <div className="form-group">
                <label>Disable balance on add </label>{' '}
                <input 
                  type="checkbox" 
                  name="disableBalanceOnAdd" 
                  check={!!disableBalanceOnAdd} 
                  onChange={this.disableBalanceOnAddChange}
                />
              </div>
              <div className="form-group">
              <label>Disable balance on edit </label>{' '}
                <input 
                  type="checkbox" 
                  name="disableBalanceOnEdit" 
                  check={!!disableBalanceOnEdit} 
                  onChange={this.disableBalanceOnEditChange}
                />
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  setDisableBalanceOnAdd: PropTypes.func.isRequired,
  setDisableBalanceOnEdit: PropTypes.func.isRequired,
  setAllowRegistration: PropTypes.func.isRequired,
}

export default connect(
  (state, props) => ({
    auth: state.firebase.auth,
    settings: state.settings
  }), 
  { setAllowRegistration, setDisableBalanceOnAdd, setDisableBalanceOnEdit }
)(Settings);