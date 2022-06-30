import { StyleSheet } from "react-native";
import { colors } from "../../constans/themes/colors";

export const styles = StyleSheet.create({
  order: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 6,
  },
  date: {
    fontSize: 18,
  },
  total: {
    fontSize: 18,
    fontFamily: 'Late-Bold',
  },
});