# coding=utf-8
import re
import os
from datetime import datetime
import json
# import threading
# from multiprocessing import Pool, cpu_count
# import ssl

import requests
from bs4 import BeautifulSoup
from selenium.webdriver import Chrome, ChromeOptions
from db import MyData

HEADERS = {
    'X-Requested-With': 'XMLHttpRequest',
    'User-Agent':
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36',
    'Referer': 'http://www.csrc.gov.cn/pub/newsite/'
}

TARGET_URL = 'http://www.csrc.gov.cn/pub/newsite'

TARGET_CLS = [
    'in_tab_t',
    'in_title',
    'title',
]
TARGET_KEYWORD = ['证监会要闻', '证监会令', '证监会公告', '行政处罚', '市场禁入', '行政复议', '公开征求意见']

DEPARTMENT_TARGET_KEYWORD = [
    '发行部', '市场一部', '机构部', '上市部', '稽查局', '行政处罚委', '私募部', '科技监管局'
]

ORG_TARGET_KEYWORD = ['通知公告', '监管措施', '行政处罚']

DEPARTMENT_TAB_KEYWORD = ['通知公告', '监管措施', '行政处罚']

ALL_TABS = []  # 所有目标tab

ALL_DEPTS = []  #所有目标部门

ALL_ORGS = []  # 所有目标派出机构

FIND_PAGE = 1  # 获取所有页

TARGET_LISTS = []

CHROME_OPS = ChromeOptions()
# CHROME_OPS.headless = True
CHROME_OPS.add_argument('--headless')
CHROME_OPS.add_argument('--no-sandbox')
CHROME_OPS.add_argument('--disable-dev-shm-usage')
# CHROME_OPS.binary_location = '/usr/local/bin/chromedriver'


def get_target_tab(target_cls):
    length = len(target_cls)
    if not length:
        return
    for i in range(length):
        get_tab_links(target_cls[i])

    for j in range(len(ALL_TABS)):
        if ALL_TABS[j]['href'].find('./') != -1:
            ALL_TABS[j]["href"] = TARGET_URL + ALL_TABS[j]['href'].replace(
                '.', '')
        elif ALL_TABS[j]['href'].find('/pub') != -1:
            ALL_TABS[j]["href"] = TARGET_URL.replace('/pub/newsite',
                                                     '') + ALL_TABS[j]['href']

    get_item_lists(ALL_TABS)
    # print(ALL_TABS)


def get_tab_links(c):
    tabs = []
    try:
        response = requests.get(TARGET_URL, headers=HEADERS, timeout=10)
        #  解决中文乱码问题
        # response.encoding = 'utf-8';
        bs = BeautifulSoup(
            response.content,
            'lxml',
        )
        all_tabs = bs.find_all('div', class_=c)

        for i in range(len(all_tabs)):
            a = all_tabs[i].find_all('a')
            for j in range(len(a)):
                tab = {}
                tab["href"] = a[j].get('href')
                tab["title"] = a[j].get_text()
                tabs.append(tab)

        if c == 'in_title':
            tabs = filter_more_item(tabs)
        elif c == 'title':
            for i in range(len(all_tabs)):
                bt = all_tabs[i].find('div', class_="bt")
                more = all_tabs[i].find('div', class_="more")
                if bt != None and more != None:
                    href = more.find('a').get('href')
                    title = bt.get_text()

                    for j in range(len(tabs)):
                        if tabs[j]["href"] == href:
                            tabs[j]["title"] = title
                else:
                    continue

        tabs = filter_keyword(tabs, TARGET_KEYWORD)
        ALL_TABS.extend(tabs)
        # print(ALL_TABS)

    except Exception as e:
        print(e)


def filter_more_item(data=None):
    newData = list(filter(lambda d: d["title"] != '更多', data))
    return newData


def filter_keyword(data, target):
    newData = list(filter(lambda d: d['title'] in target, data))
    return newData


