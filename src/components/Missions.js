import PropTypes from 'prop-types';
import MissionLog from './MissionLog';

const Missions = (props) => {
  const { missions, memberships, setMemberships } = props;

  return (
    <table>
      <thead>
        <tr className="head">
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th id="empty-header"> Join</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <MissionLog
            key={mission.missionId}
            mission={mission}
            memberships={memberships}
            setMemberships={setMemberships}
          />
        ))}
      </tbody>
    </table>
  );
};

Missions.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.object).isRequired,
  memberships: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMemberships: PropTypes.func.isRequired,
};

export default Missions;
