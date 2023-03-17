
## Next.js Dockerized Project

This is a sample Next.js project that has been dockerized for easy deployment.

## Technologies Used
-Next.js
-jest
-Docker


## Installation
- Clone the repository: git clone https://github.com/sarmadiAli/alibaba-countries
- Navigate to the project directory: cd <repository-name>
- Build the Docker image: docker build -t <docker-image-name> .





## Usage

To run the Dockerized Next.js project, execute the following command:
```bash
docker run -p 3000:3000 <docker-image-name>
```
This command will start the container and expose port 3000. You can access the project by navigating to http://localhost:3000 in your web browser.

## Testing
This project has been tested using Jest and Enzyme. To run the tests, execute the following command:


run jest test :
```bash
npm run test
# or
yarn run test
```

## Deployment

This project has been deployed to https://alibaba-countries-seven.vercel.app/. The website is live and can be accessed at https://alibaba-countries-seven.vercel.app/.

To deploy the project to a different URL, you will need to update the docker-compose.yml file with the appropriate settings. Once the file has been updated, execute the following command:

```bash
docker-compose up -d
```
This command will start the container and run it in the background. You can access the project by navigating to http://<your-domain>:3000 in your web browser.

Note that you will need to configure your DNS settings to point to the appropriate IP address for the server hosting the project.
