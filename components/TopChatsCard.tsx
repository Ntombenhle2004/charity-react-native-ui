import { View, Text, StyleSheet, ScrollView } from "react-native";
import AvatarItem from "./AvatarItem";

export default function TopChatsCard() {
  return (
    <View style={styles.section}>
      <View style={styles.card}>
        <Text style={styles.title}>Chats</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          <AvatarItem
            name="Mira"
            image={require("../assets/images/smiling-redhaired-boy-illustration_1308-176664-removebg-preview.png")}
            online
          />
          <AvatarItem
            name="Phill"
            image={require("../assets/images/smiling-young-man-illustration_1308-173524-removebg-preview.png")}
            online
          />
          <AvatarItem
            name="Mike"
            image={require("../assets/images/woman-floral-traditional-costume_1308-176159-removebg-preview.png")}
          />
          <AvatarItem
            name="Kierra"
            image={require("../assets/images/woman-with-braided-hair-illustration_1308-174675-removebg-preview.png")}
          />
          <AvatarItem
            name="Ntorh"
            image={require("../assets/images/smiling-young-man-illustration_1308-173524-removebg-preview.png")}
            online
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#D9D9D9",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 12,
  },
  scroll: { marginTop: 10 },
  section: {
    paddingTop:20
  }
});
