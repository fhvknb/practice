import 'package:flutter/material.dart';
import 'package:flutter_app/pages/home5.dart';

class Home6 extends StatefulWidget {
  @override
  _Home6State createState() => _Home6State();
}



class _Home6State extends State<Home6> {
  String _howareyou = '...';

  void _openPageAbout({BuildContext context, bool fullscreenDialog = false}) {
//    Navigator.push(context, MaterialPageRoute(builder: (context) => Home5()));

      Navigator.pushNamed(context, '/about');
  }

  void _openPageHome({BuildContext context}) {

  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Navagation'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.info_outline),
            onPressed: () => _openPageAbout( context: context, fullscreenDialog: true),
          )
        ],
      ),
      body: SafeArea(
          child: Padding(
            padding: EdgeInsets.all(20.0),
            child: Container(
              child: Text('Page 1'),
            ),
          )
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => _openPageHome(context: context),
        tooltip: 'About',
        child: Icon(Icons.sentiment_satisfied),

      ),
    );
  }
}
