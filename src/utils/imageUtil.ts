// Centralized image exports
// Usage: import { ImgAuthorAvatar } from '../utils/imageUtil'; then <Image source={ImgAuthorAvatar} />

// Author Images
export { default as ImgAuthorAvatar } from '../assets/imgs/img_author_avatar.png';

// Footer Images
export { default as ImgFooterBackNucleotide } from '../assets/imgs/footer_back_nucleotide.png';

// Optional grouped export
import ImgAuthorAvatarImport from '../assets/imgs/img_author_avatar.png';
import ImgFooterBackNucleotideImport from '../assets/imgs/footer_back_nucleotide.png';

export const Images = {
  // Author Images
  authorAvatar: ImgAuthorAvatarImport,
  // Footer Images
  footerBackNucleotide: ImgFooterBackNucleotideImport,
} as const;
