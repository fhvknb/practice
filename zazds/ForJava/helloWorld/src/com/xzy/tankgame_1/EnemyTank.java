package com.xzy.tankgame_1;



public class EnemyTank extends  Tank implements Runnable{

    public EnemyTank(int x, int y) {
        super(x, y);
    }

    @Override
    public void run() {
        while(true) {


            // 再次发射子弹
            if(isAlive && shots.size() < 1) {
                Shot shot = null;
//                System.out.println("方向" + getDirect());
                switch (getDirect()) {
                    case 0:
                        shot = new Shot(getX() + 20, getY(), 0);
                        shots.add(shot);
                        break;
                    case 1:
                        shot = new Shot(getX() + 60, getY() + 20, 1);
                        shots.add(shot);
                        break;
                    case 2:
                        shot = new Shot(getX() + 20, getY() + 60, 2);
                        shots.add(shot);
                        break;
                    case 3:
                        shot = new Shot(getX(), getY() + 20, 3);
                        shots.add(shot);
                        break;
                }

                new Thread(shot).start();

            }
            // 坦克随机移动
            switch(getDirect()) {
                case 0:
                    for(int i = 0; i < 30; i++) {
                        if(getY() > 0 ) {
                            moveUp();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    break;
                case 1:
                    for(int i = 0; i < 30; i++) {
                        if(getX() + 60 < 1000) {

                            moveRight();;
                        }

                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    break;
                case 2:
                    for(int i = 0; i < 30; i++) {
                        if(getY() + 80 < 750) {
                            moveDown();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    break;
                case 3:
                    for(int i = 0; i < 30; i++) {
                        if(getX() > 0) {
                            moveLeft();
                        }
                        try {
                            Thread.sleep(50);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }
                    break;
            }


            setDirect((int)(Math.random() * 4));

            if(!isAlive) {
                break;
            }
        }
    }
}
