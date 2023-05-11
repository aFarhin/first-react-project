import Navbar from './Components/Navbar';
import About from './Components/About';
import Section from './Components/Section';
import Footer from './Components/Footer';
import "./style.css";


let sectionArr = [
    { title:" Preserving Heritage:",
    content:"In this section, we delve into the importance of preserving traditional arts and crafts as cultural heritage. We discuss how these artistic practices hold significant historical, social, and cultural value, providing a sense of identity and continuity to communities. Through interviews with artisans and experts, we learn about their efforts to safeguard and promote these age-old techniques in the face of modernization. "},

    {title:"Textiles and Weaving: ",
          content:"Textiles are a universal expression of culture, and in this subsection, we explore the vibrant world of traditional textile arts. From the intricate handloom weavings of India to the colorful tapestries of South America, we showcase the techniques, motifs, and symbolism behind these textile traditions. We highlight specific regions renowned for their textile crafts, shedding light on the materials used, dyeing processes, and the stories woven into each fabric. "  },

          {title:"Pottery and Ceramics: ",
          content:" Pottery and ceramics have been fundamental to human civilization for centuries. In this section, we immerse ourselves in the world of clay, exploring traditional pottery techniques passed down through generations. We uncover the distinct styles and forms found in different regions, from delicate porcelain in East Asia to bold and vibrant earthenware in Africa. Through interviews with potters, we gain insights into their creative process and the significance of pottery in their communities."  },
          {title:" Interior Design:",
          content:"In this subsection, we dive into the world of interior design and explore various styles, trends, and elements that make a house a home. From contemporary minimalism to eclectic bohemian aesthetics, we showcase inspiring design ideas, color palettes, furniture arrangements, and decorative accents that bring personal flair to living spaces. We discuss the importance of functional design, the impact of lighting and textures, and the power of creating cohesive and inviting interiors. "  },

          {title:"DIY and Crafts: ",
          content:" In this subsection, we celebrate the joy of do-it-yourself (DIY) projects and crafts that add a personal touch to our living spaces. We share creative ideas for repurposing furniture, upcycling decor, and creating handmade items that reflect our individual style and values. Through step-by-step tutorials and inspiration, we encourage readers to embrace their creativity and infuse their homes with unique and personalized elements."  }
       

]

const App =()=>(
    <div>
       <Navbar/>
       <About>
        <p className='c'>🙋‍♀️</p>
        <br/>
        <hr/>
       </About>

       {
        sectionArr.map((data, index)=>(

            <Section>
            {index%2==0 ?<h1 className='c'>🎭 {data.title}</h1>:""}
            {index%2==1 ?<h1  className='d'>🎨 {data.title}</h1>:""}         
            {<p>{data.content}</p>}
            <br/>           
            {index!=sectionArr.length-1? <hr /> : ""} 
            </Section>           
        )
        )
       }

       <Footer/>
    </div>
);

export default App;