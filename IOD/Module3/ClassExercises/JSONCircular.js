const room = {
  number: 23,
};
const meetup = {
  title: "Strategy Conference",
  participants: ["Chris", "Tina"],
};

//these two loops: meet points to room, room points to meetup
meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

//JSON cant handle it and throws an error
JSON.stringify(meetup); // TypeError: Converting circular structure to JSON
