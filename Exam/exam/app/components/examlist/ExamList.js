import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title,
  Thumbnail
} from "native-base";
import { StyleSheet } from "react-native";
import images from "../../../images";
import { Actions } from "react-native-router-flux";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>{this.props.xxa}</Title>
          </Body>
        </Header>
        <Thumbnail
          style={styles.Thumbnail}
          square
          small
          source={images.mainlogo}
        />
        <Content contentContainerStyle={styles.Content}>
          <Button style={styles.Button}>
            <Text>Мэдлэг </Text>
          </Button>
          <Button style={styles.Button}>
            <Text>Дасгал </Text>
          </Button>
          <Button style={styles.Button}>
            <Text>Шалгалт </Text>
          </Button>
          <Button style={styles.Button}>
            <Text>Буцах </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginTop: 20,
    marginBottom: 5,
    width: 320,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16
  },
  Content: {
    alignSelf: "center"
  },
  Thumbnail: {
    alignSelf: "center",
    marginTop: 85,
    marginBottom: 85,
    width: 250,
    height: 200,
    backgroundColor: "transparent"
  }
});

export default Main;
