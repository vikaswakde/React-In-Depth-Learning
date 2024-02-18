import ChildProfileCard from "./ChildProfileCard";
function ParentCard({ fname, lname }) {
  return (
    <>
      <h1>
        {fname} {lname}
      </h1>
      <ChildProfileCard name={fname} last={lname} />
    </>
  );
}

// export ChildProfileCard

export default ParentCard;
