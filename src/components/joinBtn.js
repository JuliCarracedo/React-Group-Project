import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const JoinBtn = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();
  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joinMission(mission.missionId));
  };

  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(mission.missionId));
  };
  return (
    <div>
      {mission.reserved && <button type="button" className="button red" onClick={(e) => handleLeave(e)}>Leave Mission</button>}
      {!mission.reserved && <button type="button" className="button gray" onClick={(e) => handleJoin(e)}>Join Mission</button>}
    </div>
  );
};

JoinBtn.propTypes = {
  mission: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default JoinBtn;
