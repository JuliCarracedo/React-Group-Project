import PropTypes from 'prop-types';
import JoinBtn from './joinBtn';
import MissionSpan from './missionSpan';

const MissionLog = (props) => {
  const { mission } = props;
  const { missionName, description } = mission;

  return (
    <tr className="row">
      <td className="mission-name">
        {missionName}
      </td>
      <td>
        {' '}
        {description}
      </td>
      <td>
        {' '}
        <MissionSpan member={mission.reserved} />
        {' '}
      </td>
      <td>
        {' '}
        <JoinBtn
          mission={mission}
        />
        {' '}
      </td>
    </tr>
  );
};

MissionLog.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MissionLog;
