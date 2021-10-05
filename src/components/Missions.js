const Missions = () => (
  <table>
    <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
      <th id="empty-header"> Join</th>
    </tr>

    <tr>
      <td> Thaicom </td>
      <td> Lorem ipsum dolor sit amet</td>
      <td>
        {' '}
        <span>Not a member</span>
        {' '}
      </td>
      <td>
        {' '}
        <button type="button">Join Mission</button>
        {' '}
      </td>
    </tr>
  </table>
);

export default Missions;
