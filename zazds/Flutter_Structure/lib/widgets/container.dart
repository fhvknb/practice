import 'package:flutter/material.dart';

class MyContainer extends StatelessWidget {
  const MyContainer({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100.0,
      decoration: BoxDecoration(
        gradient: LinearGradient(colors: [
          Colors.pink.shade100,
          Colors.lightGreen.shade100
        ]),
        borderRadius: BorderRadius.only(
          bottomLeft: Radius.circular(100.0),
          bottomRight: Radius.circular(10.0),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.white,
            blurRadius: 10.0,
            offset: Offset(0.0, 10.0)
          )
        ]
      ),
      child: Column(
        children: <Widget>[
          Center(
            child: Text(
              'Flutter World for Mobile',
              style: TextStyle(
                  fontSize: 24.0,
                  color: Colors.deepPurple,
                  decorationStyle: TextDecorationStyle.dotted,
                  decorationColor: Colors.deepPurpleAccent,
                  decoration: TextDecoration.underline
              ),
              maxLines: 4,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.justify,
            ),
          ),
          Divider(),
          Center(
            child:  RichText(
                text: TextSpan(
                  text: 'Flutter World',
                  style: TextStyle(
                    fontSize: 24.0,
                    color: Colors.deepPurple,
                    decoration: TextDecoration.underline,
                    decorationColor: Colors.deepPurpleAccent,
                    decorationStyle: TextDecorationStyle.dotted,
                    fontStyle: FontStyle.italic,
                    fontWeight: FontWeight.normal,
                  ),
                  children: <TextSpan>[
                    TextSpan(
                      text: ' for'
                    ),
                    TextSpan(
                      text: ' Mobile',
                      style: TextStyle(
                        color: Colors.deepOrange,
                        fontStyle: FontStyle.normal,
                        fontWeight: FontWeight.bold
                      )
                    )
                  ]
                ),
            ),
          )
        ],
        ),


    );
  }
}


