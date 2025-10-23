import { StyleSheet } from "react-native";
import C from "./colors";
export default StyleSheet.create({
  container:{ flex:1, backgroundColor:C.bg, padding:16 },
  title:{ color:C.text, fontSize:20, fontWeight:"800" },
  meta:{ color:C.sub, marginVertical:6 },
  body:{ color:C.text, marginTop:8, lineHeight:22 },
  row:{ flexDirection:"row", gap:12, marginTop:16 },
  btn:{ backgroundColor:C.primary, paddingHorizontal:12, paddingVertical:10, borderRadius:10 },
  btnDanger:{ backgroundColor:C.danger },
  btnText:{ color:"#0F172A", fontWeight:"700" },
  secondary:{ marginTop:16 },
  secondaryText:{ color:C.sub },
});
