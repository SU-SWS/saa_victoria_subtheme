import React from "react";
import "./newMembers.css";

const NewMembers = props => {
  return (
    <div className="newMembersToggle">
      <input
        type="checkbox"
        name="newMembers"
        value="true"
        onChange={props.handleChange}
      />
      <p>View Only New Members</p>
    </div>
  );
};

export default NewMembers;
