const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('interviews.db');

db.serialize(function() {
	db.run(
		'CREATE TABLE IF NOT EXISTS applicants (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100), email VARCHAR(50), status INTEGER(1), interviewer INTEGER(1) )',
		);
	db.run(
		"INSERT INTO applicants (name, email, status) VALUES ('Márk', 'mark@telekom.hu', '0')"
    );
    db.run(
		"INSERT INTO applicants (name, email, status) VALUES ('Zsófi', 'zsofi@telekom.hu', '1')"
    );
    db.run(
		"INSERT INTO applicants (name, email, status) VALUES ('Ági', 'agi@telekom.hu', '2')"
    );
    db.run(
		"INSERT INTO applicants (name, email, status) VALUES ('Zoli', 'zoli@telekom.hu', '3')"
    );
    db.run(
		'CREATE TABLE IF NOT EXISTS interviewers (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(100))',
    );
    db.run(
		"INSERT INTO interviewers (name) VALUES ('András')"
    );
    db.run(
		"INSERT INTO interviewers (name) VALUES ('Zsuzsa')"
    );
})