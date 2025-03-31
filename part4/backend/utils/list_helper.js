const lodash = require('lodash')

const dummy = (blogs) => {
  // ...
  return 1
  // This function is a dummy function that returns 1 regardless of the input.
}

const totalLikes  = (blogs) => {
  const sum = (a,b) => a+b
  var likes = blogs.map(s => s.likes).reduce(sum)

  return likes
}

const favoriteBlog = (blogs) => {
  // This function should return the blog with the most likes.
  // If there are multiple blogs with the same number of likes, return any of them.
  // In this case, it should return the blog with 20 likes.
  const maxLikes = Math.max(...blogs.map(blog => blog.likes))
  return blogs.find(blog => blog.likes === maxLikes)
}

const mostBlogs = (blogs) => {
  // This function should return the author with the most blogs.
  // If there are multiple authors with the same number of blogs, return any of them.
  const authorBlogs = lodash.countBy(blogs, 'author')
  const maxBlogs = Math.max(...Object.values(authorBlogs))
  const author = Object.keys(authorBlogs).find(key => authorBlogs[key] === maxBlogs)
  return { author, blogs: maxBlogs }
}

const mostLikes = (blogs) => {
  // This function should return the author with the most likes.
  // If there are multiple authors with the same number of likes, return any of them.
  const authorLikes = lodash.groupBy(blogs, 'author')
  const likes = Object.entries(authorLikes).map(([author, blogs]) => {
    return { author, likes: blogs.reduce((sum, blog) => sum + blog.likes, 0) }
  })
  const maxLikes = Math.max(...likes.map(author => author.likes))
  const author = likes.find(author => author.likes === maxLikes)
  return { author: author.author, likes: maxLikes }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}