import org.junit.jupiter.api.Test;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");

        System.out.println(Math.max(10, 100));
        System.out.println(Season.SPRING);
//        Integer i1 = new Integer("11");

//        String a = "A";
//        a = "B";

        System.out.println();
        // command + j  显示全部快捷键


    }

    @Test
    public void m1() {
        System.out.println("方法1被调用了！");
        System.out.println(Season.SPRING);
    };

    @Test
    public void m2() {
        System.out.println("方法2被调用了！");
        System.out.println(Season.SUMMER);
    };

    @Test
    public void test() {

//        DecimalFormat decimalFormat = new DecimalFormat("0.00");
//        System.out.println("====");
//        String result = decimalFormat.format((float)5/2);
//        System.out.println(result);

        ArrayList<String> arr = new ArrayList<>();
        arr.add("xiang");
        arr.add("CHAO");
        System.out.println(arr.size());

        arr.remove(arr.size() - 1);
        System.out.println(arr);
    }

}

enum Season {
    SPRING, SUMMER;
}