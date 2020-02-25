import React from 'react';
import useForm from 'src/hooks/useForm';
import StudyGroupsDialog from './StudyGroupsDialog';

function StudyGroupsEditDialogContainer({
  show,
  studyGroup,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, setInputs, handleChange, handleSubmit } = useForm(
    {
      name: ''
    },
    () => {
      handleSubmitProp({ id: studyGroup.id, ...inputs });
    }
  );

  React.useEffect(() => {
    if (show) {
      setInputs(studyGroup);
    }
  }, [show, setInputs, studyGroup]);

  return (
    <StudyGroupsDialog
      show={show}
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...rest}
    />
  );
}

export default StudyGroupsEditDialogContainer;
