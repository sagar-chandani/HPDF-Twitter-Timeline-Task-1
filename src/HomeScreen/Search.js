import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text,Footer,Content } from 'native-base';
import { StatusBar,StyleSheet,Image } from "react-native";
import {FooterBottom} from './FooterBottom';
export default class Search extends Component {
    static navigationOptions ={

        tabBarIcon: ({ tintColor }) => (
          <Icon name="md-search" style={{color: tintColor}} />
        )
    }
  render() {
    return (
      <Container>
      <Content>
        <Header searchBar rounded style={{marginTop:StatusBar.currentHeight}}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search Twitter" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        </Content>
        <Footer>
        <Content>
              <FooterBottom/>
              </Content>
              </Footer>
      </Container>

    );
  }
}
