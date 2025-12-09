import { View, Text, StyleSheet, Image } from "react-native";

export default function GroupChatCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Group Chat</Text>

      <View style={styles.row}>
        <Image
          source={require("../assets/images/woman-floral-traditional-costume_1308-176159-removebg-preview.png")}
          style={styles.groupAvatar}
        />
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <Text style={styles.gName}>Kevin’s BP</Text>
          <Text style={styles.gText}>Kate and Ann are typing...</Text>
        </View>

        <Text style={styles.time}>12:32</Text>

        <View style={styles.counter}>
          <Text style={styles.counterText}>6</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
    marginTop: 5,
  },
  title: { fontSize: 20, fontWeight: "700", marginBottom: 10 },
  row: { flexDirection: "row", alignItems: "center" },
  groupAvatar: { width: 55, height: 55, borderRadius: 40 },
  gName: { fontSize: 16, fontWeight: "700" },
  gText: { fontSize: 14, color: "#777" },
  time: { marginRight: 10, color: "#777" },
  counter: {
    backgroundColor: "#d3ea92",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  counterText: { fontWeight: "700" },
});
