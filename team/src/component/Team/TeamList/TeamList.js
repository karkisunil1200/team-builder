import React, {useState} from 'react';
import TeamForm from '../TeamForm';

function TeamList() {
  const [addTeam, setAddTeam] = useState([]);

  const addTeam = detail => {
    setAddTeam(...addTeam, detail);
  };
  return (
    <div>
      <TeamForm addTeam={addTeam} />
    </div>
  );
}

export default TeamList;
