import { loadFromApi } from './missions';

const loadAsync = () => async (dispatch) => {
  fetch('https://api.spacexdata.com/v3/missions')
    .then((response) => response.json()).then((json) => dispatch(loadFromApi(json)));
};

export default loadAsync;
