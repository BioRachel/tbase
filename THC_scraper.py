# -*- coding: utf-8 -*-
"""
Created on Tue Nov 20 16:41:45 2018

@author: Grace
"""

from scrapy.spiders import CrawlSpider
from scrapy.http import Request
from scrapy.linkextractors import LinkExtractor 

class THC(CrawlSpider):
    name = 'THC'
    allowed_domains = ['transhealthcare.org/']
    start_urls = ['http://www.transhealthcare.org/']

    
    def parse(self, response):
        link_extractor = LinkExtractor()
        links = link_extractor.extract_links()
        print(links)