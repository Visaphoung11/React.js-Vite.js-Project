function Food() {
  const food1 = "bannana";
  const food2 = "orange";
  return (
    <ul>
      <li>Apple</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
