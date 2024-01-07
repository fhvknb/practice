package com.xzy.tankgame_1;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.Vector;

public class MyPanel extends JPanel implements KeyListener, Runnable {
    Hero hero = null;
    Vector<EnemyTank>  enemyTanks = new Vector<>();
    Vector<Bomb> bombs = new Vector<>();

    int heroLife = 2;   // 我方坦克次数

    Image image1 = null;
    Image image2 = null;
    Image image3 = null;

    int enemyTankSize = 3;

    @Override
    public void paint(Graphics g) {
        super.paint(g);

        g.fillRect(0, 0, 1000, 750);


        // 初始化我方坦克
        if(hero != null && hero.isAlive) {
            drawTank(hero.getX(), hero.getY(), g, hero.getDirect(), 1);

            // 画我方坦克子弹
            for(int k = 0; k < hero.shots.size(); k++) {
                Shot shot = hero.shots.get(k);

                if(shot.isAlive) {
                    g.draw3DRect(shot.x, shot.y, 2,2, false);
                }
            }
        }



        //  画敌方坦克
        for(int i = 0; i < enemyTanks.size(); i++) {
             EnemyTank enemyTank = enemyTanks.get(i);
             if(enemyTank.isAlive) {
                 drawTank(enemyTank.getX(), enemyTank.getY(),g, enemyTank.getDirect(), 0);

                 for(int j = 0; j < enemyTank.shots.size(); j++) {
                     Shot shot = enemyTank.shots.get(j);

                     if(shot.isAlive) {
                         g.draw3DRect(shot.x, shot.y, 2,2, false);

                     }else {
                         enemyTank.shots.remove(shot);
                     }
                 }
             }
        }

        // 画炸弹
        for(int k = 0; k < bombs.size(); k++) {
            Bomb bomb = bombs.get(k);
//            System.out.println("进入画炸弹～" + bomb.life);
            if(bomb.life > 6) {
                g.drawImage(image1, bomb.x, bomb.y, 60, 60, this);
            }else if(bomb.life > 3) {
                g.drawImage(image2, bomb.x, bomb.y, 60, 60, this);
            }else {
                g.drawImage(image3, bomb.x, bomb.y, 60, 60, this);
            }
            bomb.lifeDown();
            try {
                Thread.sleep(30);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if(!bomb.isAlive) {
                bombs.remove(bomb);
            }
        }

    }

    // 构造器
    public MyPanel() {
        initHeroTank();
        // 初始化敌方坦克
        for(int i = 0; i < enemyTankSize; i++) {
            EnemyTank enemyTank = new EnemyTank(100 * (i + 1), 0);
            enemyTank.setDirect(2);
            enemyTank.setType(0);
            new Thread(enemyTank).start();
            Shot shot = new Shot(enemyTank.getX() + 20, enemyTank.getY() + 60, enemyTank.getDirect());
            enemyTank.shots.add(shot);
            new Thread(shot).start();
            enemyTanks.add(enemyTank);
        }

        image1 = Toolkit.getDefaultToolkit().getImage(MyPanel.class.getResource("/bomb1.png"));
        image2 = Toolkit.getDefaultToolkit().getImage(MyPanel.class.getResource("/bomb2.png"));
        image3 = Toolkit.getDefaultToolkit().getImage(MyPanel.class.getResource("/bomb3.png"));

    }

    public void initHeroTank () {

        if(heroLife < 1) {
            return;
        }

        if(hero == null) {
            hero = new Hero(350, 650);
            hero.setSpeed(8);
            hero.setDirect(0);
            hero.setType(1);
        }
    }
    //  销毁坦克子弹
    public void destoryShot(Tank e) {
        for(int i = 0; i < e.shots.size(); i++) {
            Shot shot = e.shots.get(i);
            if(!shot.isAlive) {
                e.shots.remove(shot);
            }

        }
    }
    // 判断子弹是否击中坦克
    public void isHitTank(Shot shot, Tank tank) {

        switch(tank.getDirect()) {
            case 0:
            case 2:
                if( (shot.x > tank.getX() && shot.x < tank.getX() + 40) && (shot.y > tank.getY() && shot.y < tank.getY() + 60) ){
                    shot.isAlive = false;
                    tank.isAlive = false;
                    Bomb bomb = new Bomb(tank.getX(), tank.getY());
                    bombs.add(bomb);
                    destoryShot(tank);
                    if(tank.getType() == 1) {
                        hero = null;
                        heroLife--;
                        initHeroTank();
                    }else {
                        enemyTanks.remove(tank);
                    }


                }
                break;
            case 1:
            case 3:
                if((shot.x > tank.getX() && shot.x < tank.getX() + 60) && (shot.y > tank.getY() && shot.y < tank.getY() + 40) ){

                    shot.isAlive = false;
                    tank.isAlive = false;
                    Bomb bomb = new Bomb(tank.getX(), tank.getY());
                    bombs.add(bomb);
                    destoryShot(tank);
                    if(tank.getType() == 1) {
                        hero = null;
                        heroLife--;
                        initHeroTank();
                    }else {
                        enemyTanks.remove(tank);
                    }

                }
                break;
        }
    }

    public void drawTank(int x, int y, Graphics g, int direct, int type) {
        switch(type) {
            case 0:  // 敌方坦克
                g.setColor(Color.cyan);
                break;
            case 1:  // 自己的坦克
                g.setColor(Color.yellow);
                break;
        }

        // 根据方向绘制坦克 0 上 1 右 2 下 3 左

        switch(direct) {
            case 0: // 上
                g.fill3DRect(x, y, 10, 60, false );
                g.fill3DRect(x + 30, y, 10, 60, false );
                g.fill3DRect(x + 10, y + 10, 20, 40, false );
                g.fillOval(x + 10, y + 20, 20, 20);
                g.drawLine(x + 20, y, x+ 20, y + 30);
                break;
            case 1:
                g.fill3DRect(x, y, 60, 10, false );
                g.fill3DRect(x, y + 30, 60, 10, false );
                g.fill3DRect(x + 10, y + 10, 40, 20, false );
                g.fillOval(x + 20, y + 10, 20, 20);
                g.drawLine(x + 30, y + 20, x + 60, y + 20);
                break;
            case 2:
                g.fill3DRect(x, y, 10, 60, false );
                g.fill3DRect(x + 30, y, 10, 60, false );
                g.fill3DRect(x + 10, y + 10, 20, 40, false );
                g.fillOval(x + 10, y + 20, 20, 20);
                g.drawLine(x + 20, y + 30, x+ 20, y + 60);
                break;
            case 3:
                g.fill3DRect(x, y, 60, 10, false );
                g.fill3DRect(x, y + 30, 60, 10, false );
                g.fill3DRect(x + 10, y + 10, 40, 20, false );
                g.fillOval(x + 20, y + 10, 20, 20);
                g.drawLine(x + 30, y + 20, x, y + 20);
            default:
                break;
        }
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {

        if(hero == null) return;

        if (e.getKeyCode() == KeyEvent.VK_W) {
            hero.setDirect(0);
            if(hero.getY() > 0) {
                hero.moveUp();
            }
        } else if (e.getKeyCode() == KeyEvent.VK_D) {
            hero.setDirect(1);
            if(hero.getX() + 60 < 1000) {
                hero.moveRight();
            }
        } else if (e.getKeyCode() == KeyEvent.VK_S) {
            hero.setDirect(2);
            if(hero.getY() + 80 < 750) {
                hero.moveDown();
            }
        } else if (e.getKeyCode() == KeyEvent.VK_A) {
            hero.setDirect(3);
            if(hero.getX() > 0) {
                hero.moveLeft();
            }
        }

        // J 发射子弹
        if(e.getKeyCode() == KeyEvent.VK_J) {

            int max_num = 0;
            for(int l = 0; l < hero.shots.size(); l++) {
                Shot shot = hero.shots.get(l);
                if(shot.isAlive) {
                    max_num++;
                }
            }

            if(max_num < 3) {
                hero.fire();

            }

        }
        this.repaint();

    }

    @Override
    public void keyReleased(KeyEvent e) {
        //
    }

    @Override
    public void run() {

        while(true) {
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            // 判断是否击中敌方坦克
            if(hero != null && hero.shots.size() > 0) {
                for(int i = 0; i < hero.shots.size(); i++) {
                    Shot shot = hero.shots.get(i);

                    for(int j = 0; j < enemyTanks.size(); j++) {
                        EnemyTank enemyTank = enemyTanks.get(j);
                        isHitTank(shot, enemyTank);
                    }

                }
            }
            if(hero != null && hero.isAlive) {
                // 判断是否被敌方坦克击中
                for(int m = 0; m < enemyTanks.size(); m++) {
                    EnemyTank enemyTank = enemyTanks.get(m);
                    for(int n = 0; n < enemyTank.shots.size(); n++) {
                        Shot shot = enemyTank.shots.get(n);
                        isHitTank(shot, hero);
                    }
                }
            }

            this.repaint();
        }
    }
}
