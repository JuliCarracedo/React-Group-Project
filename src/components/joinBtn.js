import PropTypes from 'prop-types';

const JoinBtn = (props) => {
  const {
    setMember, member, memberships, setMemberships, mission,
  } = props;

  const handleJoin = (e) => {
    e.preventDefault();
    setMember('member');
    setMemberships([...memberships, mission.missionName]);
  };

  const handleLeave = (e) => {
    e.preventDefault();
    setMember('notMember');
    setMemberships(memberships.filter(
      (membership) => membership !== mission.missionName,
    ));
  };
  return (
    <div>
      {member === 'member' && <button type="button" className="button red" onClick={(e) => handleLeave(e)}>Leave Mission</button>}
      {member === 'notMember' && <button type="button" className="button gray" onClick={(e) => handleJoin(e)}>Join Mission</button>}
    </div>
  );
};

JoinBtn.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
  member: PropTypes.string.isRequired,
  setMember: PropTypes.func.isRequired,
  memberships: PropTypes.arrayOf(PropTypes.any).isRequired,
  setMemberships: PropTypes.func.isRequired,
};

export default JoinBtn;
