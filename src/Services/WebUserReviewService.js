import axios from "axios";

const WEBUSERJOB_API_BASE_URL = "http://localhost:8080/api/review/";

class DataService {
  getReviewByJobandCompany(jobtitle,companyname) {
    return axios.get(WEBUSERJOB_API_BASE_URL+"job/company/"+jobtitle+"/"+companyname);
  }
}

export default new DataService();