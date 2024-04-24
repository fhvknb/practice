import 'package:flutter/material.dart';
//import 'package:flutter_app/pages/home.dart';
//import 'package:flutter_app/pages/home2.dart';
//import 'package:flutter_app/pages/home3.dart';
//import 'package:flutter_app/pages/home4.dart';
import 'package:flutter_app/pages/home5.dart';
import 'package:flutter_app/pages/home6.dart';


void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Starter Template',
      theme: ThemeData(primaryColor: Colors.pink.shade100),
      routes: {
          '/about': (BuildContext context) => Home5()
      },
      home: Home6()
    );
  }
}