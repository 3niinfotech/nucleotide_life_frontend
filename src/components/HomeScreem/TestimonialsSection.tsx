import React, { useRef, useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from "react-native";
import { Section } from "../index";
import { semantic, primary, rating } from "../../utils/colors";
import { ImgAuthorAvatar } from "../../utils/imageUtil";
import { useResponsiveFontUtils } from "../../hooks";
import { poppinsWeights } from "../../utils/fonts";

type Testimonial = {
  rating: number;
  text: string;
  author: string;
  featured?: boolean;
};

const TestimonialSeparator: React.FC = React.memo(() => (
  <View style={styles.separator} />
));

const getRatingColor = (ratingValue: number): string => {
  if (ratingValue >= 4.5) return rating.excellent;
  if (ratingValue >= 4.0) return rating.veryGood;
  if (ratingValue >= 3.5) return rating.good;
  if (ratingValue >= 3.0) return rating.average;
  return rating.poor;
};

const RatingStars: React.FC<{ value: number; max?: number }> = React.memo(
  ({ value, max = 5 }) => {
    const full = Math.max(0, Math.min(max, Math.floor(value)));
    const empty = max - full;
    const ratingColor = getRatingColor(value);

    const fullStars = useMemo(
      () =>
        Array.from({ length: full }).map((_, i) => (
          <Text
            key={`full-${i}`}
            style={[styles.starFull, { color: ratingColor }]}
            accessibilityLabel="star"
          >
            ★
          </Text>
        )),
      [full, ratingColor]
    );

    const emptyStars = useMemo(
      () =>
        Array.from({ length: empty }).map((_, i) => (
          <Text
            key={`empty-${i}`}
            style={styles.starEmpty}
            accessibilityLabel="star"
          >
            ☆
          </Text>
        )),
      [empty]
    );

    return (
      <View style={styles.starsRow}>
        {fullStars}
        {emptyStars}
      </View>
    );
  }
);

const TestimonialsSection: React.FC = React.memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsListRef = useRef<FlatList>(null);
  const CARD_WIDTH = 300;
  const CARD_GAP = 16;
  const { getResponsiveStyle, getScreenSizeCategory } =
    useResponsiveFontUtils();
  const isSmallScreen = ["smallMobile", "mobile", "largeMobile"].includes(
    getScreenSizeCategory()
  );
  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        rating: 5,
        text: "I like that I do not have to give another sample for future upgrades. My DNA data will keep unlocking new insights as science evolves over time.",
        author: "Vikram Shetty, Hyderabad",
      },
      {
        rating: 3,
        text: "The platform is sleek, intuitive, and easy to navigate, with Apple-level design quality. Reports are science-backed but simplified for everyday use.",
        author: "Sarah Luthra, UK",
        // featured: true,
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 2.5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
      {
        rating: 5,
        text: "I value my privacy, and Nucleotide's security made me feel safe sharing DNA data. The encryption, Aadhaar verification, and full data control build real trust.",
        author: "Neeraj Khanna, Delhi",
      },
    ],
    []
  );

  const slideTestimonials = useCallback(
    (direction: "prev" | "next") => {
      const delta = direction === "next" ? 1 : -1;
      const nextIndex = Math.max(
        0,
        Math.min(testimonials.length - 1, currentSlide + delta)
      );
      setCurrentSlide(nextIndex);

      // Calculate the offset to center the card
      const offset = nextIndex * (CARD_WIDTH + CARD_GAP);
      testimonialsListRef.current?.scrollToOffset({
        offset,
        animated: true,
      });
    },
    [currentSlide, testimonials.length, CARD_WIDTH, CARD_GAP]
  );

  const renderTestimonialItem = useCallback(
    ({ item }: { item: Testimonial }) => (
      <View
        style={[
          styles.card,
          item.featured ? styles.cardFeatured : styles.cardDefault,
          { width: CARD_WIDTH },
        ]}
      >
        <View style={styles.ratingWrap}>
          <RatingStars value={item.rating} />
        </View>
        <View style={styles.textContainer}>
          <Text
            style={[styles.text, getResponsiveStyle("regular", 14)]}
            numberOfLines={4}
            ellipsizeMode="tail"
          >
            {item.text}
          </Text>
        </View>
        <View style={styles.authorContainer}>
          <Image source={ImgAuthorAvatar} style={styles.authorImage} />
          <Text style={[styles.author, getResponsiveStyle("medium", 16)]}>
            {item.author}
          </Text>
        </View>
      </View>
    ),
    [CARD_WIDTH]
  );

  const onMomentumScrollEnd = useCallback(
    (event: any) => {
      const offset = event.nativeEvent.contentOffset.x;
      const index = Math.round(offset / (CARD_WIDTH + CARD_GAP));
      setCurrentSlide(index);
    },
    [CARD_WIDTH, CARD_GAP]
  );

  const getItemLayout = useCallback(
    (data: ArrayLike<Testimonial> | null | undefined, index: number) => ({
      length: CARD_WIDTH + CARD_GAP,
      offset: (CARD_WIDTH + CARD_GAP) * index,
      index,
    }),
    [CARD_WIDTH, CARD_GAP]
  );

  const keyExtractor = useCallback(
    (item: Testimonial, index: number) => `testimonial-${index}`,
    []
  );

  return (
    <Section
      title="Trusted by Thousands"
      subtitle="Science-Driven. Expert-Led. Trusted Worldwide"
    >
      <View
        style={[
          styles.sliderWrap,
          isSmallScreen && styles.smallScreenSliderWrap,
        ]}
      >
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => slideTestimonials("prev")}
          style={[styles.navBtn, currentSlide === 0 && styles.navBtnDisabled]}
          disabled={currentSlide === 0}
        >
          <Text
            style={[
              styles.navBtnText,
              currentSlide === 0 && styles.navBtnTextDisabled,
            ]}
          >
            ←
          </Text>
        </TouchableOpacity>

        <View style={styles.testimonialsWrap}>
          <FlatList
            ref={testimonialsListRef}
            data={testimonials}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            contentContainerStyle={[
              styles.sliderContent,
              testimonials.length <= 3 && styles.sliderContentCentered,
            ]}
            ItemSeparatorComponent={TestimonialSeparator}
            decelerationRate="fast"
            snapToInterval={CARD_WIDTH + CARD_GAP}
            snapToAlignment="start"
            onMomentumScrollEnd={onMomentumScrollEnd}
            renderItem={renderTestimonialItem}
            removeClippedSubviews={Platform.OS === "android"}
            maxToRenderPerBatch={3}
            updateCellsBatchingPeriod={50}
            initialNumToRender={3}
            windowSize={5}
            scrollEventThrottle={16}
            bounces={false}
            pagingEnabled={false}
          />
        </View>

        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => slideTestimonials("next")}
          style={[
            styles.navBtn,
            currentSlide === testimonials.length - 1 && styles.navBtnDisabled,
          ]}
          disabled={currentSlide === testimonials.length - 1}
        >
          <Text
            style={[
              styles.navBtnText,
              currentSlide === testimonials.length - 1 &&
                styles.navBtnTextDisabled,
            ]}
          >
            →
          </Text>
        </TouchableOpacity>
      </View>
    </Section>
  );
});

