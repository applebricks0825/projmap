import sqlite3
from getDB import DBSearch
import os



tester = DBSearch()


tester.start()

find = tester.findXY("id",'39.3505' ,'39.24', '-76.6886', '-76.5334')

find = tester.findAll("id")
for i in find:
    print(i)

tester.end()

