/* eslint-disable camelcase */

import PropTypes from 'prop-types';

const MissionLog = (props) => {
  const { mission } = props;
  const { mission_name, description } = mission;
  return (
    <tr>
      <td>
        {' '}
        {mission_name}
        {' '}
      </td>
      <td>
        {' '}
        {description}
      </td>
      <td>
        {' '}
        <span className="member">Not a member</span>
        {' '}
      </td>
      <td>
        {' '}
        <button type="button">Join Mission</button>
        {' '}
      </td>
    </tr>
  );
};

MissionLog.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MissionLog;
