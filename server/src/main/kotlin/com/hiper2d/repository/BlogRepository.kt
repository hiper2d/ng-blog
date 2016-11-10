package com.hiper2d.repository

import com.hiper2d.model.Blog
import org.springframework.data.mongodb.repository.MongoRepository

interface BlogRepository : MongoRepository<Blog, String> {

    fun findByTitleIgnoreCaseContaining(firstName: String): List<Blog>
}