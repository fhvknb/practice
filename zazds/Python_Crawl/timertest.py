# coding=utf-8
from datetime import datetime
import os


def save_data():
    try:
        data_str = datetime.now()
        with open('./test.txt', 'a') as f:
            f.write(str(data_str) + '\t\n')

        # print('end !!!')
    except Exception as e:
        print(e)


if __name__ == "__main__":
    save_data()
