package com.hiper2d.controllers

import com.hiper2d.model.Record
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
    @GetMapping
    fun findAll() = recordsService.getAllRecords()

    @GetMapping("/{id}")
    fun getRecordDetails(@RequestParam(value = "id") recordId: String) = recordsService.getRecordDetail(recordId)

    @PostMapping
    fun saveRecord(@RequestBody record: Record) = recordsService.saveRecord(record)
}