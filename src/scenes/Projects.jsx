import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};


// const Project = ({ title }) => {
//   const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
//     bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
//   const projectTitle = title.split(" ").join("-").toLowerCase();


//   // if(title === "Project 1"){


  
//   return (
//     <motion.div variants={projectVariant} className="relative">
//       <div className={overlayStyles}>
//         <p className="text-2xl font-playfair">{title}</p>
//         <p className="mt-7">
//           Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
//           porttitor accumsan tincidunt.
//         </p>
//       </div>
//       <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
//     </motion.div>
//   );
// // }
// };

const Projects = () => {

  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();



  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Some of the projects that I have been working on.To showcase the Project Click on the Particular Project.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEUTIFUL PROJECTS
          </div>
          {/* <Project title="Project 1" /> */}

          {/* *********************** */}
          <motion.div variants={projectVariant} className="relative">
    <a 
    href="https://github.com/iamroare/iamroare_chat_app"
     target="_blank" 
      rel="noreferrer"
      >
    <div
    // style={{ height:"53vh", width:""}}
     className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working in REACT".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
          Chat APP with React js
        </p>
      </div>
    </a>
      <img 
      // style={{ height:"30vh", width:""}}
      // style={{ height:"53vh", width:""}}
      // src="https://cdn.dribbble.com/userupload/2816389/file/original-f627dc439b3ed7f2c88e9dd61c2b2cc3.png?resize=400x0"
      src={`../assets/${"Project 1".split(" ").join("-").toLowerCase()}.jpeg`}
       alt={"Project 1".split(" ").join("-").toLowerCase()} />
    </motion.div>

    {/* ******************************* */}



    <motion.div variants={projectVariant} className="relative">
    <a 
    href="https://github.com/iamroare/iamROARe-s-iPod-Mini-Project"
    target="_blank" 
      rel="noreferrer"
    
    >
      
      <div
      // style={{ height:"53vh", width:""}}
      
      className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working in REACT".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
          IPOD 
        </p>
      </div>
      <img 
      // style={{ height:"53vh", width:""}}
      src={`../assets/${"Project 2".split(" ").join("-").toLowerCase()}.jpeg`}
      // src="https://www.gadgetshieldz.com/images/detailed/208/iPod_Nano_3G_Maximum_Protection_Ultra_Clear.png"
       alt={"Project 2".split(" ").join("-").toLowerCase()} />
      </a>
    </motion.div>
    



    {/* ********************************* */}

    {/* https://github.com/iamroare/pollingAPI */}


    <motion.div variants={projectVariant} className="relative">
      <a
       href="https://github.com/iamroare/pollingAPI"
       target="_blank" 
         rel="noreferrer"
      >

      <div
      // style={{ height:"53vh", width:""}}
       className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working with Nodejs".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
        pollingAPI
        </p>
      </div>
      </a>
      <img 
      src={`../assets/${"Project 3".split(" ").join("-").toLowerCase()}.jpeg`}
      // style={{ height:"53vh", width:""}} 
      // src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4Darh"
      alt={"Project 3".split(" ").join("-").toLowerCase()} />
    </motion.div>


    {/* ********************************* */}


    {/* https://github.com/iamroare/placementCell_iamROARe */}
    <motion.div variants={projectVariant} className="relative">
      <a
      href="https://github.com/iamroare/placementCell_iamROARe"
      target="_blank" 
        rel="noreferrer"
      >
      <div 
      // style={{ height:"53vh", width:""}}
      className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working with Nodejs".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
         placementCell_iamROARe
        </p>
      </div>
      </a>
      <img 
      // style={{ height:"53vh", width:""}}
      src={`../assets/${"Project 4".split(" ").join("-").toLowerCase()}.jpeg`} 
      // src="data:image/png;base64,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"
      alt={"Project 4".split(" ").join("-").toLowerCase()} />
    </motion.div>




    {/* ********************************* */}

    {/* https://github.com/iamroare/prajapati-s-movie-app */}
    <motion.div variants={projectVariant} className="relative">
      <a
       href="https://github.com/iamroare/prajapati-s-movie-app"
       target="_blank" 
         rel="noreferrer"
      >
      <div
      // style={{ height:"53vh", width:""}}
       className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working with REACT".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
         Movie App
        </p>
      </div>
      </a>
      <img 
      // style={{ height:"53vh", width:""}}
      // src="https://uploads-ssl.webflow.com/6171f1dd89124f43db13392f/622d696097073a255ea91f10_ma-cover.jpg"
      src={`../assets/${"Project 5".split(" ").join("-").toLowerCase()}.jpeg`}
       alt={"Project 5".split(" ").join("-").toLowerCase()} />
    </motion.div>





    {/* ********************************* */}


    {/* https://github.com/iamroare/superHero.github.io */}
    <motion.div variants={projectVariant} className="relative">
     <a
      href="https://github.com/iamroare/superHero.github.io"
      target="_blank" 
        rel="noreferrer"
     >
     <div
    //  style={{ height:"53vh", width:""}}
      className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working in Vanilla Js".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
            superHero Hunter
        </p>
      </div>
     </a>
      <img 
      // style={{ height:"53vh", width:""}}
        // src="https://st.depositphotos.com/17080922/54116/v/600/depositphotos_541161942-stock-video-spider-man-spider-verse-animation.jpg"
      src={`../assets/${"Project 6".split(" ").join("-").toLowerCase()}.jpeg`}
       alt={"Project 6".split(" ").join("-").toLowerCase()} />
    </motion.div>


    {/* ********************************* */}



    {/* https://github.com/iamroare/cart */}
    <motion.div variants={projectVariant} className="relative">
     <a
           href="https://github.com/iamroare/cart"
           target="_blank" 
             rel="noreferrer"
     >
     <div
    //  style={{ height:"53vh", width:""}} 
     className={overlayStyles}>
        <p className="text-2xl font-playfair">{"Working in REACT".split(" ").join("-").toLowerCase()}</p>
        <p className="mt-7">
          Shopping Cart
        </p>
      </div>
     </a>
      <img 
      // style={{ height:"53vh", width:""}}
      //  style={{height: "27vh", width:"27vh"}}
      // src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
      src={`../assets/${"Project 7".split(" ").join("-").toLowerCase()}.jpeg`} 
      alt={"Project 7".split(" ").join("-").toLowerCase()} />
    </motion.div>



    {/* ********************************* */}

       
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;