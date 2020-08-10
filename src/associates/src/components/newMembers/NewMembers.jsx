import React from "react";
import "./newMembers.css";

const NewMembers = props => {
  return (
    <div className="newMembersToggle">
      <input
        type="checkbox"
        id="newMembers"
        name="newMembers"
        value="true"
        onChange={props.handleChange}
      />
      <label for="newMembers">View Only New Members</label>
    </div>
  );
};

export default NewMembers;
