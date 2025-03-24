import { useContext, useEffect, useState } from "react";
import JobCard from "./JobCard";
import { AuthContext } from "../../utility/AuthProvider";

const HotJobs = () => {
    const {loading} = useContext(AuthContext);
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    if(loading){
        return <span className="loading loading-bars loading-xl"></span>
    }
    return (
        <div className="grid grid-cols-3 gap-3 p-4">
            {
                jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;