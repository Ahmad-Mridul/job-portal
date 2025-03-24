import React from 'react';
import HotJobs from '../components/HomePage/HotJobs';
import HomeHero from '../components/HomePage/HomeHero';
import JobCard from '../components/HomePage/JobCard';

const Home = () => {
    return (
        <div>
            <HomeHero></HomeHero>
            <HotJobs></HotJobs>
            <JobCard></JobCard>
        </div>
    );
};

export default Home;