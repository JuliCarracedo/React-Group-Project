export const LOAD = 'spacex-store/src/redux/missions/LOAD';

const initialState = [];

export const loadFromApi = (missions) => (
  {
    type: LOAD,
    missions,
  }
);

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD: {
      const filteredMissions = action.missions.map((mission) => ({
        missionId: mission.mission_id,
        missionName: mission.mission_name,
        description: mission.description,
      }));
      return (filteredMissions); }
    default:
      return state;
  }
};

export default missionsReducer;
