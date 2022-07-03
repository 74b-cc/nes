import React from "react";

const config = {
  ROMS: {
    ducktales: {
      name: "ducktales",
      description: (
        <span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Concentration Room
          </a>{"ducktales"}
        </span>
      ),
      url: process.env.PUBLIC_URL+"/roms/ducktales/ducktales.nes"
    },
    snowbros: {
      name: "snowbros",
      description: (
        <span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            雪人兄弟
          </a>{"snowbros"}
        </span>
      ),
      url: process.env.PUBLIC_URL+"/roms/snowbros/SnowBros.nes"
    },
    mario3: {
      name: "mario3",
      description: (
        <span>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            mario3
          </a>{"snowbros"}
        </span>
      ),
      url: process.env.PUBLIC_URL+"/roms/mario3/Mario3.nes"
    }
  },
  GOOGLE_ANALYTICS_CODE: process.env.REACT_APP_GOOGLE_ANALYTICS_CODE,
  SENTRY_URI: process.env.REACT_APP_SENTRY_URI
};

export default config;
