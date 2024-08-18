declare module "@placetopay/iconsax-vue";
declare module "@mediv0/v-bucket";

export type StationSocialLinks = {
  youtube: string;
};

export type StationAuthor = {
  name: string;
  avatar: string;
  social: StationSocialLinks;
};

export type Station = {
  category: string;
  tags: string[];
  title: string;
  id: string;
  author: StationAuthor;
};

export type StationsApiResponse = {
  data: Station[];
};

export type CurrentActiveStation = {
  id: string;
  title: string;
  name: string;
  avatar: strings;
};
