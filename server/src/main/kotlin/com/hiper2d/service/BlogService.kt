package com.hiper2d.service

import com.hiper2d.model.Blog

interface BlogService {
    fun findAllBlogPosts(): List<Blog>
    fun findByTitle(title: String): List<Blog>
}
