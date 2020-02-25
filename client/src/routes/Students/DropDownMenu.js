import React from 'react';
import { Dropdown } from 'react-bootstrap';

function DropDownMenu({
  studentId,
  studyGroupId,
  studyGroups,
  handleTransfer
}) {
  const [availableStudyGroups, setAvailableStudyGroups] = React.useState([]);

  React.useEffect(() => {
    setAvailableStudyGroups(
      studyGroups.filter(studyGroup => studyGroup.id !== studyGroupId)
    );
  }, [studyGroups, studyGroupId]);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="link">Перевести в</Dropdown.Toggle>
      <Dropdown.Menu>
        {availableStudyGroups.map(studyGroup => (
          <Dropdown.Item
            key={studyGroup.id}
            onClick={handleTransfer(studentId, studyGroup.id)}
          >
            {studyGroup.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownMenu;
