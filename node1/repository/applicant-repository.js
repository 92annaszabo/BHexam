const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('interviews.db');

class ApplicantRepository {
    addNewApplicant(name,email){
        return new Promise((resolve,reject) => {
            db.serialize(() => {
                db.run(
                    `INSERT INTO applicants (name,email,status) VALUES ("${name}", "${email}", 1)`, err => {
                        if(err){
                            reject(err)
                            return
                        }
                        resolve()
                    }
                );
            })
        })
    }
 
    updateApplicant(id,status){
        return new Promise((resolve,reject) => {
            db.serialize(() => {
                db.run(
                    `UPDATE applicants SET status = ${status} WHERE id = ${id}`, err => {
                        if(err){
                            reject(err)
                            return
                        }
                        resolve()
                    }
                );
            })
        })
    }
    listApplicants(){
        return new Promise((resolve,reject) => {
            db.serialize(() => {
                db.all(
                    `SELECT * from applicants`, (err, results) => {
                        if(err){
                            reject(err)
                            
                        }
                        resolve(results)
                    }
                );
            })
        })
    }
    listInterviewers(){
        return new Promise((resolve,reject) => {
            db.serialize(() => {
                db.all(`SELECT * from interviewers`, (err, results) => {
                        if(err){
                            reject(err)
                            
                        }
                        resolve(results)
                    }
                );
            })
        })
    }

    getSinglePost(idOrSlug){
        return new Promise((resolve,reject) => {
                db.get(
                    `SELECT * FROM posts WHERE id = '${idOrSlug}' OR slug = '${idOrSlug}' `, (err, results) => {
                        if(err){
                            reject(err)
                            console.log(err)
                            return
                            
                        }
                        resolve(results)
                    }
                );
        })
    }
}


module.exports = ApplicantRepository