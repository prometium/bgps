import React from 'react';
import useForm from 'src/hooks/useForm';
import StudyGroupsDialog from './StudyGroupsDialog';

function StudyGroupsAddDialog({
  show,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, handleChange, handleSubmit } = useForm(
    {
      name: ''
    },
    () => {
      handleSubmitProp(inputs);
    }
  );

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

export default StudyGroupsAddDialog;
