package com.hiper2d.controllers

import com.hiper2d.service.BlogService
import com.hiper2d.service.RecordsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/blog")
@CrossOrigin(origins = arrayOf("http://localhost:3001"))
class BlogController
@Autowired constructor(
        val blogService: BlogService,
        val recordsService: RecordsService
) {
    @RequestMapping(method = arrayOf(RequestMethod.GET), path = arrayOf("/all"))
    fun findAll() = recordsService.getAllRecords()

    @RequestMapping(method = arrayOf(RequestMethod.GET), path = arrayOf("/record"))
    fun getRecordDetails(@RequestParam(value = "recordId") recordId: String) = recordsService.getRecordDetail(recordId)
}