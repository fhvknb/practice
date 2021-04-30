package com.xzy.tankgame_1;

public class Shot implements  Runnable{

    int x;
    int y;
    int direct;
    private int speed = 8;
    boolean isAlive = true;

    public Shot(int x, int y, int direct) {
        this.x = x;
        this.y = y;
        this.direct = direct;
    }

    @Override
    public void run() {

        while(true) {

            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            switch(direct) {
                case 0:
                    y -= speed;
                    break;
                case 1:
                    x += speed;
                    break;
                case 2:
                    y += speed;
                    break;
                case 3:
                    x -= speed;
                    break;
                default :
                    break;
            }

//            System.out.println("子弹X坐标：" + x + " 子弹X坐标：Y " + y);

            if( !(x >= 0 && x < 1000 && y >= 0 && y < 750 && isAlive)) {
                isAlive = false;
                System.out.println("子弹销毁了");
                break;
            }
        }
    }


}
