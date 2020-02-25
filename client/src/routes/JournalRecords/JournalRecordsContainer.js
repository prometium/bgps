import React from 'react';
import journalRecordController from 'src/services/journalRecordController';
import Journal from './JournalRecords';

function JournalRecordsContainer() {
  const [journalRecords, setJournalRecords] = React.useState([]);

  React.useEffect(() => {
    journalRecordController.getAll().then(journalRecords => {
      setJournalRecords(journalRecords);
    });
  }, []);

  const handleDelete = id => () => {
    journalRecordController.delete(id).then(() => {
      setJournalRecords(
        journalRecords.filter(journalRecord => journalRecord.id !== id)
      );
    });
  };

  const handleUpdate = newJournalRecord => {
    journalRecordController
      .update(newJournalRecord.id, newJournalRecord)
      .then(() => {
        journalRecordController
          .get(newJournalRecord.id)
          .then(updatedJournalRecord => {
            setJournalRecords(
              journalRecords.map(journalRecord => {
                if (journalRecord.id === updatedJournalRecord.id) {
                  return updatedJournalRecord;
                }
                return journalRecord;
              })
            );
          });
      });
  };

  const handleCreation = newJournalRecord => {
    journalRecordController.create(newJournalRecord).then(id => {
      if (id !== undefined) {
        journalRecordController.get(id).then(journalRecord => {
          setJournalRecords([...journalRecords, journalRecord]);
        });
      }
    });
  };

  return (
    <Journal
      journalRecords={journalRecords}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      handleCreation={handleCreation}
    />
  );
}

export default JournalRecordsContainer;
