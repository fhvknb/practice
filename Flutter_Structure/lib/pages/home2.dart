import 'package:flutter/material.dart';
import 'package:flutter_app/widgets/container.dart';

class Home2 extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home2> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Title'),
        leading: IconButton(
            icon: Icon(Icons.menu),
            onPressed: (){},
        ),
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.search),
              onPressed: (){}
              ),
          IconButton(
              icon: Icon(Icons.more_vert),
              onPressed: (){},
          )
        ],
        flexibleSpace: SafeArea(
            child: Icon(
              Icons.photo_camera,
              size: 75.0,
              color: Colors.white70,
            )
        ),
        bottom:  PreferredSize(
            child: Container(
              color: Colors.pink.shade50,
              height: 75.0,
              width: double.infinity,
              child: Center(
                child: Text('Bottom'),
              ),
            ),
            preferredSize: Size.fromHeight(75.0)
        ),
      ),
      body: Padding(
        padding: EdgeInsets.all(20.0),
        child: SafeArea(
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                const MyContainer(),
                Padding(
                  padding: EdgeInsets.all(8.0),
                ),
                const MyContainer(),
                FlatButton(
                  onPressed: (){},
                  child: Text('Flag.')
                ),
                RaisedButton(
                  onPressed: (){},
                  child: Text('save')
                ),
                PopupMenuButton<TodoMenuItem>(
                  icon: Icon(Icons.view_list),
                  onSelected: ((valueSelected){
                    print(valueSelected);
                    print('xxxx');
                  }),
                  itemBuilder: (BuildContext context) {
                    return foodMenuList.map((TodoMenuItem todoMenuItem) {
                      return PopupMenuItem<TodoMenuItem>(
                        value: todoMenuItem,
                        child: Row(
                          children: <Widget>[
                            Icon(todoMenuItem.icon.icon),
                            Padding(padding: EdgeInsets.all(8.0)),
                            Text(todoMenuItem.title)
                          ],
                        )
                      );
                    }).toList();
                  },
                ),
                Image(
                  image: AssetImage("assets/images/baoer.jpg"),
                  width: 200.0,
                ),
                Divider(),
                Image.network(
                  'http://source.nfwys.com/test-1125%2A11125-3.png',
                  width: 200.0,
                ),
                TextField(
                  keyboardType: TextInputType.text,
                  style: TextStyle(
                    color: Colors.grey.shade100,
                    fontSize: 16.0,

                  ),
                  decoration: InputDecoration(
                    labelText: "Notes",
                    labelStyle: TextStyle(
                      color: Colors.blue,

                    ),
                    border: UnderlineInputBorder(),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }

}



class TodoMenuItem {
  final String title;
  final Icon icon;

  TodoMenuItem({this.title, this.icon});
}

List<TodoMenuItem> foodMenuList = [
  TodoMenuItem(title: 'Fast food', icon: Icon(Icons.fastfood)),
  TodoMenuItem(title: 'Remind me', icon: Icon(Icons.add_alarm)),

];