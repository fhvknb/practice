import 'package:flutter/material.dart';

class Home4 extends StatefulWidget {
  @override
  _Home4State createState() => _Home4State();
}

class _Home4State extends State<Home4> with TickerProviderStateMixin {
  AnimationController _controllerFloatUp;
  AnimationController _controllerGrowSize;
  Animation<double> _animationFloatUp;
  Animation<double> _animationGrowSize;

  @override
  void initState() {
    super.initState();

    _controllerFloatUp = AnimationController(vsync: this, duration: Duration( seconds: 4));
    _controllerGrowSize = AnimationController(vsync: this, duration: Duration( seconds: 2));

  }

  @override
  void dispose() {
    _controllerFloatUp.dispose();
    _controllerGrowSize.dispose();
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
    ).animate(CurvedAnimation(
        parent: _controllerFloatUp,
        curve: Curves.fastOutSlowIn)
    );

    _animationGrowSize = Tween(
      begin: 50.0,
      end: _imgWidth,
    ).animate(CurvedAnimation(
        parent: _controllerGrowSize,
        curve: Curves.elasticInOut)
    );

    _controllerFloatUp.forward();
    _controllerGrowSize.forward();

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
                    _controllerFloatUp.reverse();
                    _controllerGrowSize.reverse();
                  }else {
                    _controllerFloatUp.forward();
                    _controllerGrowSize.forward();
                  }
                },
                child: Image.asset('assets/images/baoer.jpg', height: _imgHeight, width: _imgWidth),
              ),
          ),
        ),
    );
  }
}

