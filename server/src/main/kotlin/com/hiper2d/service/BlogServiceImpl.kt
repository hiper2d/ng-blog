package com.hiper2d.service

import com.hiper2d.model.Blog
import com.hiper2d.repository.BlogRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class BlogServiceImpl @Autowired constructor(val blogRepository: BlogRepository) : BlogService {

    override fun findAllBlogPosts(): List<Blog> {
        return blogRepository.findAll()
    }

    override fun findByTitle(title: String): List<Blog> {
        return blogRepository.findByTitleIgnoreCaseContaining(title)
    }
}
