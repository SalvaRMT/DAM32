import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0b132b' 
  },

  header: { 
    paddingTop: 50, 
    paddingHorizontal: 20, 
    paddingBottom: 16, 
    backgroundColor: '#1c2541',
    borderBottomWidth: 2,
    borderBottomColor: '#3a506b',
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },

  iconButton: {
    backgroundColor: '#3a506b',
    padding: 8,
    borderRadius: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconButtonText: {
    fontSize: 20,
  },

  title: { 
    fontSize: 22, 
    fontWeight: '700', 
    color: '#fff' 
  },

  subtitle: { 
    marginTop: 4, 
    color: '#9fb3c8',
    fontSize: 13,
  },

  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusOnline: {
    backgroundColor: 'rgba(76, 175, 80, 0.25)',
  },

  statusOffline: {
    backgroundColor: 'rgba(244, 67, 54, 0.25)',
  },

  statusApi: {
    backgroundColor: 'rgba(91, 192, 235, 0.25)',
  },

  statusCache: {
    backgroundColor: 'rgba(255, 193, 7, 0.25)',
  },

  statusText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },

  lastUpdateText: {
    color: '#9fb3c8',
    fontSize: 11,
  },

  scrollView: { 
    flex: 1,
    paddingHorizontal: 16, 
    paddingTop: 12 
  },

  preferencesContainer: {
    paddingBottom: 20,
  },

  preferenceCard: {
    backgroundColor: '#3a506b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },

  preferenceTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },

  preferenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  preferenceLabel: {
    color: '#e6f1ff',
    fontSize: 15,
    fontWeight: '500',
  },

  input: {
    backgroundColor: '#1c2541',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#5bc0eb',
  },

  optionsRow: {
    flexDirection: 'row',
    gap: 10,
  },

  optionButton: {
    flex: 1,
    backgroundColor: '#1c2541',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },

  optionButtonActive: {
    backgroundColor: '#5bc0eb',
    borderColor: '#5bc0eb',
  },

  optionButtonText: {
    color: '#9fb3c8',
    fontSize: 14,
    fontWeight: '600',
  },

  optionButtonTextActive: {
    color: '#0b132b',
    fontWeight: '800',
  },

  saveButton: {
    backgroundColor: '#5bc0eb',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#5bc0eb',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  saveButtonText: {
    color: '#0b132b',
    fontSize: 16,
    fontWeight: '800',
  },

  infoCard: {
    backgroundColor: '#1c2541',
    borderRadius: 12,
    padding: 16,
    marginTop: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#5bc0eb',
  },

  infoTitle: {
    color: '#5bc0eb',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },

  infoText: {
    color: '#9fb3c8',
    fontSize: 13,
    lineHeight: 20,
  },

  userCard: {
    backgroundColor: '#3a506b',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  userCardExpanded: {
    borderWidth: 2,
    borderColor: '#5bc0eb',
    shadowColor: '#5bc0eb',
    shadowOpacity: 0.3,
  },

  userHeader: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },

  avatarContainer: {
    width: 48, 
    height: 48, 
    borderRadius: 24,
    backgroundColor: '#5bc0eb',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginRight: 12,
  },

  avatarText: { 
    color: '#0b132b', 
    fontWeight: '800', 
    fontSize: 18 
  },

  userMainInfo: { 
    flex: 1 
  },

  userName: { 
    color: '#fff', 
    fontWeight: '700', 
    fontSize: 16 
  },

  userUsername: { 
    color: '#d1e3f0', 
    marginTop: 2,
    fontSize: 13,
  },

  userEmail: { 
    color: '#cde7ff', 
    marginTop: 2,
    fontSize: 12,
  },

  expandIcon: { 
    color: '#cde7ff', 
    fontSize: 18, 
    marginLeft: 8 
  },

  userDetails: { 
    marginTop: 12 
  },

  divider: { 
    height: 1, 
    backgroundColor: '#9fb3c8', 
    opacity: 0.3, 
    marginVertical: 10 
  },

  detailSection: { 
    marginBottom: 10 
  },

  sectionTitle: { 
    color: '#fff', 
    fontWeight: '700', 
    marginBottom: 6,
    fontSize: 14,
  },

  detailText: { 
    color: '#e6f1ff',
    fontSize: 13,
    lineHeight: 20,
  },

  detailTextItalic: { 
    color: '#e6f1ff', 
    fontStyle: 'italic', 
    marginTop: 2,
    fontSize: 13,
  },

  moreItemsText: {
    textAlign: 'center',
    color: '#9fb3c8',
    fontSize: 13,
    marginTop: 8,
    marginBottom: 12,
    fontStyle: 'italic',
  },

  syncButton: {
    backgroundColor: '#5bc0eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },

  syncButtonText: {
    color: '#0b132b',
    fontSize: 15,
    fontWeight: '800',
  },

  footer: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 30,
  },

  footerText: {
    color: '#9fb3c8',
    fontSize: 12,
    textAlign: 'center',
  },

  loadingContainer: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#0b132b' 
  },

  loadingText: { 
    marginTop: 12, 
    color: '#cde7ff',
    fontSize: 14,
  },
});

export default styles;