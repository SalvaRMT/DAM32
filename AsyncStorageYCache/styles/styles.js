import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#0a0e27',
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: '#0a0e27',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingContent: {
    alignItems: 'center',
  },

  loadingEmoji: {
    fontSize: 64,
    marginBottom: 20,
  },

  loadingText: {
    marginTop: 16,
    color: '#FFD700',
    fontSize: 18,
    fontWeight: '700',
  },

  loadingSubtext: {
    marginTop: 8,
    color: '#8B8B8B',
    fontSize: 13,
  },

  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#1a1f3a',
    borderBottomWidth: 1,
    borderBottomColor: '#2a3454',
  },

  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFD700',
    letterSpacing: 0.5,
  },

  subtitle: {
    marginTop: 4,
    color: '#8B8B8B',
    fontSize: 14,
  },

  cacheButton: {
    backgroundColor: '#2a3454',
    padding: 10,
    borderRadius: 10,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cacheButtonText: {
    fontSize: 20,
  },

  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
    marginBottom: 12,
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusOnline: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.4)',
  },

  statusOffline: {
    backgroundColor: 'rgba(244, 67, 54, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(244, 67, 54, 0.4)',
  },

  statusApi: {
    backgroundColor: 'rgba(33, 150, 243, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.4)',
  },

  statusCache: {
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.4)',
  },

  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },

  lastUpdateText: {
    color: '#8B8B8B',
    fontSize: 11,
  },

  marketSummary: {
    backgroundColor: '#2a3454',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },

  marketLabel: {
    color: '#8B8B8B',
    fontSize: 12,
    marginBottom: 4,
  },

  marketValue: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: '800',
  },

  errorBanner: {
    backgroundColor: 'rgba(244, 67, 54, 0.15)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(244, 67, 54, 0.3)',
  },

  errorText: {
    color: '#FF6B6B',
    fontSize: 13,
    textAlign: 'center',
  },

  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },

  emptyEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },

  emptyTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 8,
  },

  emptyText: {
    color: '#8B8B8B',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },

  retryButton: {
    marginTop: 24,
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  retryButtonText: {
    color: '#0a0e27',
    fontSize: 15,
    fontWeight: '800',
  },

  // Crypto Card
  cryptoCard: {
    backgroundColor: '#1a1f3a',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a3454',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  cryptoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  cryptoIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  cryptoEmoji: {
    fontSize: 28,
    fontWeight: '700',
  },

  cryptoInfo: {
    flex: 1,
  },

  cryptoName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 2,
  },

  cryptoSymbol: {
    color: '#8B8B8B',
    fontSize: 14,
    fontWeight: '600',
  },

  changeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  changeBadgePositive: {
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
  },

  changeBadgeNegative: {
    backgroundColor: 'rgba(244, 67, 54, 0.2)',
  },

  changeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '700',
  },

  priceContainer: {
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a3454',
    marginBottom: 16,
  },

  priceLabel: {
    color: '#8B8B8B',
    fontSize: 12,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  priceValue: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: '800',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },

  statItem: {
    alignItems: 'center',
  },

  statLabel: {
    color: '#8B8B8B',
    fontSize: 11,
    marginBottom: 4,
    textTransform: 'uppercase',
  },

  statValue: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  statValuePositive: {
    color: '#4CAF50',
  },

  statValueNegative: {
    color: '#F44336',
  },

  progressBarContainer: {
    height: 6,
    backgroundColor: '#2a3454',
    borderRadius: 3,
    overflow: 'hidden',
  },

  progressBar: {
    height: '100%',
    borderRadius: 3,
  },

  progressBarPositive: {
    backgroundColor: '#4CAF50',
  },

  progressBarNegative: {
    backgroundColor: '#F44336',
  },

  // Reload Button
  reloadButton: {
    backgroundColor: '#2a3454',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#3a4564',
  },

  reloadButtonText: {
    color: '#FFD700',
    fontSize: 15,
    fontWeight: '700',
  },

  // Footer
  footer: {
    backgroundColor: '#1a1f3a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#2a3454',
  },

  footerTitle: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
  },

  footerText: {
    color: '#8B8B8B',
    fontSize: 13,
    lineHeight: 20,
  },

  footerTimestamp: {
    color: '#6B7280',
    fontSize: 11,
    marginTop: 12,
    fontStyle: 'italic',
  },
});

export default styles;