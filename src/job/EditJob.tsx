import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api, JobDetailsInterface } from '../utils/api';
import { categories, jobsList, jobTypes } from '../utils/dummy';

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [jobData, setJobData] = useState<JobDetailsInterface | null>(null);

  useEffect(() => {
    // Simulate API call to fetch job data
    const fetchJob = () => {
      const job = jobsList.find((job) => job.id === Number(id));
      if (job) {
        setJobData(job);
      } else {
        alert('Job not found');
        navigate('/jobs');
      }
      setLoading(false);
    };

    fetchJob();
  }, [id, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJobData((prev) =>
      prev
        ? {
            ...prev,
            [name]: value,
          }
        : null
    );
  };

  // UPDATE EDITED DATA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await api.editJob(id as string, jobData as JobDetailsInterface);
    alert('Job updated successfully');
  };

  if (loading || !jobData) {
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

  return (
    <Box>
      <Container maxWidth='md' sx={{ py: 6 }}>
        <Typography
          variant='h4'
          component='h1'
          align='center'
          gutterBottom
          sx={{
            fontWeight: 'bold',
            mb: 4,
          }}
        >
          Edit Job Position
        </Typography>

        <Card sx={{ p: 2 }}>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Job Title'
                    name='title'
                    value={jobData.title}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label='Category'
                    name='category'
                    value={jobData.category}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label='Job Type'
                    name='type'
                    value={jobData.type}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  >
                    {jobTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Location'
                    name='location'
                    value={jobData.location}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Salary Range'
                    name='salary'
                    value={jobData.salary}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Company Name'
                    name='company'
                    value={jobData.company}
                    onChange={handleChange}
                    required
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Job Description'
                    name='description'
                    value={jobData.description}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label='Requirements'
                    name='requirements'
                    value={jobData.requirements}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    variant='outlined'
                  />
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Box
                    sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}
                  >
                    <Button
                      variant='outlined'
                      color='primary'
                      onClick={() => navigate('/jobs')}
                    >
                      Cancel
                    </Button>
                    <Button
                      type='submit'
                      variant='contained'
                      color='primary'
                      disabled={loading}
                    >
                      {loading ? 'Updating...' : 'Update Job'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default EditJob;
