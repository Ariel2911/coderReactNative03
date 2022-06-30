import { StyleSheet } from "react-native";
import { colors } from "../../constans/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 90,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    padding: 10,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
  containerDetail: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detail: {},
  detailQty: {
    fontSize: 14,
    fontFamily: "Lato-Regular",
  },
  detailPrice: {
    fontSize: 16,
    fontFamily: "Lato-Bold",
  },
});