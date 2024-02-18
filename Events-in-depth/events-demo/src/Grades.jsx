function Grades() {
  function clickHandler(e) {
    console.log(e.target.textContent);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Mark</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody onClick={clickHandler}>
        <tr>
          <td>Maths</td>
          <td>45</td>
          <td>C</td>
        </tr>
        <tr>
          <td>Science</td>
          <td>88</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Arts</td>
          <td>90</td>
          <td>A+</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Grades;
