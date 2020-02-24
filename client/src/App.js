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
import Students from 'src/Students';
import StudyGroups from 'src/StudyGroups';
import JournalTable from './JournalTable';

function App() {
  const [activeGroupId, setActiveGroupId] = React.useState(1);

  const [students, setStudents] = React.useState([]);

  // React.useEffect(() => {
  //   student.getAllByGroup(activeGroupId).then(students => {
  //     setStudents(students);
  //   });
  // }, [activeGroupId]);

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
            <Route path="/journal"></Route>
          </Switch>
        </Router>
      </ErrorBoundary>
      {/* <StudyGroups /> */}
      {/* <button
        onClick={() => {
          setActiveGroupId(0);
        }}
      >
        Группа 1
      </button>
      <button
        onClick={() => {
          setActiveGroupId(1);
        }}
      >
        Группа 2
      </button>
      <button
        onClick={() => {
          setActiveGroupId(2);
        }}
      >
        Группа 3
      </button> */}
    </div>
  );
}

export default App;
