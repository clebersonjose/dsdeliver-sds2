import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../Header";
import OrderCard from "../OrderCard";

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
});