import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfo,
  faPaw,
  faSignInAlt,
  faSignOutAlt,
  faUserCog,
  faUserFriends,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

export const useIcons = () => {
  library.add(
    faInfo,
    faPaw,
    faSignInAlt,
    faSignOutAlt,
    faUserCog,
    faUserFriends,
    faUserPlus
  );
};