# 获取目标tab list
def get_item_lists(target=[]):

    if len(target) == 0:
        return

    for t in target:
        # print(t['title'])

        if t["href"].find('channel') < 0:

            try:
                driver = Chrome(executable_path="/usr/local/bin/chromedriver",
                                options=CHROME_OPS)

                driver.get(t["href"])
                page_source = driver.page_source
                # print(page_source)
                #  解决中文乱码问题
                # response.encoding = 'utf-8';
                bs = BeautifulSoup(
                    page_source,
                    'lxml',
                )

                driver.close()
                all_page = 0
                tempPage = []

                if FIND_PAGE == 999:
                    all_page = bs.find('div', class_="page").find(
                        'span', class_="current").get_text()
                else:
                    all_page = FIND_PAGE

                if all_page == 1:
                    tempPage.append(t["href"])
                else:
                    for i in range(int(all_page)):
                        if i == 0:
                            tempPage.append(t["href"])
                        else:
                            tempPage.append('''{}index_{}.html'''.format(
                                t["href"], i))

                # print(all_page)
                # print(tempPage)

                arr_li = bs.select('#myul li')
                for li in arr_li:
                    res_map = {}
                    href = re.findall(r'(?<=href=)"\S+"', str(li))[0].replace(
                        '"', "").replace('./', "")
                    title = re.findall(r"title=(.*?)>",
                                       str(li))[0].replace('"', "")
                    date = re.findall(r"<span>(.*?)<",
                                      str(li))[0].replace('"', "")
                    res_map["url"] = t["href"] + href
                    res_map["title"] = title
                    res_map["date"] = date
                    TARGET_LISTS.append(res_map)
                # print(TARGET_LISTS)
                if len(tempPage) == 1:
                    continue
                else:
                    for i in range(len(tempPage)):
                        if i > 0:
                            html = requests.get(tempPage[i],
                                                headers=HEADERS,
                                                timeout=10)
                            bs = BeautifulSoup(
                                html.content,
                                'lxml',
                            )
                            arr_li = bs.select('#myul li')
                            for li in arr_li:
                                res_map = {}
                                href = re.findall(r'(?<=href=)"\S+"',
                                                  str(li))[0].replace(
                                                      '"',
                                                      "").replace('./', "")
                                title = re.findall(r"title=(.*?)>",
                                                   str(li))[0].replace(
                                                       '"', "")
                                date = re.findall(r"<span>(.*?)<",
                                                  str(li))[0].replace('"', "")
                                res_map["url"] = t["href"] + href
                                res_map["title"] = title
                                res_map["date"] = date
                                TARGET_LISTS.append(res_map)

            except Exception as e:
                print(e)

        else:

            driver = Chrome(executable_path="/usr/local/bin/chromedriver",
                            options=CHROME_OPS)
            driver.get(t["href"])
            # iframe = driver.find_element_by_css_selector('iframe#divNoObjectFound')
            driver.switch_to.frame("DataList")
            page_source = driver.page_source
            # print(page_source)
            #  解决中文乱码问题
            # response.encoding = 'utf-8';
            bs = BeautifulSoup(
                page_source,
                'lxml',
            )

            all_page = 0
            if FIND_PAGE == 999:
                all_page = bs.find('span', class_="nav_pagenum").get_text()
            else:
                all_page = FIND_PAGE
            # print(all_page)
            if int(all_page) > 1:

                for i in range(int(all_page)):
                    if i == 0:
                        all_row = bs.find_all('div', class_="row")
                        for row in all_row:
                            res_map = {}
                            href = row.find('a').get('href').replace(
                                '../../', '')
                            title = row.find('a').get_text()
                            date = row.find('li', class_="fbrq").get('title')
                            res_map["url"] = t["href"][:-27] + href
                            res_map["title"] = title
                            res_map["date"] = format_date(date)

                            TARGET_LISTS.append(res_map)
                    else:
                        if i < int(all_page):
                            driver.find_element_by_css_selector(
                                'span.nav_go_next').click()
                            page_source = driver.page_source
                            bs = BeautifulSoup(
                                page_source,
                                'lxml',
                            )
                            all_row = bs.find_all('div', class_="row")
                            for row in all_row:
                                res_map = {}
                                href = row.find('a').get('href').replace(
                                    '../../', '')
                                title = row.find('a').get_text()
                                date = row.find('li',
                                                class_="fbrq").get('title')
                                res_map["url"] = t["href"][:-27] + href
                                res_map["title"] = title
                                res_map["date"] = format_date(date)

                                TARGET_LISTS.append(res_map)

                driver.close()
            else:
                all_row = bs.find_all('div', class_="row")
                for row in all_row:
                    res_map = {}
                    href = row.find('a').get('href').replace('../../', '')
                    title = row.find('a').get_text()
                    date = row.find('li', class_="fbrq").get('title')
                    res_map["url"] = t["href"][:-27] + href
                    res_map["title"] = title
                    res_map["date"] = format_date(date)

                    TARGET_LISTS.append(res_map)
                driver.close()

    print('tab list done!!!')
    # crawling for department


