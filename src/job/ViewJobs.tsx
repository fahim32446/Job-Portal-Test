import {
  AttachMoney,
  Business,
  Category,
  Check,
  DateRange,
  LocationOn,
  WorkOutline,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { JobDetailsInterface } from '../utils/api';
import { jobsList } from '../utils/dummy';

const ViewJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobDetailsInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchJob = () => {
      const foundJob = jobsList.find((j) => j.id === Number(id));
      if (foundJob) {
        setJob(foundJob);
      } else {
        alert('Job not found');
        navigate('/jobs');
      }
      setLoading(false);
    };

    fetchJob();
  }, [id, navigate]);

  if (loading || !job) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  const InfoItem = ({
    icon,
    label,
    value,
  }: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }) => (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ mr: 2, color: 'primary.main' }}>{icon}</Box>
      <Box>
        <Typography color='textSecondary' variant='body2'>
          {label}
        </Typography>
        <Typography variant='body1' sx={{ fontWeight: 500 }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        bgcolor: 'grey.50',
        py: 4,
      }}
    >
      <Container maxWidth='lg'>
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 3,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <Box>
              <Typography variant='h4' component='h1' gutterBottom>
                {job.title}
              </Typography>
              <Typography variant='h6' sx={{ mb: 2, opacity: 0.9 }}>
                {job.company}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <Chip
                  label={job.status}
                  color={job.status === 'Active' ? 'success' : 'default'}
                  sx={{ color: 'white', borderColor: 'white' }}
                  variant='outlined'
                />
                <Chip
                  label={job.type}
                  sx={{ color: 'white', borderColor: 'white' }}
                  variant='outlined'
                />
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant='contained'
                color='inherit'
                onClick={() => navigate(`/edit-job/${job.id}`)}
                sx={{ color: 'primary.main' }}
              >
                Edit Job
              </Button>
              <Button
                variant='outlined'
                color='inherit'
                onClick={() => navigate('/job-list')}
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Back to Jobs
              </Button>
            </Box>
          </Box>
        </Paper>

        <Grid container spacing={3}>
          {/* Left Column - Main Details */}
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Job Description
                </Typography>
                <Typography variant='body1' paragraph>
                  {job.description}
                </Typography>

                <Typography variant='h6' gutterBottom sx={{ mt: 4 }}>
                  Requirements
                </Typography>
                {job.requirements.split('\n').map((req, index) => (
                  <Box
                    key={index}
                    sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}
                  >
                    <Check
                      sx={{ mr: 1, color: 'success.main', fontSize: 20 }}
                    />
                    <Typography variant='body1'>{req}</Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Right Column - Job Details */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant='h6' gutterBottom>
                  Job Details
                </Typography>
                <Divider sx={{ mb: 3 }} />

                <InfoItem
                  icon={<Business />}
                  label='Company'
                  value={job.company}
                />
                <InfoItem
                  icon={<LocationOn />}
                  label='Location'
                  value={job.location}
                />
                <InfoItem
                  icon={<AttachMoney />}
                  label='Salary Range'
                  value={job.salary}
                />
                <InfoItem
                  icon={<WorkOutline />}
                  label='Job Type'
                  value={job.type}
                />
                <InfoItem
                  icon={<Category />}
                  label='Category'
                  value={job.category}
                />
                <InfoItem
                  icon={<DateRange />}
                  label='Posted Date'
                  value={new Date(
                    job.postedDate as string
                  ).toLocaleDateString()}
                />

                <Button variant='contained' fullWidth sx={{ mt: 3 }}>
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ViewJob;
