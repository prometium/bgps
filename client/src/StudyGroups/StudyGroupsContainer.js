import React from 'react';
import studyGroupController from 'src/services/studyGroupController';
import StudyGroups from './StudyGroups';

function StudyGroupsContainer() {
  const [studyGroups, setStudyGroups] = React.useState([]);

  React.useEffect(() => {
    studyGroupController.getAll().then(studyGroups => {
      setStudyGroups(studyGroups);
    });
  }, []);

  const handleDelete = id => () => {
    studyGroupController.delete(id).then(() => {
      setStudyGroups(studyGroups.filter(studyGroup => studyGroup.id !== id));
    });
  };

  const handleUpdate = newStudyGroup => {
    studyGroupController.update(newStudyGroup.id, newStudyGroup).then(() => {
      setStudyGroups(
        studyGroups.map(studyGroup => {
          if (studyGroup.id === newStudyGroup.id) {
            return newStudyGroup;
          }
          return studyGroup;
        })
      );
    });
  };

  const handleCreation = newStudyGroup => {
    studyGroupController.create(newStudyGroup).then(id => {
      if (id !== null) {
        setStudyGroups([...studyGroups, { id, ...newStudyGroup }]);
      }
    });
  };

  return (
    <StudyGroups
      studyGroups={studyGroups}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleCreation={handleCreation}
    />
  );
}

export default StudyGroupsContainer;
