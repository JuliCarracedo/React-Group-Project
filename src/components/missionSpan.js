import PropTypes from 'prop-types';

const MissionSpan = (props) => {
  const { member } = props;

  return (
    <div>
      {member === 'member' && <span className="member">Active member</span>}
      {member === 'notMember' && <span className="not-member">Not a member</span>}
    </div>
  );
};

MissionSpan.propTypes = {
  member: PropTypes.string.isRequired,
};

export default MissionSpan;
