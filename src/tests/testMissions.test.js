/* eslint-disable no-unused-expressions */
import missionsReducer, { loadFromApi, leaveMission, joinMission } from '../redux/missions/missions';

const FAKETYPE = 'fakeTypeAction';
const initialState = [];
const newBooks = [
  { mission_id: 123, mission_name: 'Tolkien', description: 'lorem ipsum dolor' },
  { mission_id: 456, mission_name: 'Tacoma', description: 'lorem ipsum dolor' },
  { mission_id: 789, mission_name: 'Tilcara', description: 'lorem ipsum dolor' },
];

const booksWithExtraProps = [
  {
    mission_id: 123, mission_name: 'Tolkien', description: 'lorem ipsum dolor', fake: 'fake',
  },
  {
    mission_id: 456, mission_name: 'Tacoma', description: 'lorem ipsum dolor', fake: 'fake',
  },
  {
    mission_id: 789, mission_name: 'Tilcara', description: 'lorem ipsum dolor', fake: 'fake',
  },
];

describe('Missions Reducer receiving loadFromApi action', () => {
  it('returns the fetched array renaming non-camelcase properties', () => {
    expect(missionsReducer(initialState, loadFromApi(newBooks))).toStrictEqual(
      [
        {
          missionId: 123, missionName: 'Tolkien', description: 'lorem ipsum dolor', reserved: false,
        },
        {
          missionId: 456, missionName: 'Tacoma', description: 'lorem ipsum dolor', reserved: false,
        },
        {
          missionId: 789, missionName: 'Tilcara', description: 'lorem ipsum dolor', reserved: false,
        },
      ],
    );
  });

  it('Converts mission_id onto missionId', () => {
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .mission_id).toBeUndefined;
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .missionId).toEqual(123);
  });

  it('Converts mission_name onto missionName', () => {
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .mission_name).toBeUndefined;
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .missionName).toEqual('Tolkien');
  });

  it('adds the reserved property as false', () => {
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .reserved).toBe(false);
  });
  it('gets rid of any unnecesary properties', () => {
    expect(missionsReducer(initialState, loadFromApi(booksWithExtraProps))[0]
      .fake).toBeUndefined;
  });
});

describe('MissionsReducer receiving joinMission or leaveMission', () => {
  it('Changes reserved to true in order to join mission', () => {
    const newState = missionsReducer(initialState, loadFromApi(newBooks));
    expect(missionsReducer(newState, joinMission(123))[0]
      .reserved).toBe(true);
  });
  it('Changes reserved to false in order to leave a joined mission mission', () => {
    let newState = missionsReducer(initialState, loadFromApi(newBooks));
    newState = missionsReducer(newState, joinMission(123));
    expect(missionsReducer(newState, leaveMission(123))[0]
      .reserved).toBe(false);
  });
});

describe('Mission reducer receiving a strange action', () => {
  it('Returns the previous state', () => {
    expect(missionsReducer(initialState, { type: FAKETYPE })).toEqual([]);
  });
});
