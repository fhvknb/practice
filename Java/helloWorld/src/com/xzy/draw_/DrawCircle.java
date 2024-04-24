package com.xzy.draw_;

import javax.swing.*;
import java.awt.*;

public class DrawCircle extends JFrame {

    private MyPannel mp = null;

    public static void main(String[] args) {

        new DrawCircle();
    }

    public DrawCircle() {
        mp = new MyPannel();
        this.add(mp);
        this.setSize(400, 300);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }


}


class MyPannel extends Panel {

    @Override
    public void paint(Graphics g) {
        super.paint(g);
//        g.drawOval(10, 10, 100, 100);  // 圆形

        // 绘制方法使用
//        g.drawLine(10, 10, 100, 100);  // 直线
//        g.drawRect(10, 10, 200, 200); // 矩形
//        g.setColor(Color.pink);
//        g.fillRect(10, 10, 200, 200);
//        Image image = Toolkit.getDefaultToolkit().getImage(MyPannel.class.getResource("/bg.png"));
//        g.drawImage(image, 10, 10, 150, 150, this);
        g.setColor(Color.yellow);
        g.setFont(new Font("行书", Font.BOLD, 50));
        g.drawString("晚上好", 50, 50);  // 文字左下角
    }
}
