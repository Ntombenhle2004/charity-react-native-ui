import { Image, StyleSheet, Text, View, } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // or MaterialIcons, Ionicons, etc.

interface Props {
  name: string;
  message: string;
  time: string;
  image: any;
  count?: number;
  avatarBackgroundColor?: string;
  onlin? : boolean;
}

export default function RecentChatItem({
  name,
  message,
  time,
  image,
  count,
  avatarBackgroundColor,
  onlin,
}: Props) {
  return (
    <View style={styles.row}>
      <View
        style={[
          styles.avatarContainer,
          { backgroundColor: avatarBackgroundColor || "#ccc" }, // now safe
        ]}
      >
        <Image source={image} style={styles.avatar} />
        {onlin && <View style={styles.onlineDot} />}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.messageRow}>
          {message.toLowerCase().includes("voice message") && (
            <Icon
              name="play-circle"
              size={16}
              color="#555"
              style={{ marginRight: 5 }}
            />
          )}
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.time}>{time}</Text>
        {count && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{count}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", paddingVertical: 15, alignItems: "center" },
  avatarContainer: {
    width: 55,
    height: 55,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    padding: 33,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  textContainer: { flex: 1, paddingHorizontal: 10 },
  name: { fontSize: 16, fontWeight: "700" },
  message: { fontSize: 14, color: "#777" },
  rightSide: { alignItems: "flex-end" },
  time: { color: "#777", marginBottom: 4 },
  counter: {
    backgroundColor: "#d3ea92",
    paddingHorizontal: 7,
    paddingVertical: 1.4,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "black",
  },
  counterText: { fontWeight: "700" },
  messageRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  onlineDot: {
    width: 12,
    height: 12,
    backgroundColor: "#5ad37a",
    borderRadius: 7,
    position: "absolute",
    top: 2,
    right: 2,
    borderWidth: 2,
    borderColor: "black",
    marginTop: 3,
    // marginRight: 10,
  },
});