# 获取目标部门 list
def get_department_links():
    depts = []
    try:
        response = requests.get(TARGET_URL, headers=HEADERS, timeout=10)
        bs = BeautifulSoup(
            response.content,
            'lxml',
        )
        target_table = bs.find_all('div', class_="ljzjh")[1]
        a_tags = target_table.find_all('a')

        for a in a_tags:
            data = {}
            href = a.get('href')
            dept = a.get_text()
            data['href'] = TARGET_URL + '/' + href
            data['title'] = dept
            depts.append(data)

        ALL_DEPTS = filter_keyword(depts, DEPARTMENT_TARGET_KEYWORD)

        for item in ALL_DEPTS:
            loop_dept_link(item["href"])

        print('department list done!!!')

    except Exception as e:
        print(e)


# 递归部门内不同模块内容链接
def loop_dept_link(url):
    response = requests.get(url, headers=HEADERS, timeout=10)
    bs = BeautifulSoup(
        response.content,
        'lxml',
    )
    more = bs.find_all('div', class_="more")
    if len(more) > 0:
        new_url_arr = []
        for m in more:
            href = m.find('a').get('href')
            if href.find('./') > -1:
                new_url = url + href.replace('./', '')
            new_url_arr.append(new_url)

        # print(new_url_arr)

        for u in new_url_arr:
            loop_dept_link(u)

    else:
        get_dept_lists(url)


# 获取目标部门模块内list
def get_dept_lists(url):
    response = requests.get(url, headers=HEADERS, timeout=10)
    bs = BeautifulSoup(
        response.content,
        'lxml',
    )

    if bs.find('div', class_='fl_list') != None:
        dept_target = bs.find('div', class_='fl_list').find_all('li')
        for li in dept_target:
            res_map = {}
            href = li.find('a').get('href')
            title = li.find('a').get_text()
            date = li.find('span').get_text().replace('\n', '')

            res_map['title'] = title
            res_map['date'] = date

            if href.find('../../../../') > -1:
                res_map['url'] = href.replace('../../../../',
                                              'http://www.csrc.gov.cn/pub/')
            elif href.find('../../../') > -1:
                res_map['url'] = href.replace('../../../',
                                              'http://www.csrc.gov.cn/pub/')
            elif href.find('../../') > -1:
                res_map['url'] = href.replace('../../',
                                              'http://www.csrc.gov.cn/pub/')
            elif href.find('./') > -1:
                res_map['url'] = href.replace('./', url)
            elif href.find('http://') > -1:
                res_map['url'] = href
            TARGET_LISTS.append(res_map)


