import React, { Component } from 'react';
//var Icon = require('FAKIconImage');

import { Platform, StyleSheet, View, Image, TouuchableOpacity,ScrollView } from 'react-native';
import {
  Container, Header, Body, CheckBox,
  Title, Card, CardItem, Left, Right, Icon, Content, Thumbnail, Subtitle, Grid, Col, Row, Text, Button
} from 'native-base';
import {
  MenuContext,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';



export default class App extends Component {

  render() {

    return (

      <Container >
        <Header style={{ backgroundColor: 'white' }}>

          <View>
            <Text style={header.baseText}>
              Start
            <Text style={header.innerText}>   Points</Text>
            </Text>

            <Icon style={{marginTop:-37}}
            name="arrow-forward"
            />
              
           
              
          </View>
          <MenuContext style={styles.container}>
            <View>
              <Menu style={{ marginLeft: 80 }}>
                <MenuTrigger >
                <MenuTrigger Icon="Open menu" />
                  
                   </MenuTrigger>
              

              

                <MenuOptions>
                  <MenuOption text="Save" />
                  <MenuOption >
                    <Text>Delete</Text>
                  </MenuOption>
                  <MenuOption

                    disabled={true}
                    text="Disabled"
                  />
                </MenuOptions>
              </Menu>
            </View>
          </MenuContext>

        </Header>
        <Content>

          <Card style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>

            <CardItem >
              <Left>

                <View style={{ alignItems: "flex-start", top: 5 }}>
                  <Text style >Redeema Price</Text>

                  <Text style={{ fontWeight: 'bold', fontSize: 25, left: -34 }}>623</Text>
                  <Text style={{ marginTop: -25, marginLeft: -10, fontSize: 16 }}>     .00</Text>


                </View>
              </Left>

              <Right>

                <View style={{ alignItems: "flex-end" }}>



                  <Thumbnail
                    source={require('./img/icon.png')}
                    style={{ width: 100, height: 60, marginRight: 5 }} />
                </View>
              </Right>


            </CardItem>

            <View
              style={{
                paddingTop:10,
                paddingBottom:-8,
                width:310,
                borderBottomColor: 'black',
                borderBottomWidth: 0.2,
                alignSelf: 'center',
              }}
            />
            <CardItem>
              <Left>




                <View style={{ alignItems: "flex-start", top:-3}}>
                  <Text style >Total Points</Text>

                  <Text style={{ fontWeight: 'bold', color: "gray", fontSize: 25, left: -23 }}>724</Text>
                  <Text style={{ marginTop: -25, marginLeft: 30, fontSize: 16, color: "gray" }}>.00</Text>


                </View>
              </Left>


              <Right>

                <View style={{ alignItems: "flex-end" }}>
                  <View style={{ alignItems: "flex-start", top: 14, marginLeft: -40, }}>
                    <Text style={{fontSize: 11,left:-13}} >Points expires by 20 Jul, 2020</Text>

                    <Text style={{ fontWeight: 'bold', fontSize: 25, left: 65 }}>318</Text>
                    <Text style={{ marginTop: -25, paddingBottom: 20, marginLeft: 110 }}>.24</Text>



                  </View>

                </View>
              </Right>
            </CardItem>

          </Card>
          <Text style={{ fontWeight: 'bold' }} style={styles.baseText}>
            120
            <Text style={{ fontSize: 12 }}>.33</Text>
            <Text style={styles.innerText}> points earned, 2 hours ago</Text>
          </Text>

          <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 20, marginLeft: 320, marginTop: -30 }}>View </Text>

          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 40, marginRight: 40, marginTop: 40, justifyContent: 'space-between' }}>
            <View>
              <Image style={{ width: 70, height: 70, borderRadius: 60 }} source={require('./img/hqdefault.jpg')}></Image>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Redeem</Text>
            </View>
            <View>
              <Image style={{ width: 70, height: 70, borderRadius: 60 }} source={require('./img/hqdefault.jpg')}></Image>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Earn</Text>
            </View>
            <View>
              <Image style={{ width: 70, height: 70, borderRadius: 60 }} source={require('./img/hqdefault.jpg')}></Image>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Donate</Text>
            </View>
          </View>


          <ScrollView >

          <Card style={{ marginTop: 30, marginLeft: 20, marginRight: 20, borderRadius: 70 / 2 }}>

            <CardItem>
              <Left>
                <Image
                  source={require('./img/Untitled.jpg')}
                  style={{ width: 60, height: 60, borderRadius: 30 / 2, marginRight: 5 }} />
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={{ fontSize: 18 }}>Transfer Points</Text>
                  <Text style={{ fontSize: 14, marginRight: 10 }}>Share your points</Text>

                </View>
              </Left>

              <Right>

              </Right>

              <View style={{ alignItems: "flex-end" }}>

                <Icon
                  name='arrow-forward'
                />

              </View>

            </CardItem>

          </Card>
          </ScrollView>

          <Card style={{ marginTop: -1, marginLeft: 20, marginRight: 20, borderRadius: 70 / 2 }}>

            <CardItem>
              <Left>
                <Image
                  source={require('./img/Untitled.jpg')}
                  style={{ width: 60, height: 60, borderRadius: 30 / 2, marginRight: 5 }} />
                <View style={{ alignItems: "flex-start" }}>
                  <Text style={{ fontSize: 18 }}>Transfer Points</Text>
                  <Text style={{ fontSize: 14, marginRight: 10 }}>Share your points</Text>

                </View>
              </Left>

              <Right>

              </Right>

              <View style={{ alignItems: "flex-end" }}>

                <Icon
                  name='arrow-back'
                  color='blue'
                />

              </View>

            </CardItem>

          </Card>




        </Content>
      </Container>


    );
  }
}

const styles = StyleSheet.create({
  baseText: {

    fontSize: 20,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 6,
    backgroundColor: 'lightgreen',
    borderRadius: 10

  },
  innerText: {

    fontSize: 15

  }
});

const stylesprice = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50
  },
  innerText: {

    fontSize: 20,
  }
});

const header = StyleSheet.create({
  baseText: {

    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 130
  },
  innerText: {

    fontSize: 24,
    color: 'red'
  }
});

const feaures_styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 600
  },
})