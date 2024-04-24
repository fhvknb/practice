package com.xzy.sellticket;

public class SellTicket {
    public static void main(String[] args) throws InterruptedException {
//        Sell1 sell1 = new Sell1();
//        Sell1 sell2 = new Sell1();
//        Sell1 sell3 = new Sell1();
//
//        sell1.start();
//        sell2.start();
//        sell3.start();

        System.out.println("===========  接口线程实现 ==========");

//        Sell2 sell2 = new Sell2();
//        Thread thread = new Thread(sell2);
//        Thread thread2 = new Thread(sell2);
//        Thread thread3 = new Thread(sell2);
//
//
//        thread.start();;
//        thread2.start();;
//        thread3.start();;


//        Thread.sleep(10 * 1000);


        Sell3 sell3 = new Sell3();
        Thread thread = new Thread(sell3);
        Thread thread2 = new Thread(sell3);
        Thread thread3 = new Thread(sell3);


        thread.start();;
        thread2.start();;
        thread3.start();;
    }
}

class Sell3 implements  Runnable {
    private  int ticketNum = 100;
    private boolean loop = true;
    public synchronized void sell() {
        if(ticketNum < 1) {
            System.out.println("票已售罄");
            loop = false;
            return;
        }

        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(Thread.currentThread().getName() + "窗口售出一张票。 还剩余" + --ticketNum);
    }
    @Override
    public void run() {
        while(loop) {
            sell();
        }
    }
}


class Sell1 extends Thread {

    private static int ticketNum = 100;
    @Override
    public void run() {
//        super.run();

        while(true) {

            if(ticketNum < 0) {
                System.out.println("票已售罄");
                break;
            }

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName() + "窗口售出一张票。 还剩余" + --ticketNum);

        }


    }
}

class Sell2 implements  Runnable {
    private  int ticketNum = 100;

    @Override
    public void run() {
        while(true) {

            if(ticketNum < 1) {
                System.out.println("票已售罄");
                break;
            }

            try {
                Thread.sleep(50);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println(Thread.currentThread().getName() + "窗口售出一张票。 还剩余" + --ticketNum);

        }
    }
}