import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { semantic, primary } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";

interface OrderMember {
  id: string;
  testName: string;
  selectedMember: string;
}

interface OrderMemberSectionProps {
  onAddMember: () => void;
  onConfirmMembers: () => void;
}

const OrderMemberSection: React.FC<OrderMemberSectionProps> = ({
  onAddMember,
  onConfirmMembers,
}) => {
  const [orderMembers, setOrderMembers] = useState<OrderMember[]>([
    { id: "1", testName: "Blood Test For - 1", selectedMember: "" },
    { id: "2", testName: "Blood Test For - 2", selectedMember: "" },
  ]);

  const handleMemberSelection = (id: string, member: string) => {
    setOrderMembers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedMember: member } : item
      )
    );
  };

  const renderMemberDropdown = (member: OrderMember) => (
    <View key={member.id} style={styles.memberItem}>
      <Text style={styles.testName}>{member.testName}</Text>
      <View style={styles.dropdownContainer}>
        <TextInput
          style={styles.dropdownInput}
          placeholder="Select your family member"
          placeholderTextColor={semantic.text.placeholder}
          value={member.selectedMember}
          editable={false}
          onPressIn={() => {
            // Handle dropdown press - you can implement a modal or picker here
            console.log("Open member selection for:", member.id);
          }}
        />
        <TouchableOpacity style={styles.dropdownArrow}>
          <Text style={styles.arrowIcon}>▼</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Select Order For</Text>
        <TouchableOpacity style={styles.addButton} onPress={onAddMember}>
          <Text style={styles.addButtonIcon}>+</Text>
          <Text style={styles.addButtonText}>Add Member</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />

      <View style={styles.membersContainer}>
        {orderMembers.map(renderMemberDropdown)}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={onConfirmMembers}>
        <Text style={styles.confirmButtonText}>Confirm Members</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.primary,
  },
  divider: {
    height: 1,
    backgroundColor: semantic.border.light,
    marginVertical: 24,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primary.purple,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonIcon: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
    marginRight: 6,
  },
  addButtonText: {
    fontSize: 14,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
  },
  membersContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  memberItem: {
    marginBottom: 16,
  },
  testName: {
    fontSize: 16,
    fontFamily: poppinsWeights.medium,
    color: semantic.text.primary,
    marginBottom: 8,
  },
  dropdownContainer: {
    position: "relative",
  },
  dropdownInput: {
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 14,
    fontFamily: poppinsWeights.regular,
    color: semantic.text.primary,
    backgroundColor: semantic.background.primary,
  },
  dropdownArrow: {
    position: "absolute",
    right: 12,
    top: 12,
    bottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    fontSize: 12,
    color: semantic.text.secondary,
  },
  confirmButton: {
    backgroundColor: primary.purple,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  confirmButtonText: {
    fontSize: 16,
    fontFamily: poppinsWeights.semiBold,
    color: semantic.text.inverse,
  },
});

export default OrderMemberSection;
