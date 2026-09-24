import IconGithub from "../components/icons/github.astro";
import IconLinkedin from "../components/icons/linkedin.astro";
import IconTwitter from "../components/icons/twitter.astro";
import IconFacebook from "../components/icons/facebook.astro";
import IconMedium from "../components/icons/medium.astro";
import IconBlueSky from "../components/icons/bluesky.astro";

export const SOCIALS = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/hasindu.me",
    icon: IconFacebook,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/hasindu-nagolla/",
    icon: IconLinkedin,
  },
  {
    name: "Twitter",
    url: "https://x.com/hasindunagolla",
    icon: IconTwitter,
  },
  {
    name: "Github",
    url: "https://github.com/hasindu-nagolla",
    icon: IconGithub,
  },
  {
    name: "Medium",
    url: "https://medium.com/@hasindu-nagolla",
    icon: IconMedium,
  },
  {
    name: "Bluesky", // 👈 NEW
    url: "https://bsky.app/profile/hasindunagolla.bsky.social",
    icon: IconBlueSky,
  },
];
