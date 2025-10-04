import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { Section } from "..";
import { semantic, primary } from "../../utils/colors";
import { useResponsiveFontUtils } from "../../hooks";

type Doctor = {
  id: string;
  name: string;
  title: string;
  photo: string;
};

const DoctorSeparator: React.FC = () => <View style={styles.separator} />;

const TrustedMindsSection: React.FC = () => {
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );
  const doctors: Doctor[] = [
    {
      id: "d1",
      name: "Dr. Sarah Chen",
      title: "Chief Genomics Officer",
      photo:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d2",
      name: "Dr. Michael Thompson",
      title: "Head of Computational Biology",
      photo:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d3",
      name: "Dr. Rajesh Kumar",
      title: "Director of Pharmacogenomics",
      photo:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d4",
      name: "Dr. Maia Rao",
      title: "Medical Director",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d5",
      name: "Dr. Elena Garcia",
      title: "Clinical Geneticist",
      photo:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d6",
      name: "Dr. James Wilson",
      title: "Senior Research Scientist",
      photo:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1400&auto=format&fit=crop",
    },
    {
      id: "d7",
      name: "Dr. Lisa Park",
      title: "Bioinformatics Specialist",
      photo:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  const doctorsListRef = useRef<FlatList>(null);
  const [doctorIndex, setDoctorIndex] = useState(0);
  const CARD_WIDTH = 300;
  const CARD_GAP = 16;

  const slideDoctors = (direction: "prev" | "next") => {
    const delta = direction === "next" ? 1 : -1;
    const nextIndex = Math.max(
      0,
      Math.min(doctors.length - 1, doctorIndex + delta)
    );
    setDoctorIndex(nextIndex);

    // Calculate the offset to center the card
    const offset = nextIndex * (CARD_WIDTH + CARD_GAP);
    doctorsListRef.current?.scrollToOffset({
      offset,
      animated: true,
    });
  };

  return (
    <Section
      title="Trusted Minds Behind Nucleotide"
      subtitle="Science‑Driven. Expert‑Led. Trusted Worldwide"
    >
      <View
        style={[
          styles.doctorsCarousel,
          isSmallScreen && styles.smallScreenDoctorsCarousel,
        ]}
      >
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => slideDoctors("prev")}
          style={[
            styles.arrowButton,
            doctorIndex === 0 && styles.arrowButtonDisabled,
          ]}
          disabled={doctorIndex === 0}
        >
          <Text
            style={[
              styles.arrowText,
              doctorIndex === 0 && styles.arrowTextDisabled,
            ]}
          >
            ←
          </Text>
        </TouchableOpacity>

        <View style={styles.doctorsWrap}>
          <FlatList
            ref={doctorsListRef}
            data={doctors}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[
              styles.doctorsList,
              doctors.length <= 3 && styles.doctorsListCentered,
            ]}
            ItemSeparatorComponent={DoctorSeparator}
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH + CARD_GAP}
            snapToAlignment="start"
            onMomentumScrollEnd={(event) => {
              const offset = event.nativeEvent.contentOffset.x;
              const index = Math.round(offset / (CARD_WIDTH + CARD_GAP));
              setDoctorIndex(index);
            }}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.doctorCard,
                  styles.doctorCardPurple,
                  { width: CARD_WIDTH },
                ]}
              >
                <Image
                  source={{ uri: item.photo }}
                  style={styles.doctorImage}
                  resizeMode="cover"
                />
                <View style={styles.doctorInfo}>
                  <Text
                    style={[
                      styles.doctorName,
                      getResponsiveStyle("semiBold", 20),
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      styles.doctorTitle,
                      getResponsiveStyle("regular", 16),
                    ]}
                    numberOfLines={2}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => slideDoctors("next")}
          style={[
            styles.arrowButton,
            doctorIndex === doctors.length - 1 && styles.arrowButtonDisabled,
          ]}
          disabled={doctorIndex === doctors.length - 1}
        >
          <Text
            style={[
              styles.arrowText,
              doctorIndex === doctors.length - 1 && styles.arrowTextDisabled,
            ]}
          >
            →
          </Text>
        </TouchableOpacity>
      </View>
    </Section>
  );
};

const styles = StyleSheet.create({
  doctorsCarousel: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "75%",
    alignSelf: "center",
  },
  doctorsWrap: {
    flex: 1,
  },
  doctorsList: {
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  doctorsListCentered: {
    flexGrow: 1,
    justifyContent: "center",
  },
  doctorCard: {
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 14,
    overflow: "hidden",
    height: 320,
  },
  doctorCardPurple: {
    backgroundColor: "rgba(136,107,249,0.04)",
  },
  doctorImage: {
    width: "100%",
    height: 220,
  },
  doctorInfo: {
    padding: 14,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  doctorName: {
    color: semantic.text.primary,
  },
  doctorTitle: {
    color: semantic.text.secondary,
    marginTop: 4,
  },
  arrowButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary.purple,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  arrowText: {
    color: semantic.text.inverse,
    fontWeight: "700",
  },
  arrowButtonDisabled: {
    backgroundColor: semantic.background.secondary,
    opacity: 0.5,
  },
  arrowTextDisabled: {
    color: semantic.text.secondary,
  },
  separator: {
    width: 16,
  },
  smallScreenDoctorsCarousel: {
    width: "100%",
    paddingHorizontal: 16,
  },
});

export default TrustedMindsSection;