# 获取派出机构
def get_organization_links():
    orgs = []
    result = []
    try:
        response = requests.get(TARGET_URL, headers=HEADERS, timeout=10)
        #  解决中文乱码问题
        # response.encoding = 'utf-8';
        bs = BeautifulSoup(
            response.content,
            'lxml',
        )
        target_table = bs.find_all('div', class_="ljzjh")[2]
        a_tags = target_table.find_all('a')

        for a in a_tags:
            target = {}
            href = a.get('href')
            addr = a.get_text()
            target['href'] = 'http://www.csrc.gov.cn' + href
            target['addr'] = addr
            orgs.append(target)

        orgs = orgs[0:-2]
        for target in orgs:
            response = requests.get(target['href'],
                                    headers=HEADERS,
                                    timeout=10)
            bs = BeautifulSoup(
                response.content,
                'lxml',
            )
            tabs = bs.find_all('div', class_='bt')
            target_a = []

            for item in tabs:
                target_a.extend(item.find_all('a'))

            for a in target_a:
                target_a = {}
                href = a.get('href')
                title = a.get_text()
                if href.find('./') > -1:
                    target_a['href'] = target['href'] + href.replace('./', '')
                elif href.find('http://www.csrc.gov.cn/') > -1:
                    target_a['href'] = href
                else:
                    target_a['href'] = 'http://www.csrc.gov.cn' + href
                target_a['title'] = title
                target_a['org'] = target['addr']
                result.append(target_a)

        ALL_ORGS = filter_keyword(result, ORG_TARGET_KEYWORD)

        get_org_lists(ALL_ORGS)

    except Exception as e:
        print(e)


# 获所有派出机构数据
def get_org_lists(target=[]):

    if len(target) == 0:
        return
    for item in target:
        # print(item['org'])
        if item["href"].find('channel') != -1:
            driver = Chrome(executable_path="/usr/local/bin/chromedriver",
                            options=CHROME_OPS)
            driver.get(item["href"])
            driver.switch_to.frame("DataList")
            page_source = driver.page_source
            bs = BeautifulSoup(
                page_source,
                'lxml',
            )
            driver.close()
            all_row = bs.find_all('div', class_="row")
            for row in all_row:
                res_map = {}
                href = row.find('a').get('href').replace('../../', '')
                title = row.find('a').get_text()
                date = row.find('li', class_="fbrq").get('title')
                res_map["url"] = item["href"][:-27] + href
                res_map["title"] = title
                res_map["date"] = format_date(date)
                TARGET_LISTS.append(res_map)

        else:
            response = requests.get(item["href"], headers=HEADERS, timeout=10)
            bs = BeautifulSoup(
                response.content,
                'lxml',
            )
            target_rows = bs.find('div', class_='fl_list').find_all('li')

            for row in target_rows:
                res_map = {}
                href = row.find('a').get('href').replace('./', '')
                title = row.find('a').get_text()
                date = row.find('span').get_text()
                res_map["url"] = item["href"] + href
                res_map["title"] = title
                res_map["date"] = format_date(date)
                TARGET_LISTS.append(res_map)

    print('orgs list done!!!')
    # print(TARGET_LISTS)


def format_date(str):
    if len(str) <= 0 or str == None:
        return
    if str.find('年') > -1 and str.find('月') > -1 and str.find('日') > -1:
        r = re.search(r'(\d{4})年(\d{2})月(\d{2})日', str)
        return r.group(1) + '-' + r.group(2) + '-' + r.group(3)
    else:
        return str


def insert_db():
    db = MyData()
    for data in TARGET_LISTS:

        db.addData(data["title"], '中国证券监督管理委员会', data["url"], 'null',
                   data["date"] + ' 00:00:00')

    db.close()
    print('data saved in db!!!')


def save_data():
    try:
        data_str = json.dumps(TARGET_LISTS, ensure_ascii=False)
        with open('data.json', 'w') as f:
            f.write(data_str)

        print('data saved in local!!!')
    except Exception as e:
        print(e)


def data_filter_by_date(date_str):
    if date_str != None:
        target_ts = get_timestamp(date_str)
        data_copy = TARGET_LISTS[:]
        TARGET_LISTS.clear()

        for d in data_copy:
            if len(d["date"].replace(' ', '')) > 0:
                if get_timestamp(d["date"]) >= target_ts:
                    TARGET_LISTS.append(d)
        print('data filtered!!!')


def get_timestamp(date_str):
    r = re.search(r'(\d{4})-(\d{2})-(\d{2})', date_str)
    y = int(r.group(1))
    m = int(r.group(2))
    d = int(r.group(3))
    target_date = datetime(y, m, d)
    return target_date.timestamp()


