import 'package:flutter/material.dart';

class Home3 extends StatefulWidget {
  @override
  _Home3State createState() => _Home3State();
}

class _Home3State extends State<Home3> {
  double _height = 100.0;
  double _width = 100.0;
  bool _crossFadeStateShowFirst = true;

  void _increaseWidth() {
    setState(() {
      _width = _width > 320.0 ? 100.0 : _width += 50;
    });
  }
  void _crossFade() {
    setState(() {
      _crossFadeStateShowFirst = _crossFadeStateShowFirst ? false : true;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Animated'),
      ) ,
      body: SafeArea(
          child: Container(
            color: Colors.orange.shade100,
            child: Column(
              children: <Widget>[
                Row(
                  children: <Widget>[
                    AnimatedContainer(
                      duration: Duration(
                          microseconds: 500
                      ),
                      curve: Curves.easeOut,
                      color: Colors.amber,
                      height: _height,
                      width: _width,
                      child: FlatButton(
                        onPressed: (){
                          _increaseWidth();
                        },
                        child: Text('Tap to \nGrow width\n$_width'),

                      ),
                    )
                  ],
                ),
                Divider(),
                Row(
                  children: <Widget>[
                   Stack(
                     children: <Widget>[
                       AnimatedCrossFade(
                         duration: Duration(
                             microseconds: 3000
                         ),
                         sizeCurve: Curves.bounceOut,
                         crossFadeState: _crossFadeStateShowFirst ? CrossFadeState.showFirst : CrossFadeState.showSecond,
                         firstChild: Container(
                           color: Colors.deepOrange.shade100,
                           height: 100.0,
                           width: 100.0,
                         ),
                         secondChild: Container(
                           color: Colors.green.shade100,
                           height: 200.0,
                           width: 200.0,
                         ),

                       ),
                       Positioned.fill(
                         child: FlatButton(
                             onPressed: (){_crossFade();},
                             child: Text(
                               'Tap to\nFade Color & Size'
                             )),

                       )
                     ],
                   )
                  ],
                )
              ],
            ),
          )
      ) ,
    );
  }
}
