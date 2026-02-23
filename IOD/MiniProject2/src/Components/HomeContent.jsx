function HomeContent() {
  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column", // stack children vertically
          alignItems: "flex-start", // align items to the left
          width: "100%",
          margin: "20 auto",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "left", marginBottom: "16px" }}>About</h1>
        <p style={{ textAlign: "left", lineHeight: 1.6, fontFamily: "Arial"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mollis magna ut eros condimentum malesuada. Integer at libero neque.
          Vivamus sodales est id ipsum porttitor, ut rutrum tortor mattis. Cras
          viverra malesuada ligula. Aliquam vitae semper orci, non cursus
          tellus. Cras magna ex, varius ac gravida eu, tincidunt rhoncus ante.
          Aliquam eros ligula, sollicitudin sed finibus ut, hendrerit sit amet
          nulla. Quisque ultricies fermentum nunc at feugiat. Ut maximus quam
          eget tortor congue, non tincidunt nisi pretium. Mauris semper erat
          eget leo ultricies, at laoreet ante feugiat. Morbi varius ante eget
          mauris volutpat pellentesque. Nam dapibus nisl sed sem posuere
          malesuada. Proin molestie lacinia nunc, vitae posuere ante porttitor
          sed. Proin pharetra ut arcu a tristique. Mauris vulputate id metus in
          pharetra. Ut consectetur luctus urna vel consequat. Nulla a congue
          erat, id iaculis lorem. Curabitur id elit pharetra, ultricies arcu
          sed, tristique lectus. Read more.
        </p>

        <h1 style={{ textAlign: "left", marginBottom: "16px" }}>
          Online Coaching
        </h1>
        <p style={{ textAlign: "left", lineHeight: 1.6 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          mollis magna ut eros condimentum malesuada. Integer at libero neque.
          Vivamus sodales est id ipsum porttitor, ut rutrum tortor mattis. Cras
          viverra malesuada ligula. Aliquam vitae semper orci, non cursus
          tellus. Cras magna ex, varius ac gravida eu, tincidunt rhoncus ante.
          Aliquam eros ligula, sollicitudin sed finibus ut, hendrerit sit amet
          nulla. Quisque ultricies fermentum nunc at feugiat. Ut maximus quam
          eget tortor congue, non tincidunt nisi pretium. 
        </p>
      </div>
  );
}

export default HomeContent;
