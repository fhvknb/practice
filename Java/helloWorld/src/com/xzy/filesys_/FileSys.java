package com.xzy.filesys_;

import java.io.File;
import java.io.IOException;

public class FileSys {
    public static void main(String[] args) {

//        createFile01();
//        createFile02();
        createFile03();
    }



    public static void createFile01() {
        String filePath = "/Users/shawnxiang/Desktop/file01.txt";
        File file= new File(filePath);
        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        }catch (IOException  e) {
                e.printStackTrace();;
        }
    }

    public static void createFile02() {

        File fileParent = new File("/Users/shawnxiang/Desktop/");
        String fileName = "file02.txt";
        File file= new File(fileParent, fileName);
        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        }catch (IOException  e) {
            e.printStackTrace();;
        }
    }

    public static void createFile03() {

        String  parentPath = "/Users/shawnxiang/Desktop/";
        String filePath = "test.txt";
        File file= new File(parentPath, filePath);
        try {
            file.createNewFile();
            System.out.println("文件创建成功");
        }catch (IOException  e) {
            e.printStackTrace();;
        }
    }
}
