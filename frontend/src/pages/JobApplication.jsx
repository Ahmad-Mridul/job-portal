import { useParams } from "react-router";
import useAuth from "../utility/useAuth";
const JobApplication = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const linkedIn = form.linkedin.value;
        // submit to your backend here
        const jobApplication = {
            job_id:id,
            email:user.email,
            name,
            linkedIn
        }
        fetch('http://localhost:3000/job-applications',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(jobApplication)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            
        })
    }
    return (
        <div className="bg-base-100 w-full py-15 shadow-2xl">
            <div className="card-body">
                <p className="text-center text-3xl">Apply Now</p>
                <form onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" className="input w-full" name="name" placeholder="Name" />
                        <label className="fieldset-label">LinkedIn</label>
                        <input type="text" className="input w-full" name="linkedin" placeholder="LinkedIn URL" />
                        <input type="submit" className="btn btn-neutral mt-4" value="Apply"/>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default JobApplication;
