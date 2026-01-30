
import SingleCat from "./SingleCat";

function BigCats() {
    const cats = [
        { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', imageURL: "https://seethewild.org/wp-content/uploads/2024/11/jean-wimmerlin-U66avewmxJk-unsplash-1.jpg" },
        { id: 2, name: 'Cougar', latinName: 'Puma concolor', imageURL: "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_mountainlion%20copy.jpg" },
        { id: 3, name: 'Jaguar', latinName: 'Panthera onca', imageURL: "https://lazoo.org/wp-content/uploads/2020/02/Jaguar-Female-JEP_6234-1.jpg" },
        { id: 4, name: 'Leopard', latinName: 'Panthera pardus', imageURL: "https://www.worldlandtrust.org/wp-content/uploads/2020/09/A-leopard-page.jpg"},
        { id: 5, name: 'Lion', latinName: 'Panthera leo', imageURL: "https://www.krugerpark.co.za/images/black-maned-lion-shem-compion-786x500.jpg"},
        { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', imageURL: "https://cdn.britannica.com/52/170952-050-A545E35D/carnivore-Snow-leopard-regions-subcontinent-Asia-Indian.jpg"},
        { id: 7, name: 'Tiger', latinName: 'Panthera tigris', imageURL: "https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/wdpro-assets/parks-and-tickets/attractions/animal-kingdom/disney-animals/disney-animals-asian-sumatran-tigers/disney-animals-asian-sumatran-tigers-00.jpg?1658996208764"},
    ];

    return (
        <div className="List-of-Cats">
            <ul>
                {cats.map((cat) => (
                    <SingleCat
                        key ={cat.id} 
                        name ={cat.name} 
                        latinName ={cat.latinName} 
                        imageUrl ={cat.imageURL}
                    ></SingleCat>
                ))}
            </ul>
        </div>
    );
}

export default BigCats;
