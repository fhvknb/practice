package com.xzy.event_;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class BallMove extends  JFrame   {

    MyPanel mp = null;
    public static void main(String[] args) {

        new BallMove();
    }


    public BallMove() {
        mp = new MyPanel();
        this.add(mp);
        this.addKeyListener(mp);
        this.setSize(400, 300);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.setVisible(true);
    }


}


class MyPanel extends JPanel implements  KeyListener {

    int x = 10;
    int y = 10;

    @Override
    public void paint(Graphics g) {
        super.paint(g);
        g.fillOval(x, y, 30, 30);
    }

        @Override
    public void keyTyped(KeyEvent e) {
        // 字符输出
    }

    @Override
    public void keyPressed(KeyEvent e) {
        System.out.println( (char) e.getKeyCode() +  "键盘按下");

        if(e.getKeyCode() == KeyEvent.VK_DOWN) {
            y+=2;
        }else if ( e.getKeyCode() == KeyEvent.VK_UP) {
            y+=2;
        }else if ( e.getKeyCode() == KeyEvent.VK_LEFT) {
            x+=2;
        }else if ( e.getKeyCode() == KeyEvent.VK_RIGHT) {
            x+=2;
        }


        this.repaint();  // 重绘
    }

    @Override
    public void keyReleased(KeyEvent e) {
//        System.out.println("键盘松开");
    }
}