package com.hiper2d.config

import org.springframework.context.annotation.Configuration
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry



@Configuration
open class AppConfig : WebMvcConfigurerAdapter() {
    override fun addResourceHandlers(registry: ResourceHandlerRegistry?) {
        registry!!.addResourceHandler("/**").addResourceLocations("classpath:/META-INF/resources")
        super.addResourceHandlers(registry)
    }
}