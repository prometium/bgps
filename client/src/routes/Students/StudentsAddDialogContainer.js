import React from 'react';
import useForm from 'src/hooks/useForm';
import StudentsDialog from './StudentsDialog';

function StudentsAddDialogContainer({
  show,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, handleChange, handleSubmit } = useForm(
    {
      surname: '',
      name: '',
      second_name: '',
      study_group_id: ''
    },
    () => {
      handleSubmitProp(inputs);
    }
  );

  return (
    <StudentsDialog
      show={show}
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...rest}
    />
  );
}

export default StudentsAddDialogContainer;
