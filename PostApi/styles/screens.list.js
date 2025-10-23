import { StyleSheet } from "react-native";
import C from "./colors";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: C.bg },

  topBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: C.bg,
  },
  title: { color: C.text, fontSize: 20, fontWeight: "800" },

  controls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  switchRow: { flexDirection: "row", alignItems: "center", marginLeft: 8 },
  switchLabel: { color: C.text, marginRight: 6 },

  btn: {
    backgroundColor: C.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginLeft: "auto",
  },
  btnText: { color: "#0F172A", fontWeight: "700" },

  empty: { color: C.sub, textAlign: "center", marginTop: 40 },
  offline: { color: C.sub, textAlign: "center", padding: 8 },
  conflict: { color: "#f59e0b", paddingHorizontal: 16, paddingBottom: 4 },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 16,
  },
  modalCard: {
    backgroundColor: C.surface,
    borderRadius: 16,
    padding: 16,
    maxHeight: "80%",
  },
  modalTitle: { color: C.text, fontSize: 18, fontWeight: "800", marginBottom: 8 },
  conflictItem: {
    backgroundColor: "#0f1a2e",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  conflictId: { color: C.sub, marginBottom: 6 },
  conflictLabel: { color: C.sub, fontSize: 12, marginTop: 4 },
  conflictText: { color: C.text },
  conflictWinner: { color: "#22D3EE", fontWeight: "700" },
});
