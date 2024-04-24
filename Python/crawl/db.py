import MySQLdb


class MyData():
    def __init__(self, ):
        self.db = MySQLdb.connect(
            host='10.100.99.100',
            port=30306,
            user='ccc_article',
            passwd='123456',
            db='ccc_article',
            use_unicode=False,
            charset='utf8',
        )
        self.cursor = self.db.cursor()

    def getLatestDate(self):
        date = None
        try:

            query = (
                "SELECT publish_time FROM article ORDER BY publish_time desc limit 1"
            )
            self.cursor.execute(query)
            for data in self.cursor:
                date = str(data[0])[0:10]
            self.close()
            return date
        except Exception as e:
            pass
            # print(e)

    def addData(self, title, source, url, content, publish_time, *args):
        try:
            self.cursor.execute(
                """INSERT INTO `article` (`title`, `source`, `url`, `content`, `publish_time`) VALUES ('{}', '{}', '{}', '{}', '{}')"""
                .format(title, source, url, content, publish_time))
            self.db.commit()
        except Exception as e:
            pass

            # print(e)

    def close(self):
        self.cursor.close()
        self.db.close()
