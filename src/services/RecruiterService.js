import axios from 'axios';

const RECRUITER_API_BASE_URL = "http://localhost:9091/api/recruiters";

class RecruiterService {

    getRecruiters(){
        return axios.get(RECRUITER_API_BASE_URL);
    }

    createRecruiters(recruiter){
        return axios.post(RECRUITER_API_BASE_URL, recruiter);
    }

    getRecruitersById(recruiterId){
        return axios.get(RECRUITER_API_BASE_URL + '/' + recruiterId);
    }

    updateRecruiters(recruiter, recruiterId){
        return axios.put(RECRUITER_API_BASE_URL + '/' + recruiterId, recruiter);
    }

    deleteRecruiters(recruiterId){
        return axios.delete(RECRUITER_API_BASE_URL + '/' + recruiterId);
    }
}

export default new RecruiterService()