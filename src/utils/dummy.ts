// This come from API

import { JobDetailsInterface } from './api';

export const categories = [
  'Sales & Marketing',
  'Creative',
  'Human Resource',
  'Administration',
  'Digital Marketing',
  'Development',
  'Engineering',
];

export const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Remote',
  'Internship',
];

export const jobsList: JobDetailsInterface[] = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Corp',
    location: 'New York, NY',
    type: 'Full-time',
    category: 'Development',
    salary: '$90,000 - $120,000',
    status: 'Active',
    postedDate: '2024-01-15',
    description: 'Job description',
    requirements: 'BSC in CSE with 1 Year Experience',
  },
  {
    id: 2,
    title: 'Marketing Manager',
    company: 'Growth Inc',
    location: 'Remote',
    type: 'Full-time',
    category: 'Marketing',
    salary: '$70,000 - $90,000',
    status: 'Active',
    postedDate: '2024-01-18',
    description: 'Job description',
    requirements: 'BSC in CSE with 1 Year Experience',
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'San Francisco, CA',
    type: 'Contract',
    category: 'Creative',
    salary: '$85,000 - $110,000',
    status: 'Paused',
    postedDate: '2024-01-20',
    description: 'Job description',
    requirements: 'BSC in CSE with 1 Year Experience',
  },

];
