import { Box, Container, Typography } from '@mui/material';
import JobItem from './job/JobItem';
import { JobData } from './utils/api';

type Props = {};

const Home = (props: Props) => {
  // const [jobs, setJobs] = useState<JobData[]>([]);

  // Real API CALL

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     const response = await api.getJobs();
  //     setJobs(response.data);
  //   };
  //   fetchJobs();
  // }, []);

  const fake_data: JobData[] = [
    {
      title: 'Sales & Marketing',
      jobs: [
        {
          title: 'Senior Sales Executive',
          location: 'New York',
          type: 'Full-time',
          salary: '$70,000 - $90,000',
        },
        {
          title: 'Marketing Manager',
          location: 'Remote',
          type: 'Full-time',
          salary: '$65,000 - $85,000',
        },
        {
          title: 'Business Development Representative',
          location: 'Chicago',
          type: 'Full-time',
          salary: '$45,000 - $60,000',
        },
      ],
    },
    {
      title: 'Creative',
      jobs: [
        {
          title: 'UI/UX Designer',
          location: 'San Francisco',
          type: 'Full-time',
          salary: '$80,000 - $110,000',
        },
        {
          title: 'Graphic Designer',
          location: 'Los Angeles',
          type: 'Contract',
          salary: '$60,000 - $75,000',
        },
      ],
    },
    {
      title: 'Human Resource',
      jobs: [
        {
          title: 'HR Manager',
          location: 'Boston',
          type: 'Full-time',
          salary: '$75,000 - $95,000',
        },
        {
          title: 'Recruitment Specialist',
          location: 'Remote',
          type: 'Full-time',
          salary: '$50,000 - $65,000',
        },
      ],
    },
    {
      title: 'Administration',
      jobs: [
        {
          title: 'Executive Assistant',
          location: 'Miami',
          type: 'Full-time',
          salary: '$45,000 - $60,000',
        },
        {
          title: 'Office Manager',
          location: 'Seattle',
          type: 'Full-time',
          salary: '$50,000 - $65,000',
        },
      ],
    },
    {
      title: 'Digital Marketing',
      jobs: [
        {
          title: 'SEO Specialist',
          location: 'Remote',
          type: 'Full-time',
          salary: '$55,000 - $75,000',
        },
        {
          title: 'Social Media Manager',
          location: 'Austin',
          type: 'Full-time',
          salary: '$50,000 - $70,000',
        },
        {
          title: 'Content Marketing Manager',
          location: 'Denver',
          type: 'Full-time',
          salary: '$65,000 - $85,000',
        },
      ],
    },
    {
      title: 'Development',
      jobs: [
        {
          title: 'Full Stack Developer',
          location: 'Remote',
          type: 'Full-time',
          salary: '$90,000 - $130,000',
        },
        {
          title: 'Frontend Developer',
          location: 'Portland',
          type: 'Full-time',
          salary: '$80,000 - $110,000',
        },
        {
          title: 'Backend Developer',
          location: 'San Diego',
          type: 'Full-time',
          salary: '$85,000 - $120,000',
        },
      ],
    },
    {
      title: 'Engineering',
      jobs: [
        {
          title: 'Software Engineer',
          location: 'Silicon Valley',
          type: 'Full-time',
          salary: '$100,000 - $150,000',
        },
        {
          title: 'DevOps Engineer',
          location: 'Remote',
          type: 'Full-time',
          salary: '$95,000 - $135,000',
        },
        {
          title: 'QA Engineer',
          location: 'Houston',
          type: 'Full-time',
          salary: '$70,000 - $95,000',
        },
      ],
    },
  ];
  return (
    <Container maxWidth='lg' sx={{ py: 6 }}>
      <Typography
        variant='h3'
        component='h1'
        align='center'
        gutterBottom
        sx={{ fontWeight: 'bold', mb: 1 }}
      >
        BROWSE OPEN POSITIONS BY CATEGORY
      </Typography>

      <Typography
        variant='h6'
        align='center'
        color='text.secondary'
        sx={{ mb: 4 }}
      >
        We are always on the lookout for talented people
      </Typography>

      <Box sx={{ mt: 4 }}>
        {fake_data.map((item, index) => (
          <JobItem key={index} item={item} />
        ))}
      </Box>
    </Container>
  );
};

export default Home;
