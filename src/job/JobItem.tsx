import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { JobData } from '../utils/api';
interface JobItemProps {
  item: JobData;
}

const JobItem: React.FC<JobItemProps> = ({ item }) => {
  return (
    <Accordion
      key={item.title}
      sx={{
        mb: 1,
        '&:before': {
          display: 'none',
        },
        borderRadius: '8px',
        '&:first-of-type': {
          borderRadius: '8px',
        },
        '&:last-of-type': {
          borderRadius: '8px',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: 'grey.100',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'grey.200',
          },
        }}
      >
        <Typography variant='h6' sx={{ color: 'text.secondary' }}>
          {item.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          {item.jobs.map((job, jobIndex) => (
            <Grid item xs={12} sm={6} md={4} key={jobIndex}>
              <Card
                sx={{
                  height: '100%',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-2px)',
                    transition: 'all 0.2s ease-in-out',
                  },
                }}
              >
                <CardContent>
                  <Typography variant='h6' gutterBottom>
                    {job.title}
                  </Typography>
                  <Typography color='text.secondary' gutterBottom>
                    📍 {job.location}
                  </Typography>
                  <Typography color='text.secondary' gutterBottom>
                    💼 {job.type}
                  </Typography>
                  <Typography color='text.secondary'>
                    💰 {job.salary}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default JobItem;
