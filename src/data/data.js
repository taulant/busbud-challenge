const sellable = {
  travel: {
    company: "Greyhound",
    vehicle: {
      type: "Bus",
      amenities: ["Wifi", "Bathroom", "ETicket"],
    },
    passengerCount: 1,
    from: {
      time: "8:00 am",
      location: "Port Authority",
      city: "New York City",
      map: "#",
    },
    to: {
      time: "12:00 pm",
      location: "Union Station",
      city: "Washington",
      map: "#",
    },
    duration: {
      time: "4h 30m",
      note: null,
    },
    itinerary: false,
  },

  tickets: [
    {
      type: "Regular",
      amenities: [],
      price: "$45",
    },
  ],
};

const summary = {
  travel: {
    company: "Greyhound",
    vehicle: {
      type: "Bus",
      amenities: ["Wifi", "Bathroom", "ETicket"],
    },
    passengerCount: 2,
    from: {
      time: "8:00 am",
      location: "Port Authority",
      city: "New York City",
      map: "#",
    },
    to: {
      time: "12:00 pm",
      location: "Union Station",
      city: "Washington",
      map: "#",
    },
    duration: {
      time: "4h 30m",
      note: null,
    },
    itinerary: true,
  },
  tickets: [
    {
      type: "Regular",
      amenities: [],
      price: "$45",
    },
  ],
};

const fastest = {
  travel: {
    company: "Greyhound",
    vehicle: {
      type: "Bus",
      amenities: ["Wifi", "Bathroom", "ETicket"],
    },
    passengerCount: 1,
    from: {
      time: "8:00 am",
      location: "Port Authority",
      city: "New York City",
      map: "#",
    },
    to: {
      time: "12:00 pm",
      location: "Union Station",
      city: "Washington",
      map: "#",
    },
    duration: {
      time: "4h 30m",
      note: "Fastest",
    },
    itinerary: false,
  },

  tickets: [
    {
      type: "Regular",
      amenities: [],
      price: "$45",
    },
  ],
};

const moreOptions = {
  travel: {
    company: "Greyhound",
    vehicle: {
      type: "Bus",
      amenities: ["Wifi", "Bathroom", "ETicket"],
    },
    passengerCount: 1,
    from: {
      time: "8:00 am",
      location: "Port Authority",
      city: "New York City",
      map: "#",
    },
    to: {
      time: "12:00 pm",
      location: "Union Station",
      city: "Washington",
      map: "#",
    },
    duration: {
      time: "4h 30m",
      note: null,
    },
    itinerary: false,
  },

  tickets: [
    {
      type: "Regular",
      amenities: [],
      price: "$45",
    },
    {
      type: "First-class",
      amenities: ["Refund", "SeatXL", "Utensils"],
      price: "$95",
    },
  ],
};

const moreOptionsFastest = {
  travel: {
    company: "Greyhound",
    vehicle: {
      type: "Bus",
      amenities: ["Wifi", "Bathroom", "ETicket"],
    },
    passengerCount: 1,
    from: {
      time: "8:00 am",
      location: "Port Authority",
      city: "New York City",
      map: "#",
    },
    to: {
      time: "12:00 pm",
      location: "Union Station",
      city: "Washington",
      map: "#",
    },
    duration: {
      time: "4h 30m",
      note: "Fastest",
    },
    itinerary: false,
  },

  tickets: [
    {
      type: "Regular",
      amenities: [],
      price: "$45",
    },
    {
      type: "First-class",
      amenities: ["Refund", "SeatXL", "Utensils"],
      price: "$95",
    },
  ],
};

const data = {
  sellable,
  summary,
  fastest,
  moreOptions,
  moreOptionsFastest,
};

export default data;
