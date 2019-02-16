from bs4 import BeautifulSoup as soup 
import json
import requests 

def getContent(link):
    url = link
    page_html = requests.get(url).content
    page_soup = soup(page_html,'html.parser')
    content = page_soup.findAll('div',{'class':'entry-content'})  
    text_content = ""
    author_soup = page_soup.findAll('div',{'class':'entry-meta'})
    author = author_soup[0].span.a.text
    body = {}
    for parapraphs in content:
        text_content += parapraphs.text
    body['author'] = author
    body['content'] = text_content
    return body

articles_list = []
url = "https://klickpages.com.br/blog/"
page_html = requests.get(url).content
page_soup = soup(page_html,'html.parser')
articles = page_soup.findAll('article')

for article in articles:
    article_json = {}
    article_json['title'] = article.h1.text
    article_json['card-img'] = article.img['src']
    link = article.h1.a['href']
    getContent(link)
    article_json['body'] = getContent(link)
    articles_list.append(article_json)

articles_formated_json = json.dumps(articles_list)
f = open('arquivo.json','w')
f.write(articles_formated_json)

#Insere aqui o post pra api