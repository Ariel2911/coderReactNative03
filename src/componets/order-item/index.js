import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import IonicIcons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { colors } from "../../constans/themes/colors";

const formatDay = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString(); 
}

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.order}>
      <View>
        <Text style={styles.date}>{formatDay(item.date)}</Text>
        <Text style={styles.date}>{item.total}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <IonicIcons name="trash" size={20} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;