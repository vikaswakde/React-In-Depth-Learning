// import ParentCard from "./PropDrillingParentCard";

function ChildProfileCard({name, last}) {
  return (
    <>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/110342308?v=4"
          alt="vikas image"
        />
        <h2> Name: {name} {last}</h2>
      </div>
    </>
  );
}

export default ChildProfileCard;
