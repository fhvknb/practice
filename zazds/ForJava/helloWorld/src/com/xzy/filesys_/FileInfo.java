package com.xzy.filesys_;

import org.junit.jupiter.api.Test;

import java.io.File;

public class FileInfo {
    public static void main(String[] args) {

    }

    @Test
    public void info() {
        File file = new File("/Users/shawnxiang/Desktop/test.txt");

        //  getName getAbsolutePath getParent length exists isFile isDirectory
        System.out.println(file.getName());
        System.out.println(file.getAbsolutePath());
    }
}
