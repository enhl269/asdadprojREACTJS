import axios from "axios";

const WEBUSERJOB_API_BASE_URL = "http://localhost:8080/api/webuser/";

class DataService {
  getAllJobs() {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/list");
  }

  getJobsSearchCriteria(criteria) {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/list/search/"+criteria);
  }

  getJobDetail(jobid) {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/detail/"+jobid);
  }

  getJobIndustry(jobindustry) {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/list/categorize/"+jobindustry);
  }

  getFilterJob(jobtitle,jobrating,autismlevel) {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/list/filter/"+jobtitle+"/"+jobrating+"/"+autismlevel);
  }

  getJobCategory() {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/category");
  }

  saveBookmarkJob(jobid){
    return axios.post(WEBUSERJOB_API_BASE_URL+"bookmarkjob/"+jobid);
  }

  applyJobURL(jobid){
    return axios.post(WEBUSERJOB_API_BASE_URL+"applyjoburl/"+jobid);
  }

  applyJobEmail(jobid){
    return axios.post(WEBUSERJOB_API_BASE_URL+"applyjobemail/"+jobid);
  }

  getBookmarkJobsList() {
    return axios.get(WEBUSERJOB_API_BASE_URL+"bookmarkedjobs/list");
  }
  getViewedJobsList() {
    return axios.get(WEBUSERJOB_API_BASE_URL+"viewedjobs/list");
  }
}

export default new DataService();