import axios from 'axios';

const API_URL = 'https://api.example.com'; // Replace with the actual base URL

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const setAuthToken = (token: string | null): void => {
  if (token) {
    axiosInstance.defaults.headers['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers['Authorization'];
  }
};

export interface UserData {
  email: string;
  password: string;
}

export interface JobData {
  title: string;
  jobs: {
    title: string;
    location: string;
    type: string;
    salary: string;
  }[];
}

export interface JobDetailsInterface {
  id?: number;
  title: string;
  description: string;
  location: string;
  type: string;
  salary: string;
  category: string;
  requirements: string;
  company: string;
  postedDate?: string;
  status?: string;
}

export const api = {
  signUp: (userData: UserData) => axiosInstance.post('/auth/sign_up', userData),
  signIn: (userData: UserData) => axiosInstance.post('/auth/sign_in', userData),
  createJob: (jobData: JobDetailsInterface) =>
    axiosInstance.post('/jobs', jobData),
  getJobs: () => axiosInstance.get<JobData[]>('/jobs'),
  editJob: (jobId: string, jobData: JobDetailsInterface) =>
    axiosInstance.put(`/jobs/${jobId}`, jobData),
  deleteJob: (jobId: number) => axiosInstance.delete(`/jobs/${jobId}`),
};
