import React, { useState, useEffect }  from 'react';
import ReactSelect from 'react-select'
import data from './Component/data.json';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import ApprovedReviewList from './Component/ApprovedReviewList'
import RejectedReviewList from './Component/RejectedReviewList'
import ApprovedApplicantList from './Component/ApprovedApplicantList'
import RejectedApplicantList from './Component/BlockedApplicantList'
import AllJobsList from './Component/AllJobsList'
import AllBookmarkJobList from './Component/AllBookmarkJobList'
import AllViewedJobsList from './Component/AllViewedJobsList'
import JobCategoryList from './Component/JobCategoryList'
import JobListPerCategory from './Component/JobListPerCategory'
import ReviewListJobCompanyCategory from './Component/ReviewListJobCompanyCategory'

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
              <Link to={"/AllJobsList"} className="nav-link">
                All Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AllBookmarkJobList"} className="nav-link">
                Bookmarked Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/AllViewedJobsList"} className="nav-link">
                Viewed Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/JobCategoryList"} className="nav-link">
                Job Categories
              </Link>
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
          <Route exact path='/AllJobsList' component={AllJobsList} />
          <Route exact path='/AllViewedJobsList' component={AllViewedJobsList} />
          <Route exact path='/AllBookmarkJobList' component={AllBookmarkJobList} />
          <Route exact path='/JobCategoryList' component={JobCategoryList} />
          <Route exact path='/JobListPerCategory' component={JobListPerCategory} />
          <Route exact path='/j/:id' component={JobListPerCategory} />
          <Route exact path='/ReviewListJobCompanyCategory' component={ReviewListJobCompanyCategory} />
          <Route exact path='/s/:id/:id2' component={ReviewListJobCompanyCategory} />

        </Switch>
</div>
      </Router>
      
    </div>
  );
}
export default App;  