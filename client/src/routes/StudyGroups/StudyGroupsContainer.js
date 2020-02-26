import React from 'react';
import studyGroupController from 'src/services/studyGroupController';
import StudyGroups from './StudyGroups';

function StudyGroupsContainer() {
  const [studyGroups, setStudyGroups] = React.useState([]);

  React.useEffect(() => {
    studyGroupController.getAll().then(studyGroups => {
      if (studyGroups) {
        setStudyGroups(studyGroups);
      }
    });
  }, []);

  const handleDelete = id => () => {
    studyGroupController.delete(id).then(result => {
      if (result === 0) {
        setStudyGroups(studyGroups.filter(studyGroup => studyGroup.id !== id));
      }
    });
  };

  const handleUpdate = newStudyGroup => {
    studyGroupController
      .update(newStudyGroup.id, newStudyGroup)
      .then(result => {
        if (result === 0) {
          setStudyGroups(
            studyGroups.map(studyGroup => {
              if (studyGroup.id === newStudyGroup.id) {
                return newStudyGroup;
              }
              return studyGroup;
            })
          );
        }
      });
  };

  const handleCreation = newStudyGroup => {
    studyGroupController.create(newStudyGroup).then(id => {
      if (id !== undefined) {
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
