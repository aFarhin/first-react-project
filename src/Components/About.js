const About = (props)=>(
    <div>
        <div className="about">
            <h1>About Us</h1>
            <p>In this section of our blog, we embark on a captivating journey to explore the rich tapestry of traditional arts and crafts from diverse regions around the world. From intricate textiles to exquisite pottery, we delve into the cultural heritage of different communities, shining a spotlight on the artisans who preserve and pass down these ancient traditions. Join us as we unravel the stories behind these art forms, discover the techniques involved, and celebrate the beauty of craftsmanship that reflects the identity and spirit of a place.</p>
            {props.children};
        </div>
    </div>
)

export default About;