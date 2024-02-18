/* eslint-disable react/jsx-key */
const peopleArray = function () {
  const people = [
    {
      name: "vikas",
      age: 20,
    },
    {
      name: "Aditya",
      age: 19,
    },
    {
      name: "Ranjeet",
      age: 20,
    },
  ];

  const peopleCards = people.map((person) => {
    return (
      <div>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </div>
    );
  });

  return <>{peopleCards}</>;
};

export default peopleArray;
