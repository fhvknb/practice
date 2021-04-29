import org.junit.jupiter.api.Test;

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


}

enum Season {
    SPRING, SUMMER;
}