import RegionPage from "@/regions/RegionPage";
import type { Speaker } from "@/regions/types";
import config from "./data/config.json";
import organizers from "./data/organizers.json";
import speakers from "./data/speakers.json";
import schedule from "./data/schedule.json";
import sponsors from "./data/sponsors.json";
import heroImage from "./assets/postcard-curitiba.png";

import daianePhoto from "./assets/daiane.jpg";
import leandroPhoto from "./assets/leandro.jpg";

import muriloPhoto from "./assets/speakers/murilo.png";
import lucianoPhoto from "./assets/speakers/luciano.jpg";
import leoPhoto from "./assets/speakers/leo.png";
import egonPhoto from "./assets/speakers/egon.jpg";
import eduardoPhoto from "./assets/speakers/eduardo.jpg";
import danPhoto from "./assets/speakers/dan.png";
import agataPhoto from "./assets/speakers/agata.png";
import robertoPhoto from "./assets/speakers/roberto.jpeg";

const photoMap: Record<string, string> = {
  "daiane.jpg": daianePhoto,
  "leandro.jpg": leandroPhoto,

};

const speakerPhotoMap: Record<string, string> = {
  "murilo.png": muriloPhoto,
  "luciano.jpg": lucianoPhoto,
  "leo.png": leoPhoto,
  "egon.jpg": egonPhoto,
  "eduardo.jpg": eduardoPhoto,
  "dan.png": danPhoto,
  "agata.png": agataPhoto,
  "roberto.jpeg": robertoPhoto,
};

const resolvedOrganizers = organizers.map((org) => ({
  ...org,
  photo: photoMap[org.photo] || org.photo,
}));

const resolvedSpeakers: Speaker[] = speakers.map((speaker) => ({
  ...speaker,
  photo: speakerPhotoMap[speaker.photo] || speaker.photo,
}));

const Sul = () => (
  <RegionPage
    config={config}
    organizers={resolvedOrganizers}
    speakers={resolvedSpeakers}
    schedule={schedule}
    sponsors={sponsors}
    heroImage={heroImage}
  />
);

export default Sul;
