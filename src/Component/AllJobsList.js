import React, { Component } from "react";
import DataService from "../Services/WebUserJobService";
import { Link } from "react-router-dom";
import ReactSelect from 'react-select'



  export default class AllJobsList extends Component {
    constructor(props) {
      super(props);
      this.addBookmark = this.addBookmark.bind(this);
      this.addViewJobEmail = this.addViewJobEmail.bind(this);
      this.addViewJobURL = this.addViewJobURL.bind(this);
      
      this.state = {
        jobs: [],
        query: ""
      };
    }

    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };

    search = query => {
      const token = {};
      this.token = token;
  
      DataService.getJobsSearchCriteria(query)
        .then((res) => {
          if (this.token === token) {
            this.setState({jobs:res.data});
          }
        });
    };
  componentDidMount() {
    DataService.getAllJobs().then((res) =>{
      this.setState({jobs:res.data});
    });
    this.search("");
  }

  addBookmark(id){
    DataService.saveBookmarkJob(id).then(response => {console.log(response.data);
          this.props.history.push('AllBookmarkJobList')
          //window.location.reload();
      }).catch(e => {console.log(e);});
  }

  addViewJobEmail(id){
    DataService.applyJobEmail(id)
      .then(response => {
          console.log(response.data);
          this.props.history.push('AllViewedJobsList')
          //window.location.reload();
      })
      .catch(e => {
          console.log(e);
      });
  }

  addViewJobURL(id){

    DataService.applyJobURL(
      id          
  )
      .then(response => {
          console.log(response.data);
          this.props.history.push('AllViewedJobsList')
          //window.location.reload();
      })
      .catch(e => {
          console.log(e);
      });
  }


  render(){
    const{jobs} = this.state;
    return(
      <div>
        <h2 className="text-center">All Jobs</h2>
        <div className="row">
        
        <div>
        <input type="text" className="search-box" placeholder="Search for..." onChange={this.onChange}/>
        <i className="search icon"></i>
        </div>
          <table className = "table table-striped table-bordered">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Job Industry</th>
                <th>Job Qualification</th>
                <th>Job Description</th>
                <th>Autism Level</th>
                <th>Job Star Rating</th>
                <th>Job Position URL</th>
                <th>Company Name</th>
                <th>Company Star Rating</th>
                <th>Bookmark List</th>
                <th>ViewedJob Page List</th>
                <th>Read Reviews</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.jobs.map(job => 
                <tr key = {job.jobid}>
                  <td>{job.jobTitle}</td>
                  <td>{job.jobIndustry}</td>
                  <td>{job.jobqualification}</td>
                  <td>{job.jobDescription}</td>
                  <td>{job.autismLevel}</td>
                  <td>{job.jobStarRating}</td>
                  <td>{job.jobPositionURL}</td>
                  <td>{job.companyname}</td>
                  <td>{job.companystarRating}</td>
                  <td><button className="btn btn-primary" type = "button" onClick = {(e)=>this.addBookmark(job.jobid)}>Add</button></td>
                  <td><button className="btn btn-primary" type = "button" onClick = {(e)=>this.addViewJobEmail(job.jobid)}>Apply and get Email</button>
                  <button className="btn btn-primary" type = "button" onClick = {(e)=>this.addViewJobURL(job.jobid)}>Apply and get URL</button></td>
                  <td><Link to={"/s/" + job.jobTitle + "/" + job.companyname}>Click to View Reviews</Link></td>
                </tr>  
                  )
              }
            </tbody>
  
          </table>
        </div>
  
      </div>
    );
  
  }

}
