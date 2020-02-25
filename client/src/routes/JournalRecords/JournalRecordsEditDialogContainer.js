import React from 'react';
import useForm from 'src/hooks/useForm';
import JournalRecordsDialog from './JournalRecordsDialog';

function JournalRecordsEditDialogContainer({
  show,
  journalRecord,
  handleSubmit: handleSubmitProp,
  ...rest
}) {
  const { inputs, setInputs, handleChange, handleSubmit } = useForm(
    {
      student_id: '',
      study_plan_id: '',
      in_time: '',
      count: '',
      mark_id: ''
    },
    () => {
      handleSubmitProp({ id: journalRecord.id, ...inputs });
    }
  );

  React.useEffect(() => {
    if (show) {
      setInputs({ ...journalRecord });
    }
  }, [show, setInputs, journalRecord]);

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

export default JournalRecordsEditDialogContainer;
