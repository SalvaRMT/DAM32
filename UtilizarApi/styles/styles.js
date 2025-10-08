import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b132b' },

  header: { paddingTop: 50, paddingHorizontal: 20, paddingBottom: 16, backgroundColor: '#1c2541' },
  title: { fontSize: 22, fontWeight: '700', color: '#fff' },
  subtitle: { marginTop: 4, color: '#9fb3c8' },

  scrollView: { paddingHorizontal: 16, paddingTop: 12 },

  userCard: {
    backgroundColor: '#3a506b',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  userCardExpanded: {
    borderWidth: 1,
    borderColor: '#5bc0eb',
  },

  userHeader: { flexDirection: 'row', alignItems: 'center' },

  avatarContainer: {
    width: 48, height: 48, borderRadius: 24,
    backgroundColor: '#5bc0eb',
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  avatarText: { color: '#0b132b', fontWeight: '800', fontSize: 18 },

  userMainInfo: { flex: 1 },
  userName: { color: '#fff', fontWeight: '700', fontSize: 16 },
  userUsername: { color: '#d1e3f0', marginTop: 2 },
  userEmail: { color: '#cde7ff', marginTop: 2 },

  expandIcon: { color: '#cde7ff', fontSize: 18, marginLeft: 8 },

  userDetails: { marginTop: 12 },
  divider: { height: 1, backgroundColor: '#9fb3c8', opacity: 0.3, marginVertical: 10 },

  detailSection: { marginBottom: 10 },
  sectionTitle: { color: '#fff', fontWeight: '700', marginBottom: 6 },
  detailText: { color: '#e6f1ff' },
  detailTextItalic: { color: '#e6f1ff', fontStyle: 'italic', marginTop: 2 },

  actionButtons: { flexDirection: 'row', gap: 10, marginTop: 10 },
  actionButton: {
    backgroundColor: '#1c2541',
    paddingVertical: 10, paddingHorizontal: 14,
    borderRadius: 10,
  },
  actionButtonEmail: { backgroundColor: '#274060' },
  actionButtonText: { color: '#fff', fontWeight: '700' },

  reloadButton: {
    backgroundColor: '#5bc0eb',
    paddingVertical: 12, borderRadius: 12,
    alignItems: 'center', marginVertical: 16,
  },
  reloadButtonText: { color: '#0b132b', fontWeight: '800' },

  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0b132b' },
  loadingText: { marginTop: 12, color: '#cde7ff' },
});

export default styles;
