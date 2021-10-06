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
    case LOAD:
      return (action.missions);
    default:
      return state;
  }
};

export default missionsReducer;
