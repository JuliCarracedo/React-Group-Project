export const LOAD = 'spacex-store/src/redux/missions/LOAD';
export const JOIN = 'spacex-store/src/redux/missions/JOIN';
export const LEAVE = 'spacex-store/src/redux/missions/LEAVE';

const initialState = [];

export const loadFromApi = (missions) => (
  {
    type: LOAD,
    missions,
  }
);

export const joinMission = (missionId) => (
  {
    type: JOIN,
    missionId,
  }
);

export const leaveMission = (missionId) => (
  {
    type: LEAVE,
    missionId,
  }
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const filteredMissions = action.missions.map((mission) => ({
        missionId: mission.mission_id,
        missionName: mission.mission_name,
        description: mission.description,
        reserved: false,
      }));
      return (filteredMissions); }
    case JOIN:
      return [...state].map((mission) => {
        if (mission.missionId === action.missionId) {
          return { ...mission, reserved: true };
        } return mission;
      });
    case LEAVE:
      return [...state].map((mission) => {
        if (mission.missionId === action.missionId) {
          return { ...mission, reserved: false };
        } return mission;
      });
    default:
      return state;
  }
};

export default missionsReducer;
