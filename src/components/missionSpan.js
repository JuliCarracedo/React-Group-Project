import PropTypes from 'prop-types';

const MissionSpan = (props) => {
  const { member } = props;

  return (
    <div>
      {member && <span className="member">Active member</span>}
      {!member && <span className="not-member">Not a member</span>}
    </div>
  );
};

MissionSpan.propTypes = {
  member: PropTypes.bool.isRequired,
};

export default MissionSpan;
