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
} as const;
