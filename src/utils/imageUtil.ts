// Centralized image exports
// Usage: import { ImgAuthorAvatar } from '../utils/imageUtil'; then <Image source={ImgAuthorAvatar} />

// Author Images
export { default as ImgAuthorAvatar } from "../assets/imgs/img_author_avatar.png";

// Footer Images
export { default as ImgFooterBackNucleotide } from "../assets/imgs/footer_back_nucleotide.png";

// Product Images
export { default as ProductImg } from "../assets/imgs/product_img.png";

// Product Detail Images for Slider
export { default as ProductDetail1 } from "../assets/imgs/img_product_details_1.png";
export { default as ProductDetail2 } from "../assets/imgs/img_product_details_2.png";
export { default as ProductDetail3 } from "../assets/imgs/img_product_details_3.png";
export { default as ProductDetail4 } from "../assets/imgs/img_product_details_4.png";

// Health Journeys Images
export { default as HealthJourney1 } from "../assets/imgs/img_product_details_1.png";
export { default as HealthJourney2 } from "../assets/imgs/img_health_journy_1.png";
export { default as HealthJourney3 } from "../assets/imgs/img_health_journy_2.png";
export { default as HealthJourney4 } from "../assets/imgs/img_health_journy_1.png";
export { default as HealthJourney5 } from "../assets/imgs/img_health_journy_2.png";

export { default as PaymentOption } from "../assets/imgs/img_payment_option.png";

// Hero Carousel Slider Images
export { default as SliderGeneticOne } from "../assets/imgs/slider_genetic_one_image.png";
export { default as SliderGeneticOnePlus } from "../assets/imgs/slider_genetic_oneplus_image.png";
export { default as SliderGutMicrobiome } from "../assets/imgs/slider_gut_microbiome_image.png";
export { default as SliderBloodUrineMarkers } from "../assets/imgs/slider_blood_and_urine_markers_image.png";

// How It Works Section Images
export { default as HowItWorks1 } from "../assets/imgs/how_works_1.png";
export { default as HowItWorks2 } from "../assets/imgs/how_works_2.png";
export { default as HowItWorks3 } from "../assets/imgs/how_works_3.png";
export { default as HowItWorks4 } from "../assets/imgs/how_works_4.png";

// What You Get Section Images
export { default as GeneticOneImage } from "../assets/imgs/genetic_one_image.png";

// Thumbnail Images - using product detail images
export const PhoneThumbnail = require("../assets/imgs/img_product_details_1.png");
export const DocumentThumbnail = require("../assets/imgs/img_product_details_2.png");
export const ProductThumbnail = require("../assets/imgs/img_product_details_3.png");
export const CollectionThumbnail = require("../assets/imgs/img_product_details_4.png");

// Optional grouped export
import ImgAuthorAvatarImport from "../assets/imgs/img_author_avatar.png";
import ImgFooterBackNucleotideImport from "../assets/imgs/footer_back_nucleotide.png";
import ProductImgImport from "../assets/imgs/product_img.png";
import PaymentOptionImport from "../assets/imgs/img_payment_option.png";
import SliderGeneticOneImport from "../assets/imgs/slider_genetic_one_image.png";
import SliderGeneticOnePlusImport from "../assets/imgs/slider_genetic_oneplus_image.png";
import SliderGutMicrobiomeImport from "../assets/imgs/slider_gut_microbiome_image.png";
import SliderBloodUrineMarkersImport from "../assets/imgs/slider_blood_and_urine_markers_image.png";
import HowItWorks1Import from "../assets/imgs/how_works_1.png";
import HowItWorks2Import from "../assets/imgs/how_works_2.png";
import HowItWorks3Import from "../assets/imgs/how_works_3.png";
import HowItWorks4Import from "../assets/imgs/how_works_4.png";
import GeneticOneImageImport from "../assets/imgs/genetic_one_image.png";

export const Images = {
  // Author Images
  authorAvatar: ImgAuthorAvatarImport,
  // Footer Images
  footerBackNucleotide: ImgFooterBackNucleotideImport,
  // Product Images
  productImg: ProductImgImport,
  // Product Detail Images
  productDetail1: require("../assets/imgs/img_product_details_1.png"),
  productDetail2: require("../assets/imgs/img_product_details_2.png"),
  productDetail3: require("../assets/imgs/img_product_details_3.png"),
  productDetail4: require("../assets/imgs/img_product_details_4.png"),
  // Health Journeys Images
  healthJourney1: require("../assets/imgs/img_product_details_1.png"),
  healthJourney2: require("../assets/imgs/img_health_journy_1.png"),
  healthJourney3: require("../assets/imgs/img_health_journy_2.png"),
  healthJourney4: require("../assets/imgs/img_health_journy_1.png"),
  healthJourney5: require("../assets/imgs/img_health_journy_2.png"),
  // Thumbnail Images
  phoneThumbnail: require("../assets/imgs/img_product_details_1.png"),
  documentThumbnail: require("../assets/imgs/img_product_details_2.png"),
  productThumbnail: require("../assets/imgs/img_product_details_3.png"),
  collectionThumbnail: require("../assets/imgs/img_product_details_4.png"),
  // Payment Option Images
  paymentOption: PaymentOptionImport,
  // Hero Carousel Slider Images
  sliderGeneticOne: SliderGeneticOneImport,
  sliderGeneticOnePlus: SliderGeneticOnePlusImport,
  sliderGutMicrobiome: SliderGutMicrobiomeImport,
  sliderBloodUrineMarkers: SliderBloodUrineMarkersImport,
  // How It Works Section Images
  howItWorks1: HowItWorks1Import,
  howItWorks2: HowItWorks2Import,
  howItWorks3: HowItWorks3Import,
  howItWorks4: HowItWorks4Import,
  // What You Get Section Images
  geneticOneImage: GeneticOneImageImport,
} as const;
