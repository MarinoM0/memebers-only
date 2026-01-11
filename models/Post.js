const pool = require("../db/db");

async function createPost(title, content, userId) {
  await pool.query(
    `INSERT INTO posts (title,content, user_id)
        VALUES ($1,$2,$3)`,
    [title, content, userId]
  );
}

async function getAllPosts() {
  const result = await pool.query(
    `SELECT posts.id,posts.title,posts.content,posts.created_at,users.first_name,users.last_name, users.username
    FROM posts
    JOIN users ON posts.user_id = users.id
    ORDER BY posts.created_at DESC`
  );

  return result.rows;
}

async function deletePost(postId) {
  await pool.query('DELETE FROM posts WHERE id=$1', [postId]);
}

module.exports = { createPost, getAllPosts, deletePost };
