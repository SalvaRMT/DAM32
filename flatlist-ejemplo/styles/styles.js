import { StyleSheet } from 'react-native';

const colors = {
  mexicanGreen: '#006341',
  mexicanRed: '#CE1126',
  white: '#FFFFFF',
  lightGray: '#F0F0F0',
  darkGray: '#666',
  black: '#000',
};

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mexicanGreen,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  header: {
    backgroundColor: colors.mexicanGreen,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: colors.mexicanRed,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.lightGray,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  itemContainer: {
    backgroundColor: colors.white,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5, 
    shadowColor: colors.black, 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderLeftWidth: 5,
    borderLeftColor: colors.mexicanRed,
  },
  itemImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemTextContainer: {
    padding: 15,
    backgroundColor: colors.white,
  },
  itemName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.mexicanGreen,
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: colors.darkGray,
    lineHeight: 20,
  },
});

export { colors };