import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body {
        font-family: "Poppins", sans-serif;
        color: #333;
        overflow-x: hidden;
        //line-height: 1.8;
        
    }

    //h1, h2, h3 {
    //    //font-weight: 700;
    //    //color: #222;
    //    text-align: center;
    //    margin-bottom: 10px;
    //}
    
    .my-name {
        font-size: 58px;
        margin-bottom: 30px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
        
    }
  
    
    .portfolio-container {
        position: relative;
        width: 100%;
        min-height: 200vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 50px 20px;
    }

    .bio {
        max-width: 1000px;
        text-align: center;
        font-size: 18px;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        margin: 30px 0;
        line-height: 1.8;
        
    }

    .section {
        width: 90%;
        max-width: 1000px;
        margin: 25px auto;
        padding: 30px;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }

    .section h3 {
        font-size: 24px;
        margin-bottom: 20px;
        border-bottom: 3px solid #4facfe;
        padding-bottom: 8px;
        text-align: center;
    }

    .section ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .project-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 48%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
        text-align: center;
        background: #fff;
        transition: transform 0.3s ease-in-out;
    }

    .project-item:hover {
        transform: translateY(-5px);
    }

    .project-title {
        font-size: 25px;
        //font-weight: bold;
        margin-bottom: 10px;
    }
    
    .project-describe {
        font-size: 18px;
        //font-weight: bold;
        margin-top: 10px;
        margin-bottom: 10px;
        direction: ltr; /* מגדיר את הכיוון משמאל לימין */
        text-align: left; /* מיישר את הטקסט לשמאל */
    }

    .project-image {
        width: 100%;
        max-width: 450px;
        //height: auto;
        border-radius: 10px;
        object-fit: cover;
    }
`;

export default GlobalStyles;
