// import { useReducer } from "react";

// const reducerFunction = (state, action) => {
//     // console.log({action})
//     if (action.)
// };

// function ControlledForm() {
//   const initialState1 = { name: "hello", email: "hello@gmail.com", age: "22" };

//   const [initialState, initialStateDispatch] = useReducer(
//     reducerFunction,
//     initialState1
//   );

//   const handleFormSubmition = (e) => {
//     e.preventDefault();
//     initialStateDispatch;
//     // console.log(e);
//     console.log(e.target.name.value);
//     action({initialState})
//     console.log(initialState.name)
//     // action({type: '', value: })
//   };

//   return (
//     <>
//       <form onSubmit={handleFormSubmition}>
//         <input type="text" name="name" />
//         <input type="email" name="email" />
//         <input type="number" name="age" />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

// export default ControlledForm;

import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        [action.formValue.name]: action.formValue.value,
      };
    }
    default:
      throw new Error("Invalid Action Type");
  }
};
const initialState = { name: "", email: "", age: "" };

function ControlledForm() {
  const [formState, dispatchForm] = useReducer(formReducer, initialState);

  function submitForm(e) {
    e.preventDefault();
  }

  function formChange(e) {
    dispatchForm({
      type: "CHANGE",
      formValue: { name: e.target.name, value: e.target.value },
    });
  }

  return (
    <form onSubmit={submitForm} onChange={formChange}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input type="number" name="age" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
