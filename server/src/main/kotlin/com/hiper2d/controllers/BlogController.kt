package com.hiper2d.controllers

import com.hiper2d.service.BlogService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = arrayOf("http://localhost:3001"))
class BlogController @Autowired constructor(val blogService: BlogService) {
    @RequestMapping(method = arrayOf(RequestMethod.GET))
    fun findAll() = blogService.findAllBlogPosts()
}