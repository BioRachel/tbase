# -*- coding: utf-8 -*-
import scrapy


c_str = 'Argentina Australia Austria Belarus Belgium Bolivia Brazil Canada Chile China Colombia Czech-Republic Dominican-Republic Ecuador Finland France Germany Great-Britain Greece India Iran Israel Italy Japan Lebanon Luxembourg Mexico Netherlands New-Zealand Norway Peru Philippines Poland Portugal Russia Serbia Singapore South-Africa South-Korea Spain Sweden Switzerland Taiwan Thailand Turkey USA Uruguay Venezuela'

s_str = c_str.split()

countries = []

more_pages = []

for country in s_str:
    name = country.lower()
    name = 'http://www.transhealthcare.org/' + name + '/'
    countries.append(name)


class THC(scrapy.Spider):
    name = 'THC'
    allowed_domains = ['transhealthcare.org']
    start_urls = countries

    def parse(self, response):
        num_articles = len(response.xpath('//*/article').extract())
        location = response.xpath('//*[@id="breadcrumbs"]/text()[3]').extract_first()
        for i in range(1, num_articles + 1):
            name = response.xpath('//*/article[' + str(i) + ']/header/h1/a/text()').extract_first()
            address = response.xpath('//*/article[' + str(i) + ']/footer/text()[2]').extract_first()
            procedures = response.xpath('//*/article[' + str(i) + ']/footer/a/text()').extract()
            details =  {
                    'name': name,
                    'address': address,
                    'country': location,
                    'procedures': procedures                    
                    }
            yield details
        
        next_ = response.xpath('//*[@class="nextpostslink"]/@href').extract_first()
        if next_:
            print('\n\n' + next_ + '\n\n')
            yield scrapy.Request(url=next_, callback=self.parse, dont_filter=True)
            
