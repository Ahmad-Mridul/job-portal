const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.w7fyp.mongodb.net/?appName=Cluster0`;
// const uri =`mongodb+srv://birm2476:birm2476@cluster0.w7fyp.mongodb.net/?appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        const jobPortalDB = client.db("Job_Portal");
        const jobCollection = jobPortalDB.collection("jobs");
        const jobApplications = jobPortalDB.collection("job_applications");
        await client.connect();
        app.get("/jobs",async(req,res)=>{
            const cursor = jobCollection.find({});
            const result = await cursor.toArray();
            res.send(result);
        })
        app.get('/jobs/:id',async(req,res)=>{
            const id = req.params.id;
            const query = {_id:new ObjectId(id)}
            const job = await jobCollection.findOne(query);
            res.send(job);
        })
        app.get('/job-application',async(req,res)=>{
            const qemail = req.query.email;
            const query = {email:qemail}
            const result = await jobApplications.find(query).toArray();
            for(const application of result){
                const query = {_id: new ObjectId(application.job_id)};
                const job = await jobCollection.findOne(query);
                if(job){
                    application.job_title = job.title;
                    application.jobType = job.jobType;
                    application.location = job.location;
                    application.company = job.company;
                    application.company_logo = job.company_logo;
                }
            }
            res.send(result)
        })
        app.get('/job-applications',async(req,res)=>{
            const cursor = jobApplications.find({});
            const result = await cursor.toArray();
            res.send(result);
        })
        app.post('/job-applications',async(req,res)=>{
            const application = req.body;
            const result = await jobApplications.insertOne(application);
            res.send(result);
        })
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch(err){
        console.log(err);
    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("Hiiiii");
});
app.listen(port, () => {
    console.log("Listening on port ", port);
});
