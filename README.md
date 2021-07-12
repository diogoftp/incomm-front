
# incomm-front
This project is the front-end of a gift card system. The back-end repository can be found [here](https://github.com/diogoftp/incomm-back).
## Prerequisites
* [Git](https://git-scm.com/)
* [NodeJS](https://nodejs.org/en/) (tested with version v12.18.4)
* [Npm](https://www.npmjs.com/) (tested with version 6.14.6)

OR

* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/) (tested with version 20.10.7)
* [Docker-compose](https://docs.docker.com/compose/install/) (tested with version 1.25.0)

##  Instructions
### Method one: Run locally
* Clone this repository:
```
git clone https://github.com/diogoftp/incomm-front.git
```
* Navigate to the repository folder:
```
cd incomm-front
```
* Install dependencies using npm:
```
npm install
```
* Run the development server:
```
npm start
```
* Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
#### Optional steps:
* To generate a production build, run:
```
npm run build
```
and serve the files in the 'build' folder with your favorite server.
* To generate updated documentation for the components, run:
```
npm run doc
```
and open /styleguide/index.html with your browser.

### Method two: Docker
* Clone this repository:
```
git clone https://github.com/diogoftp/incomm-front.git
```
* Navigate to the repository folder:
```
cd incomm-front
```
* Build and start the container using docker-compose:
```
sudo docker-compose up
```
* (Optional) If you make any change to the project and want to rebuild the container image, run:
```
sudo docker-compose up --build
```
* Open your browser and navigate to [http://localhost:8080](http://localhost:8080)

### Important note:
You must run the [back-end](https://github.com/diogoftp/incomm-back) locally for the project to work correctly.

## Design decisions
* The project was created using [create-react-app](https://create-react-app.dev/) for faster project configuration and initialization.
* [Typescript](https://www.typescriptlang.org/) was used as a personal challenge (first contact with typescript).
* [Antd](https://ant.design/components/overview/) was chosen as UI library. I am already familiar with it, it helps maintain standardization of components and improves productivity. It is also actively maintained.
* [Axios](https://github.com/axios/axios) was chosen for handling API calls because it is a modern JS ES6 library.
* Single-quotes (') are used in Javascript parts of the code. Double-quotes(") are used in HTML parts of the code. For example:
```
[...]
const cardMessage;
if (cardData) cardMessage = cardData.message;
else cardMessage = 'Example message';
return (
<Spin spinning={!cardData} size="large">
	<CardInfos icon={<MessageOutlined style={{ fontSize: '25px', padding: '1em' }} />}  title="Mensagem do Presente" text={cardMessage}  />
</Spin>
);
[...]
```

## Known issues
* The API URL always points to the same domain of the front-end application, but on different port. For example, if the website URL is http://foo.com, the API URL will be http://foo.com:5002/api. This decision was made because the back-end still does not have a static address. The correct approach would be to get the API URL as and environment variable.
* JWT token is stored in localStorage. It is known that it is safer to store it as httpOnly cookie.