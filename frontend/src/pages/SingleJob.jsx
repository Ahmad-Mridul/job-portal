import React from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { Briefcase, MapPin, Calendar } from "lucide-react";
const SingleJob = () => {
    const job = useLoaderData();    
    return (
        <div className="p-4 shadow-lg rounded-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
                <img
                src={job.company_logo}
                alt={job.company}
                className="w-12 h-12 rounded-full"
                />
                <div>
                <h3 className="text-lg font-semibold">{job.company}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                    <MapPin size={14} className="mr-1" /> {job.location}
                </p>
                </div>
            </div>
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-600 text-sm flex items-center gap-2 mb-2">
                <Briefcase size={14} /> {job.jobType} | <Calendar size={14} /> Deadline:{" "}
                {job.applicationDeadline}
            </p>
            <p className="text-gray-500 text-sm mb-3">{job.description}</p>
            <div className="flex gap-2 mb-4">
                {job.requirements.map((skill, index) => (
                <span
                    key={index}
                    className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-md"
                >
                    {skill}
                </span>
                ))}
            </div>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-blue-600">
                {job.salaryRange.min}-{job.salaryRange.max}{" "}
                {job.salaryRange.currency.toUpperCase()}/Month
                </p>
                <NavLink to={`/job-application/${job._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                    Apply Now
                </NavLink>
            </div>
        </div>
    );
};

export default SingleJob;