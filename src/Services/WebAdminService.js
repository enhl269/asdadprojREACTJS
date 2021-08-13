import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/api/webadmin";

class DataService {
  getApplicants() {
    return axios.get(STUDENT_API_BASE_URL+"/list/applicant");
  }
  getApprovedApplicants() {
    return axios.get(STUDENT_API_BASE_URL+"/list/applicant/approve");
  }
  getBlockedApplicants() {
    return axios.get(STUDENT_API_BASE_URL+"/list/applicant/block");
  }
  updateApplicant(id, reviewStatus) {
    return axios.put(STUDENT_API_BASE_URL+"/list/applicant/"+id+"/"+reviewStatus);
  }
  getReviews() {
    return axios.get(STUDENT_API_BASE_URL+"/list/reviews/rejected");
  }
  getApprovedReviews() {
    return axios.get(STUDENT_API_BASE_URL+"/list/reviews/approved");
  }
  getBlockedReviews() {
    return axios.get(STUDENT_API_BASE_URL+"/list/reviews/rejected");
  }
  updateReview(id, reviewStatus) {
    return axios.put(STUDENT_API_BASE_URL+"/list/reviews/"+id+"/"+reviewStatus);
  }
}

export default new DataService();
