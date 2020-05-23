const ApplicantRepository = require('../repository/applicant-repository');
const applicantRepository = new ApplicantRepository

class ApplicantController {
    getApplicationForm(req,res){
        res.render('newform')
    }
    postNewApplicant(req,res){
         const {applicantName, applicantEmail} = req.body;
         applicantRepository.addNewApplicant(applicantName,applicantEmail);
         res.redirect('/applicants')
    }
    async listApplicants(req,res){
        const applicants  = await applicantRepository.listApplicants();
        const interviewers = await applicantRepository.listInterviewers();
     
        const interview1 = [];
        const interview2 = [];
        const approved = [];
        const rejected = [];
            applicants.forEach(applicant => {
                if(applicant.status === 0){
                    rejected.push(applicant);
                }
                if(applicant.status === 1){
                    interview1.push(applicant);
                }
                if(applicant.status === 2){
                    interview2.push(applicant);
                }
                if(applicant.status === 3){
                    approved.push(applicant);
                }               

            })

        if(req.query.edit){
            console.log(req.query.edit)
            res.render('applicantmanage', {
                interview1, 
                interview2,
                approved,
                rejected,
            
            })
        }
        else {            
            res.render('applicantlist', {
                interview1, 
                interview2,
                approved,
                rejected
            })
        }
    }


    async updateApplicant( req, res) {
        const id = req.params.id;
        const {applicantStatus, reject, approve} = req.body;
        let nextStatus
        console.log(req.body, approve, reject)
        if(approve){
            nextStatus = parseInt(applicantStatus)+1;
        }
        if(reject){
            nextStatus = 0;
        }
       
        await applicantRepository.updateApplicant(id, nextStatus);
        
        res.redirect('/applicants?edit=true')
    }

}

module.exports = ApplicantController
