import { useRouter } from "next/dist/client/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";

function Search({ searchResults }) { 

    const router = useRouter();
    
    // ES6 destructure the object
    const {location, startDate, endDate, guests } = router.query;
    const fixedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const fixedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    const range = `from ${fixedStartDate} to ${fixedEndDate}`
    console.log(searchResults);
    return (
        <div className = "h-screen">
            <Header placeholder = {`${location} | ${range} | ${guests}`}/>
            <main className = 'flex'>
                <section className = "flex-grow pt-16 px-6">
                    <p className = "text-xs">
                        300+ Stays for {guests} guests - {range}
                    </p>
                    <h1 className = "text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
                    <div className = "hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className = "button">Cancellation Flexible</p>
                        <p className = "button">Type of Place</p>
                        <p className = "button">Price</p>
                        <p className = "button">Rooms and Beds</p>
                        <p className = "button">More filters</p>
                    </div>
                    <div className = "flex flex-col">
                        {searchResults.map(({img, title, description, star, price, total}) => (
                            <InfoCard
                                key = {2}
                                img = {img}
                                location = {location}
                                title = {title}
                                description = {description}
                                star = {star}
                                price = {price}
                                total = {total}
                                />
                        ))}
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps() { 
    // on the server step in between
    const searchResults = await fetch("https://jsonkeeper.com/b/5NPS").then(res => res.json());

    return {
        props: { 
            searchResults, 
        },
    };
 }