const styles = StyleSheet.create({
  sliderWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    width: "77%",
    alignSelf: "center",
  },
  testimonialsWrap: {
    flex: 1,
  },
  sliderContent: {
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  sliderContentCentered: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    backgroundColor: semantic.background.primary,
    borderWidth: 1,
    borderColor: semantic.border.light,
    borderRadius: 12,
    padding: 16,
    alignSelf: "center",
    height: 180,
    justifyContent: "space-between",
  },
  cardFeatured: {
    borderColor: primary.purple,
    shadowColor: primary.purple,
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  cardDefault: {
    shadowColor: semantic.shadow.light,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  ratingWrap: {
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    marginBottom: 12,
  },
  starsRow: {
    flexDirection: "row",
    gap: 2,
  },
  starFull: {
    fontSize: 16,
  },
  starEmpty: {
    color: semantic.text.tertiary,
    fontSize: 16,
  },
  text: {
    color: semantic.text.secondary,
    lineHeight: 18,
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  authorImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  author: {
    color: semantic.text.primary,
    flex: 1,
  },
  navBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: primary.purple,
    shadowColor: semantic.shadow.light,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  navBtnText: {
    color: semantic.text.inverse,
    fontWeight: "700",
  },
  navBtnDisabled: {
    backgroundColor: semantic.background.secondary,
    opacity: 0.5,
  },
  navBtnTextDisabled: {
    color: semantic.text.secondary,
  },
  separator: {
    width: 16,
  },
  smallScreenSliderWrap: {
    width: "100%",
    paddingHorizontal: 16,
  },
});

export default TestimonialsSection;
