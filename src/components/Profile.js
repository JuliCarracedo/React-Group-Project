import PropTypes from 'prop-types';

const Profile = (props) => {
  const { memberships } = props;
  return (
    <div>
      <h2 className="profile-title">My Missions</h2>
      <ul className="profile-list">
        {memberships.map((mission) => (
          <li key={mission} className="profile-list-element">
            <div className="mission-container">
              {mission}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Profile.propTypes = {
  memberships: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Profile;
