import React from 'react';
import useForm from 'src/hooks/useForm';
import StudentsDialog from './StudentsDialog';

function StudentsEditDialogContainer({
  show,
  student,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, setInputs, handleChange, handleSubmit } = useForm(
    {
      surname: '',
      name: '',
      second_name: '',
      study_group_id: ''
    },
    () => {
      handleSubmitProp({ id: student.id, ...inputs });
    }
  );

  React.useEffect(() => {
    if (show) {
      setInputs(student);
    }
  }, [show, setInputs, student]);

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

export default StudentsEditDialogContainer;
