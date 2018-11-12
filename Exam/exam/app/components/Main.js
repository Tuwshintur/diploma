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
import images from "../../images";
import { Actions } from "react-native-router-flux";

class Main extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }
  showPopup = aa => {};

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>Хичээлүүд</Title>
          </Body>
        </Header>
        <Thumbnail
          style={styles.Thumbnail}
          square
          small
          source={images.mainlogo}
        />
        <Content contentContainerStyle={styles.Content}>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Математик" })}
          >
            <Text>Математик </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Монгол хэл	" })}
          >
            <Text>Монгол хэл </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Нийгмийн ухаан	" })}
          >
            <Text>Нийгмийн ухаан </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Англи хэл	" })}
          >
            <Text>Англи хэл </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Орос хэл	" })}
          >
            <Text>Орос хэл </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Газарзүй	" })}
          >
            <Text>Газарзүй </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Физик	" })}
          >
            <Text>Физик </Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Биологи	" })}
          >
            <Text>Биологи</Text>
          </Button>
          <Button
            style={styles.Button}
            onPress={() => Actions.ExamList({ xxa: "Монгол улсын түүх		" })}
          >
            <Text>Монгол улсын түүх </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginTop: 1,
    marginBottom: 10,

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
