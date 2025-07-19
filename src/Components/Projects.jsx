import '../Styles/projects.css'
import '../App.css/'

const Projects = () => {
    return (
        <div>
            <section id="portfolio">
                <h2>Projects</h2>
                <div class="portfolio-container">
                    <div class="portfolio-item">
                        <div class="card">

                            <h3>Infinity Buy (Front-End)</h3>
                            <p>Developed a fully functional e-commerce shopping website using React.js, delivering a
                                seamless
                                and responsive user experience for browsing and purchasing products. Implemented an
                                intuitive
                                and visually appealing user interface with optimized navigation. Designed efficient
                                product
                                filtering, categorization, and search functionality. Leveraged state management for
                                smooth
                                interactions and ensured cross-device compatibility.</p>

                            <a class="view-button" href="https://thiruveedipraveenfsdproject.netlify.app/" target="_blank">
                                <span class="icon">👁️</span> View
                            </a>


                        </div>
                    </div>
                    <div class="portfolio-item">
                        <h3>Weather App</h3>
                        <p>Developed a dynamic weather application using React.js that fetches real-time data from the
                            OpenWeatherMap API. Displays temperature, wind speed, and humidity with a clean, user-friendly
                            interface. Integrated search functionality and ensured responsiveness across devices. Optimized
                            API calls and state management for performance.</p>
                        <a class="view-button" href="https://thiruveedipraveenweather.netlify.app/" target="_blank">
                            <span class="icon">👁️</span> View
                        </a>

                    </div>
                    <div class="portfolio-item">
                        <h3>Food product explorer</h3>
                        <p>The Food Product Explorer is an interactive web application designed to help users discover and explore a wide range of food products. The application utilizes the SPI (Serial Peripheral Interface) to fetch and display real-time data for various food items. Users can view detailed nutritional information, ingredients, and other relevant metadata for each product, making it an ideal tool for health-conscious individuals, diet planners, and food enthusiasts.</p>
                        <a class="view-button" href="https://github.com/praveen-svg755/food-product-explorer" target="_blank">
                            <span class="icon">👁️</span> View
                        </a>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects