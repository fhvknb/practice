import 'package:flutter/material.dart';

class Home5 extends StatefulWidget {
  @override
  _Home4State createState() => _Home4State();
}

class _Home4State extends State<Home5> with TickerProviderStateMixin {
  AnimationController _animationController;
  Animation<double> _animationFloatUp;
  Animation<double> _animationGrowSize;

  @override
  void initState() {
    super.initState();

    _animationController = AnimationController(vsync: this, duration: Duration( seconds: 4));

  }

  @override
  void dispose() {
    _animationController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {

    double _imgHeight = MediaQuery.of(context).size.height / 2;
    double _imgWidth = MediaQuery.of(context).size.height / 3;
    double _imgBottomLocation = MediaQuery.of(context).size.height - _imgHeight;

    _animationFloatUp = Tween(
      begin: _imgBottomLocation,
      end: 0.0,
    ).animate(
      CurvedAnimation(
        parent: _animationController,
        curve: Interval(0.0, 1.0, curve: Curves.fastOutSlowIn)
      )
    );

    _animationGrowSize = Tween(
      begin: 50.0,
      end: _imgWidth,
    ).animate(CurvedAnimation(
        parent: _animationController,
        curve: Interval(0.0, 0.5, curve: Curves.elasticInOut)
       )
    );

    _animationController.forward();

    return Scaffold(
      appBar: AppBar(
        title: Text('Animated Controller'),
      ),
      body: Container(
        child: AnimatedBuilder(
          animation: _animationFloatUp,
          builder: (context, child) {
            return Container(
              child: child,
              margin: EdgeInsets.only(
                top: _animationFloatUp.value,
              ),
              width: _animationGrowSize.value,
            );
          },

          child: GestureDetector(
            onTap: () {
              if (_animationFloatUp.isCompleted) {
                _animationController.reverse();
              }else {
                _animationController.forward();
              }
            },
            child: Image.asset('assets/images/baoer.jpg', height: _imgHeight, width: _imgWidth),
          ),
        ),
      ),
    );
  }
}

