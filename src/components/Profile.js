import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateNameAction, updateStatusAction } from "../state-management/userAction";

const Profile = () => {
  const dispatch = useDispatch();
  const { name, age, status, count } = useSelector((state) => state);

  // Without action
  const handleCount = () => {
    const updated = count + 1;
    dispatch({ type: "INCREASE_COUNT", payload: updated });
  };

  // With action and thunk
  const changeName=async()=>{
    dispatch(updateNameAction())
  }


  // With action
  const changeStatus=()=>{
     dispatch(updateStatusAction('Mingle'))
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p>
        Profile {name}, Age: {age}, Status: {status}
      </p>

      <p>{count}</p>
      <button onClick={handleCount}>Increment</button> <br/>
      <button onClick={changeName}>Name</button> <br/>
      <button onClick={changeStatus}>Status</button>
    </div>
  );
};

export default Profile;
