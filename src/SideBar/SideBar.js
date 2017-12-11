import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import {FooterBottom} from '../HomeScreen/FooterBottom';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Search","Profile" , "List", "Highlights","Moments"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content style={{marginTop:StatusBar.currentHeight, padding:20}}>
          <Image circle
            source={{
              uri: "https://pbs.twimg.com/profile_images/3030087336/e17dc9eca0a380c38534dd3003bcce02_400x400.jpeg"
            }}
            style={{
              height : 50,
              width : 50,
              alignSelf: "stretch",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center"
            }}
          />
          <Text style={{color: 'black', fontWeight: 'bold',fontSize: 20}}>
           Sagar Chandani
         </Text>
         <Text style={{color: 'black'}}>
          @spc1194
        </Text>
        <Text>
        <Text style={{fontWeight: 'bold'}}>
        256
        {' '}
        <Text style={{color: 'black'}}>
          Followers
        </Text>
      </Text>
      {' '}
      <Text style={{fontWeight: 'bold'}}>
         557
         {' '}
        <Text style={{color: 'black'}}>
          Following
        </Text>
      </Text>
      </Text>

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
          <FooterBottom/>
      </Container>
    );
  }
}
