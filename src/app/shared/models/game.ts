import { Category } from './category';
import { Background } from './background';
import { Feature } from './feature';
import { Icon } from './icon';
import { Theme } from './theme';
import { GameTypes } from './game-types';

export interface Game {
  categories: string[],
  features: string[],
  themes: string[],
  icons: string[],
  backgrounds: string[],
  id: string,
  server_game_id: string,
  extearnal_game_id: string,
  front_game_id: string,
  name: string,
  title: string,
  ratio: string,
  status: string,
  provider: string,
  show_as_provider: string,
  provider_title: string,
  game_options: string,
  blocked_countries: string[],
  has_age_restriction: 0 | 1,
  icon_2: string,
  background: string,
  types: GameTypes,
  game_skin_id: string,
  cats: Category[],
  feats: Feature[],
  thms: Theme[],
  active: '0' | '1'
}

export const mockedGames: Game[] = [
  {
    "categories": [
      "51"
    ],
    "features": [],
    "themes": [],
    "icons": [],
    "backgrounds": [],
    "id": "2984",
    "server_game_id": "205",
    "extearnal_game_id": "3041",
    "front_game_id": "ASG205",
    "name": "WolfsBet ",
    "title": null,
    "ratio": "4:3",
    "status": "published",
    "provider": "ASG",
    "show_as_provider": "VGS",
    "provider_title": "BETCONSTRUCT",
    "game_options": null,
    "blocked_countries": null,
    "has_age_restriction": 0,
    "icon_2": "https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG205.jpg",
    "background": "https://www.cmsbetconstruct.com/content/images/casino/background/2219ae1d06d31cb180a7b9cf13a322d7_background.jpeg",
    "types": {
      "realMode": 1,
      "funMode": 1
    },
    "game_skin_id": "5015628",
    "cats": [
      {
        "id": "51",
        "title": "Video Slots",
        "type": "category"
      }
    ],
    "feats": [],
    "thms": [],
    "active": "1"
  },
  {
    "categories": [
      "93"
    ],
    "features": [],
    "themes": [],
    "icons": [],
    "backgrounds": [],
    "id": "2982",
    "server_game_id": "204",
    "extearnal_game_id": "3047",
    "front_game_id": "ASG204",
    "name": "Viking Treasures",
    "title": null,
    "ratio": "16:9",
    "status": "published",
    "provider": "ASG",
    "show_as_provider": "VGS",
    "provider_title": "BETCONSTRUCT",
    "game_options": null,
    "blocked_countries": null,
    "has_age_restriction": 0,
    "icon_2": "https://www.cmsbetconstruct.com/content/images/casino/icon2/ASG204.jpg",
    "background": "https://www.cmsbetconstruct.com/content/images/casino/background/f09b721146743c153c4bcefac2e7949f_background.jpeg",
    "types": {
      "realMode": 1,
      "funMode": 1
    },
    "game_skin_id": "5015630",
    "cats": [
      {
        "id": "93",
        "title": "Top Slots",
        "type": "category"
      }
    ],
    "feats": [],
    "thms": [],
    "active": "1"
  }
];
