function Footer() {
    return (
        <div className= "grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 bg-gray-100 text-gray-600 pt-10">
            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">Support</h5>
                <p> Safety information </p>
                <p> Cancellation options </p>
                <p> Our COVID-19 Response</p>
                <p> Supporting people with disabilities</p>
                <p> Report a neighborhood concern</p>
            </div>

             <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">Community</h5>
                <p> Airbnb.org: disaster relief housing </p>
                <p> Support Afghan refugees </p>
                <p> Celebrating diversity & belonging</p>
                <p> Combating discrimination </p>
            </div>

            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">Hosting</h5>
                <p> Try Hosting </p>
                <p> AirCover: protection for Hosts</p>
                <p> Explore hosting resources</p>
                <p> Visit our community forum</p>
                <p> How to host responsibly</p>
            </div>

            <div className = "space-y-4 text-xs text-gray-800">
                <h5 className = "font-bold">About</h5>
                <p> Learn about new features </p>
                <p> AirCover: protection for Hosts</p>
                <p> Letter from our founders</p>
                <p> Careers</p>
                <p> Investors</p>
                <p> Airbnb Luxe</p>
            </div>

        </div>
    )
}

export default Footer
