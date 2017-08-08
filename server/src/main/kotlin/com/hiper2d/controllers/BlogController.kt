package com.hiper2d.controllers

import com.hiper2d.model.Record
import com.hiper2d.service.record.RecordsService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/blog")
class BlogController
@Autowired constructor(val recordsService: RecordsService) {
    @GetMapping
    fun getAllRecords(): List<Record> = recordsService.getAllRecordsWithoutContent()

    @PostMapping
    fun saveRecord(@RequestBody record: Record): Record = recordsService.saveRecord(record)

    @GetMapping("/{id}")
    fun getRecord(@PathVariable(value = "id") id: String): Record = recordsService.getRecord(id)
}