
# BITE MAP

## About

Bite map is a restaurant finding application that can infer from natural human language.

It is powered by [OpenAI's GPT model](https://platform.openai.com/docs/api-reference/introduction) for natural language conversion and [Foursquare Place API](https://docs.foursquare.com/developer/reference/place-search) for location query and data.

You can try the live application [here](https://bite-map.vercel.app/).

# Running Locally

1. Clone the repository
```
  git clone https://github.com/KyricDev/bite-map-frontend.git
```

2. Navigate to the repository's folder and install dependencies
```
  npm install
```

3. You can either use Docker or Node to run locally. The app uses port 5173 by default. Make sure that nothing is running on this port before trying to run the app locally
    
    - Using Docker (Make sure docker is installed in your system)
        
        1. Build the image
        ```
          docker build -t <image-name>
        ```

        2. Run the image
        ```
          docker run -p 5173:5173 <image-name
        ```

        3. Navigate to [http://localhost:5173](http://localhost:5173)

    - Using Node

        1. Run the script
        ```
          npm run start
        ```

        2. Navigate to [http://localhost:5173](http://localhost:5173)
