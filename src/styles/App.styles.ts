import { StyleSheet } from 'react-native';

export const palette = {
  blue: '#00A6FB',
  yellow: '#F5B700',
  magenta: '#DC0073',
  cyan: '#00EBB3',
  white: '#FFFFFF',
  gray: '#9CA3AF',
  darkBg: '#121212',
  cardBgDark: '#1E1E1E',
  cardBgLight: '#FFFFFF',
};

export const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  segmentedButtons: {
    margin: 16,
  },
  content: {
    flex: 1,
  },
  container: {
    padding: 8,
  },
  card: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  placeholderText: {
    textAlign: 'center',
    padding: 20,
    opacity: 0.5,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  activityText: {
    marginLeft: 8,
  },
  paragraph: {
    marginBottom: 12,
    lineHeight: 20,
  },
  graphPlaceholder: {
    height: 200,
    borderWidth: 2,
    borderColor: palette.gray,
    borderStyle: 'dashed',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  input: {
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  button: {
    marginTop: 8,
  },
  brainCircuitIcon: {
    marginLeft: 12,
  },
});
