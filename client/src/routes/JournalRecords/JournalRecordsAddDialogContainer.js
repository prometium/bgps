import React from 'react';
import useForm from 'src/hooks/useForm';
import JournalRecordsDialog from './JournalRecordsDialog';

function JournalAddDialogContainer({
  show,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, handleChange, handleSubmit } = useForm(
    {
      student_id: '',
      study_plan_id: '',
      in_time: '',
      count: '',
      mark_id: 1
    },
    () => {
      handleSubmitProp(inputs);
    }
  );

  return (
    <JournalRecordsDialog
      show={show}
      inputs={inputs}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      {...rest}
    />
  );
}

export default JournalAddDialogContainer;
