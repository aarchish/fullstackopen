const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

const blogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422aa71b54a6762345464321',
    title: 'Go To The End of The World',
    author: 'Edsger W. Dijkstra',
    url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
    likes: 20,
    __v: 0
  }
]

describe('dummy test', () => {
  // Dummy function test
  // The dummy function should return 1 regardless of the input.
  test('dummy returns one', () => {
    const result = listHelper.dummy(blogs)
    assert.strictEqual(result, 1)
  })
})

describe('total likes', () => {
  // Test for total likes calculation
  // The total likes should be the sum of likes from all blogs.
  // In this case, it should be 5 + 20 = 25.
  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 25)
  })
})

describe('favorite blog', () => {
  // Test for favorite blog calculation
  // The favorite blog should be the one with the most likes.
  // In this case, it should be the blog with 20 likes.
  test('returns the blog with most likes', () => {
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, blogs[1])
  })
})

describe('most blogs', () => {
  // Test for most blogs calculation
  // The most blogs should return the author with the most blogs.
  // In this case, it should be 'Edsger W. Dijkstra' with 2 blogs.
  test('returns the author with most blogs', () => {
    const result = listHelper.mostBlogs(blogs)
    assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', blogs: 2 })
  })
})

describe('most likes', () => {
  // Test for most likes calculation
  // The most likes should return the author with the most likes.
  // In this case, it should be 'Edsger W. Dijkstra' with 25 likes.
  test('returns the author with most likes', () => {
    const result = listHelper.mostLikes(blogs)
    assert.deepStrictEqual(result, { author: 'Edsger W. Dijkstra', likes: 25 })
  })
})