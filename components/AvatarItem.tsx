import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  name: string;
  image: any;
  online?: boolean;
}

export default function AvatarItem({ name, image, online }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={image} style={styles.avatar} />
      </View>
      {online && <View style={styles.onlineDot} />}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginRight: 5,
    padding: 15,
    borderRadius: 16,
    backgroundColor: "#F6FAF4",
    
  },
  avatarWrapper: {
    width: 45,
    height: 45,
    borderRadius: 50,
    // backgroundColor: "pink",
    overflow: "hidden",
  },
  avatar: { width: "100%", height: "100%" },
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
    marginTop: 5,
    marginRight: 5,
  },
  name: { marginTop: 6, fontSize: 14, fontWeight: "600" },
});
