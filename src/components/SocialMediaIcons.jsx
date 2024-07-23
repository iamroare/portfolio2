const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/iamroare/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" style={{height: "5vh"}} src="https://cdn-icons-png.flaticon.com/512/1377/1377213.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://twitter.com/iamroare"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" style={{height: "5vh"}} src="https://cdn-icons-png.flaticon.com/512/145/145812.png" />
        </a>
        {/* <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/iamroare"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src="../assets/facebook.png" />
        </a> */}
  

{/* *********** */}
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.youtube.com/channel/UCYQ_Y-mdLCf_YtYUv4U4chw"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="youtube-link" style={{height: "5vh"}} src="https://cdn-icons-png.flaticon.com/512/3670/3670147.png" />
        </a>

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/iamroare"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" style={{height: "5vh"}} src="https://cdn-icons-png.flaticon.com/512/270/270798.png" />
        </a>

{/* *********** */}


        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/iamroare/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" style={{height: "5vh"}} src="https://cdn-icons-png.flaticon.com/512/4138/4138124.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;