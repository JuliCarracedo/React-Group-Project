import PropTypes from 'prop-types';
import { useState } from 'react';
import JoinBtn from './joinBtn';
import MissionSpan from './missionSpan';

const MissionLog = (props) => {
  const { mission, memberships, setMemberships } = props;
  const { missionName, description } = mission;
  memberships.includes(mission.name);
  const [member, setMember] = useState(memberships.includes(mission.missionName) ? 'member' : 'notMember');

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
        <MissionSpan member={member} />
        {' '}
      </td>
      <td>
        {' '}
        <JoinBtn
          member={member}
          setMember={setMember}
          mission={mission}
          memberships={memberships}
          setMemberships={setMemberships}
        />
        {' '}
      </td>
    </tr>
  );
};

MissionLog.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
  memberships: PropTypes.arrayOf(PropTypes.string).isRequired,
  setMemberships: PropTypes.func.isRequired,
};

export default MissionLog;
