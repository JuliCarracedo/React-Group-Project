const JOIN = 'spacex-store/src/redux/missions/JOIN';
const LEAVE = 'spacex-store/src/redux/missions/LEAVE';

const initialState = [];

export const joinMission = (mission) => (
  {
    type: JOIN,
    mission,
  }
);

export const leaveMission = (missionId) => (
  {
    type: LEAVE,
    missionId,
  }
);

const missionsJoinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN:
      return ([...state, action.mission]);
    case LEAVE:
      return state.filter((mission) => mission.missionId !== action.missionId);
    default:
      return state;
  }
};

export default missionsJoinedReducer;
