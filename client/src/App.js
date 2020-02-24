import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import studentController from './services/studentController';
import studyGroupController from './services/studyGroupController';
import Students from './Students';
import StudyGroups from './StudyGroups';
import JournalTable from './JournalTable';

function App() {
  const [activeGroupId, setActiveGroupId] = React.useState(1);

  const [students, setStudents] = React.useState([]);

  // React.useEffect(() => {
  //   student.getAllByGroup(activeGroupId).then(students => {
  //     setStudents(students);
  //   });
  // }, [activeGroupId]);

  return (
    <div className="App">
      <Students />
      {/* <StudyGroups /> */}
      {/* <button
        onClick={() => {
          setActiveGroupId(0);
        }}
      >
        Группа 1
      </button>
      <button
        onClick={() => {
          setActiveGroupId(1);
        }}
      >
        Группа 2
      </button>
      <button
        onClick={() => {
          setActiveGroupId(2);
        }}
      >
        Группа 3
      </button> */}
    </div>
  );
}

export default App;
