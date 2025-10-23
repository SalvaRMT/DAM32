import { StyleSheet } from "react-native";
import C from "./colors";

export default StyleSheet.create({
  card: { backgroundColor: C.surface, marginHorizontal:16, marginVertical:8, borderRadius:14, padding:14 },
  cardCompact: { paddingVertical: 10 },
  cardTitle: { color: C.text, fontSize:16, fontWeight:"700" },
  cardBody: { color: C.sub, marginTop:6 },
  meta: { color: C.sub, marginTop:6, fontSize:12 },
  searchBox: { paddingHorizontal:16, paddingTop:8 },
  searchInput: { backgroundColor: C.surface, color: C.text, borderRadius:10, padding:10 },
  badge: { backgroundColor:"#16a34a", paddingHorizontal:10, paddingVertical:6, borderRadius:20 },
  badgePending: { backgroundColor:"#f59e0b" },
  badgeSyncing: { backgroundColor:"#3b82f6" },
  badgeText: { color: "#fff", fontWeight: "700", fontSize:12 },
});
