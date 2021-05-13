package com.xzy.properties;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class Properties01 {
    public static void main(String[] args) throws IOException {


        Properties properties = new Properties();

        properties.load(new FileReader("src/mysql.properties"));

        properties.list(System.out);

        String user =  properties.getProperty("user");
        System.out.println(user);
        //  store  // 保存配置文件
    }


}
