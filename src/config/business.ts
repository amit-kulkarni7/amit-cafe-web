export const businessConfig = {
  brand: {
    name: "Amit Cafe",
    tagline: "A little cup of peace.",
    establishedYear: 2024,
  },

  location: {
    city: "Portland",
    state: "Oregon",
    stateCode: "OR",
    country: "United States",
    timezone: "America/Los_Angeles",
    display: "Portland, OR",
    conceptLabel: "Concept Location",
  },

  currency: {
    code: "USD",
    symbol: "$",
  },

  hours: {
    monThu: {
      open: "8:00 AM",
      close: "10:00 PM",
      openHour24: 8,
      closeHour24: 22,
      display: "MON–THU 8:00 AM – 10:00 PM",
    },
    friSun: {
      open: "8:00 AM",
      close: "11:00 PM",
      openHour24: 8,
      closeHour24: 23,
      display: "FRI–SUN 8:00 AM – 11:00 PM",
    },
  },

  disclosure: {
    footer:
      "Amit Cafe is a fictional concept project. No physical cafe exists.",
    reservations:
      "Demo reservation form — submissions are for testing only and do not reserve a real table.",
  },
} as const;

export type BusinessConfig = typeof businessConfig;
