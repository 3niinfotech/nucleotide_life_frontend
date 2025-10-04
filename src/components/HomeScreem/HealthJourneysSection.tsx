import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { semantic, primary } from "../../utils/colors";
import { poppinsWeights } from "../../utils/fonts";
import {
  HealthJourney1,
  HealthJourney2,
  HealthJourney3,
  HealthJourney4,
  HealthJourney5,
} from "../../utils/imageUtil";
import { useResponsiveFontUtils } from "../../hooks";

// Mock data for health journeys
const healthJourneys = [
  {
    id: 1,
    name: "Alana Metcalfe",
    title: "Athletics Nutrition Expert",
    image: HealthJourney1,
    videoId: "video1",
  },
  {
    id: 2,
    name: "Nic",
    title: "Risk Advocate",
    image: HealthJourney2,
    videoId: "video2",
  },
  {
    id: 3,
    name: "Alana Metcalfe",
    title: "Athletics Nutrition Expert",
    image: HealthJourney3,
    videoId: "video3",
  },
  {
    id: 4,
    name: "Nic",
    title: "Risk Advocate",
    image: HealthJourney4,
    videoId: "video4",
  },
  {
    id: 5,
    name: "Alana Metcalfe",
    title: "Athletics Nutrition Expert",
    image: HealthJourney5,
    videoId: "video5",
  },
];

interface HealthJourneysSectionProps {
  isBackground?: boolean;
}

const HealthJourneysSection: React.FC<HealthJourneysSectionProps> = ({
  isBackground = false,
}) => {
  const handleVideoPress = (videoId: string) => {
    // Handle video play functionality
    console.log("Playing video:", videoId);
  };
  const { getResponsiveStyle } = useResponsiveFontUtils();

  const renderVideoThumbnail = (journey: any) => (
    <TouchableOpacity
      key={journey.id}
      style={styles.videoThumbnail}
      onPress={() => handleVideoPress(journey.videoId)}
      activeOpacity={0.8}
    >
      <Image source={journey.image} style={styles.thumbnailImage} />
      <View style={styles.fullOverlay} />
      <View style={styles.textOverlay}>
        <Text style={[styles.personName, getResponsiveStyle("medium", 18)]}>
          {journey.name}
        </Text>
        <Text style={[styles.personTitle, getResponsiveStyle("regular", 14)]}>
          {journey.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, isBackground && styles.backgroundContainer]}
    >
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.title, getResponsiveStyle("semiBold", 32)]}>
            Health Journeys That Inspire
          </Text>
          <Text style={[styles.subtitle, getResponsiveStyle("regular", 16)]}>
            worldwide sharing stories, shaping health, and building stronger
            communities
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
        >
          {healthJourneys.map(renderVideoThumbnail)}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  backgroundContainer: {
    backgroundColor: semantic.background.secondary,
  },
  content: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  header: {
    marginBottom: 32,
    alignItems: "center",
  },
  title: {
    color: semantic.text.primary,
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    color: semantic.text.secondary,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 600,
  },
  scrollContainer: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingHorizontal: 4,
  },
  videoThumbnail: {
    width: 200,
    height: 280,
    marginRight: 16,
    borderRadius: 16,
    overflow: "hidden",
    position: "relative",
    backgroundColor: semantic.background.overlay,
  },
  thumbnailImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -20 }, { translateY: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  fullOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  textOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  personName: {
    color: semantic.background.primary,
    marginBottom: 2,
  },
  personTitle: {
    lineHeight: 16,
    color: "rgba(255, 255, 255, 0.9)",
  },
});

export default HealthJourneysSection;