def getLatestDate():
    db = MyData()
    date = db.getLatestDate()
    return date


def additionalCrawl():
    # 处理上市部行政监管措施未爬取数据
    target = 'http://www.csrc.gov.cn/pub/newsite/ssgsjgb/ssbxzjgcs_9237/bxzjgcs/'

    response = requests.get(target, headers=HEADERS, timeout=10)
    #  解决中文乱码问题
    # response.encoding = 'utf-8';
    bs = BeautifulSoup(
        response.content,
        'lxml',
    )
    alinks = bs.find('div', class_='left_nav').find_all('a')[1:]
    target_links = []
    for a in alinks:
        href = a.get('href')
        target_links.append(href.replace('../', ''))

    for link in target_links:
        new_target = 'http://www.csrc.gov.cn/pub/newsite/ssgsjgb/ssbxzjgcs_9237/' + link
        get_dept_lists(new_target)


def additionalCrawl2():
    # 增加爬取信息公开数据
    target = 'http://www.csrc.gov.cn/pub/zjhpublic/'

    driver = Chrome(executable_path="/usr/local/bin/chromedriver",
                    options=CHROME_OPS)
    driver.get(target)
    # iframe = driver.find_element_by_css_selector('iframe#divNoObjectFound')
    driver.switch_to.frame("DataList")
    page_source = driver.page_source

    # 爬取20页的数据
    for page in range(20):
        bs = BeautifulSoup(
            page_source,
            'lxml',
        )
        all_row = bs.find_all('div', class_="row")
        for row in all_row:
            res_map = {}
            href = row.find('a').get('href')
            title = row.find('a').get_text()
            date = row.find('li', class_="fbrq").get('title')
            res_map["title"] = title
            res_map["date"] = format_date(date)
            res_map[
                "url"] = 'http://www.csrc.gov.cn/pub/zjhpublic/' + href.replace(
                    '../', '')

            TARGET_LISTS.append(res_map)
        if page < 20:
            driver.find_element_by_css_selector('span.nav_go_next').click()
            page_source = driver.page_source

    driver.close()


def additionalCrawl3():
    # 增加爬取各省份信息公开数据
    target = 'http://www.csrc.gov.cn/pub/zjhpublic/'

    driver = Chrome(executable_path="/usr/local/bin/chromedriver",
                    options=CHROME_OPS)

    driver.get(target)

    page_source = driver.page_source
    bs = BeautifulSoup(
        page_source,
        'lxml',
    )

    tag_a = bs.find('center').find_all('a')
    all_province_link = []
    for a in tag_a:
        href = 'http://www.csrc.gov.cn' + a.get('href')
        all_province_link.append(href)

    for link in all_province_link:
        driver.get(link)
        driver.switch_to.frame("DataList")
        page_source = driver.page_source
        bs = BeautifulSoup(
            page_source,
            'lxml',
        )
        all_row = bs.find_all('div', class_="row")
        for row in all_row:
            res_map = {}
            href = row.find('a').get('href')
            title = row.find('a').get_text()
            date = row.find('li', class_="fbrq").get('title')
            res_map["title"] = title
            res_map["date"] = format_date(date)
            res_map[
                "url"] = 'http://www.csrc.gov.cn/pub/zjhpublic/' + href.replace(
                    '../', '')

            TARGET_LISTS.append(res_map)

    driver.close()


if __name__ == "__main__":

    get_target_tab(TARGET_CLS)
    get_department_links()
    get_organization_links()
    additionalCrawl()
    additionalCrawl2()
    additionalCrawl3()
    print('data ready for save!!!')
    # 数据处理
    data_filter_by_date(getLatestDate())
    insert_db()
    # save_data()
    print(len(TARGET_LISTS))
    # print(TARGET_LISTS)

    # print(cpu_count() / 2)
    # pool = Pool(processes=cpu_count())
    # try:
    #     delete_empty_dir(DIR_PATH)
    #     pool.map(urls_crawler, urls)
    # except Exception:
    #     delete_empty_dir(DIR_PATH)
    #     pool.map(urls_crawler, urls)
