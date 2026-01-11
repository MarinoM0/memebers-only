const pool = require('../db/db');

async function findByUsername(username) {
    const result = await pool.query('SELECT * FROM users WHERE username=$1',[username]);
    return result.rows[0];
}

async function createUser(firstName, lastName, username, passwordHash, isAdmin = false) {
    await pool.query(`INSERT INTO users (first_name, last_name, username, password_hash, is_admin)
        VALUES ($1, $2, $3, $4, $5)`, 
        [firstName, lastName, username, passwordHash, isAdmin]);
}

async function setMemberStatus(userId, isMember) {
    await pool.query(`UPDATE users SET is_member=$1 WHERE id=$2`, [isMember, userId]);
}

async function findById(id) {
    const result = await pool.query(`SELECT * FROM users WHERE id=$1`, [id]);
    return result.rows[0];
}

module.exports = {
    findByUsername,
    createUser,
    setMemberStatus,
    findById,
};