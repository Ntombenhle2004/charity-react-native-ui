import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AvatarItem from "./AvatarItem";
import { Ionicons, Feather } from "@expo/vector-icons";

export default function TopChatsCard() {
  return (
    <View style={styles.section}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={28} color="#333" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Chats</Text>

          <View style={styles.rightContainer}>
            <TouchableOpacity style={styles.profileWrapper}>
              <Ionicons name="person" size={28} color="#333" />
            </TouchableOpacity>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>6</Text>
            </View>
          </View>
        </View>
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
  section: {
    paddingTop: 20,
  },

  card: {
    padding: 25,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#EAF0EC",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },

  rightContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#91A095",
    borderRadius: 25,
    width: 50,
    height: 50,
  },

  profileWrapper: {
    padding: 2,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#C9FF00",
    paddingHorizontal: 7,
    paddingVertical: 1.4,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "black",
  },

  badgeText: {
    fontWeight: "700",
    fontSize: 12,
  },
  scroll: {
    marginTop: 20,
  },
});
