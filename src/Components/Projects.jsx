import '../Styles/projects.css';
import '../App.css/';

const Projects = () => {
    return (
        <div>
            <section id="PROJECTS">
                <h2>Projects</h2>
                <div class="portfolio-container">
                    <a
                        class="view-button"
                        href="https://thiruveedipraveenfsdproject.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="portfolio-item">
                            <div class="card">
                                <h3 class="shine">Infinity Buy (Front-End)</h3>
                                <p>Developed a fully functional e-commerce shopping website using React.js, delivering a
                                    seamless
                                    and responsive user experience for browsing and purchasing products. Implemented an
                                    intuitive
                                    and visually appealing user interface with optimized navigation. Designed efficient
                                    product
                                    filtering, categorization, and search functionality. Leveraged state management for
                                    smooth
                                    interactions and ensured cross-device compatibility.</p>
                            </div>
                        </div>
                    </a>
                    <a
                        class="view-button"
                        href="https://thiruveedipraveenweather.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="portfolio-item">
                            <h3 class="shine">Weather App</h3>
                            <p>Developed a dynamic weather application using React.js that fetches real-time data from the
                                OpenWeatherMap API. Displays temperature, wind speed, and humidity with a clean, user-friendly
                                interface. Integrated search functionality and ensured responsiveness across devices. Optimized
                                API calls and state management for performance.</p>
                        </div>
                    </a>
                    <a
                        class="view-button"
                        href="https://github.com/praveen-svg755/food-product-explorer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="portfolio-item">
                            <h3 class="shine">Food Product Explorer</h3>
                            <p>The Food Product Explorer is an interactive web application designed to help users discover and explore a wide range of food products. The application utilizes the SPI (Serial Peripheral Interface) to fetch and display real-time data for various food items. Users can view detailed nutritional information, ingredients, and other relevant metadata for each product, making it an ideal tool for health-conscious individuals, diet planners, and food enthusiasts.</p>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Projects;