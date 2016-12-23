package com.hiper2d.controllers

import com.hiper2d.model.Comment
import com.hiper2d.service.comment.CommentService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/comment")
@CrossOrigin(origins = arrayOf("http://localhost:3001"))
class CommentController
@Autowired constructor(val commentService: CommentService) {
    @GetMapping("/{recordId}")
    fun getCommentsForRecord(@PathVariable(value = "recordId") recordId: String) = commentService.getCommentsForRecord(recordId)

    @PostMapping
    fun saveComment(@RequestBody comment: Comment) = commentService.saveComment(comment)
}

