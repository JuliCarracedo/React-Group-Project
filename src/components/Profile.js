import PropTypes from 'prop-types';

const Profile = (props) => {
  const { missions } = props;
  const joined = missions.filter((mission) => mission.reserved);
  console.log(joined);
  return (
    <div>
      <h2 className="profile-title">My Missions</h2>
      {missions.length > 0 && (
      <ul className="profile-list">
        {joined.map((mission) => (
          <li key={mission.missionName} className="profile-list-element">
            <div className="mission-container">
              {mission.missionName}
            </div>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Profile;
