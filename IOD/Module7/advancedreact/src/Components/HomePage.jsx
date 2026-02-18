import CustomCard from "./CustomCard";
import BasicGrid from "./BasicGrid";
import MUIForm from "./MUIform";
import MUIDialog from "./MUIdialog";
import SxExample from "./SXExample";
import BasicUsage from "./StyledUtility";


function HomePage() {
  const students = [
    {
      firstName: "Bill",
      location: "Sydney",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/88/Bill_Gates_at_the_European_Commission_-_2025_-_P067383-987995_%28cropped%29.jpg",
    },
    {
      firstName: "William",
      location: "Melbourne",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/1/12/William_Submarines_Crop.png",
    },
    {
      firstName: "Bruce",
      location: "Brisbane",
      image:
        "https://static.wikia.nocookie.net/diehard/images/2/2c/Bruce_willis.jpeg/revision/latest/thumbnail/width/360/height/360?cb=20110505224818",
    },
  ];

  return (
    <>
      <h1>Welcome to my home page</h1>
      <BasicUsage></BasicUsage>
      <SxExample></SxExample>
      <MUIDialog text = "Please confirm your participation"></MUIDialog>
      <MUIForm></MUIForm>
      <h2>Custom Card</h2>
      {students.map((students) => (
        <CustomCard
          title={students.firstName}
          picture={students.image}
        ></CustomCard>
      ))}
      <div>
        <BasicGrid></BasicGrid>
      </div>
    </>
  );
}

export default HomePage;
