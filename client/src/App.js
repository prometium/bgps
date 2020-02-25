import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import ErrorBoundary from 'src/ErrorBoundary';
import Students from 'src/routes/Students';
import StudyGroups from 'src/routes/StudyGroups';
import JournalRecords from 'src/routes/JournalRecords';
import StudentsJournal from 'src/routes/StudentsJournal';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">@Prometium</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/study_groups">
                  Группы
                </Nav.Link>
                <Nav.Link as={Link} to="/students">
                  Студенты
                </Nav.Link>
                <Nav.Link as={Link} to="/journal_records">
                  Записи журнала
                </Nav.Link>
                <Nav.Link as={Link} to="/journal">
                  Журнал
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Redirect to="/students" />
            </Route>
            <Route path="/study_groups">
              <StudyGroups />
            </Route>
            <Route path="/students">
              <Students />
            </Route>
            <Route path="/journal_records">
              <JournalRecords />
            </Route>
            <Route path="/journal">
              <StudentsJournal />
            </Route>
          </Switch>
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
