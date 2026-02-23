import SingleProgram from "./SingleProgram";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ListOfPrograms() {
  const Programs = [
    {
      id: 1,
      name: "Rope Flow",
      info: "Swing, spin, and move with the rope in flowing, rhythmic patterns to improve coordination, agility, strength, and body awareness, often in a playful and meditative way.",
      image: "../public/RopeFlowImage.jpg",
    },
    {
      id: 2,
      name: "Kettlebell",
      info: "Swing, lift, burn—kettlebells turn every move into full-body power!",
      image: "../public/KettlebellImage.jpg",
    },
    {
      id: 3,
      name: "Steel Mace",
      info: "Swing, lift, burn—kettlebells turn every move into full-body power!",
      image: "../public/SteelMace.jpg",
    },
    {
      id: 4,
      name: "Clubbell",
      info: "Swing, lift, burn—kettlebells turn every move into full-body power!",
      image: "../public/Clubbell.jpg",
    },
  ];

  return (
    <Box
      className="List-Of-Programs"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Programs.map((program) => (
        <Box
          key={program.id}
          sx={{
            mt: 4,
            width: 330,
            height: 480,
            display: "flex",
            flexDirection: "column",
            borderRadius: 2,
            boxShadow: 5,
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={program.image}
            alt={program.name}
            sx={{
              height: 200,
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* CONTENT */}
          <Box sx={{ flexGrow: 1, p: 2 }}>
            <Typography gutterBottom variant="h5">{program.name}</Typography>
            <Typography variant="body2" color="text.secondary">{program.info}</Typography>
          </Box>

          {/* ACTIONS */}
          <Box sx={{ p: 2, pt: 0 }}>
            <Button size="small">Learn More</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ListOfPrograms;