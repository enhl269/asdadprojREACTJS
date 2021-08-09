import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ApprovedReviewList from './Component/ApprovedReviewList'
import RejectedReviewList from './Component/RejectedReviewList'
import ApprovedApplicantList from './Component/ApprovedApplicantList'
import RejectedApplicantList from './Component/BlockedApplicantList'
function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li>
              SA52 Demo
            </li>
            <li className="nav-item">
              <Link to={"/ApprovedApplicantList"} className="nav-link">
                Approved Applicants
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/RejectedApplicantList"} className="nav-link">
                Blocked Applicants
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/ApprovedReviewList"} className="nav-link">
                Approved Reviews 
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/RejectedReviewList"} className="nav-link">
                Rejected Reviews 
              </Link>
            </li>
          </div>
        </nav>
        </div>
        <div className="container mt-3">
        <Switch>
          <Route exact path='/ApprovedReviewList' component={ApprovedReviewList} />
          <Route exact path='/RejectedReviewList' component={RejectedReviewList} />
          <Route exact path='/ApprovedApplicantList' component={ApprovedApplicantList} />
          <Route exact path='/RejectedApplicantList' component={RejectedApplicantList} />
        </Switch>
</div>
      </Router>
    </div>
  );
}
export default App;  