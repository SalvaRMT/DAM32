import { StyleSheet } from "react-native";
import C from "./colors";
export default StyleSheet.create({
  container:{ flex:1, backgroundColor:C.bg, padding:16 },
  header:{ color:C.text, fontSize:20, fontWeight:"800", marginBottom:12 },
  input:{ backgroundColor:C.surface, color:C.text, borderRadius:10, padding:10, marginVertical:6 },
  area:{ height:140, textAlignVertical:"top" },
  btn:{ backgroundColor:C.primary, paddingHorizontal:12, paddingVertical:10, borderRadius:10, marginTop:8 },
  btnText:{ color:"#0F172A", fontWeight:"700" },
  secondary:{ marginTop:10 },
  secondaryText:{ color:C.sub },
});
