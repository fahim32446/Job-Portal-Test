import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api, JobDetailsInterface } from '../utils/api';
import { categories, jobTypes } from '../utils/dummy';

const CreateJob: React.FC = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState<JobDetailsInterface>({
    title: '',
    description: '',
    location: '',
    type: 'Full-time',
    salary: '',
    category: 'Development',
    requirements: '',
    company: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setJobData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    await api.createJob(jobData);
    alert('Job created successfully');
  };

  return (
    <Box sx={{}}>
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
          Create New Job Position
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
                    placeholder='e.g. $50,000 - $70,000'
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
                    <Button type='submit' variant='contained' color='primary'>
                      Create Job
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

export default CreateJob;
