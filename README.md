#  AUDI Blockchain Network "CarCV"


CarCV is a project of AUDI, for developing a Blockchain network for leased/used cars.The network stores all the car data like Mileage,Service History etc on Blockchain.It transfers the ownership (seller to buyer),in which AUDI acts as a regulatory.
This uploaded network is just showing transfer of Ownership, rest of the work is in my private repository. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
Install Hyperledger Fabric
Install Composer
Install Docker



### Installing


## Included Components
* Hyperledger Fabric
* Hyperledger Composer
* Docker

## Application Workflow Diagram
![Application Workflow](images/GettingStartedWComposer-arch-diagram.png)

1. Install the Network Dependicies a) cryptogen b) configtxgen c) configtxlator d) peer
2. Configure the network a) generating the network artifacts b) Starting up the network

## Prerequisites

* [Docker](https://www.docker.com/products/overview) - check latest version
* [Docker Compose](https://docs.docker.com/compose/overview/) - check latest version
* [Node.js & npm](https://nodejs.org/en/download/) - node v6.2.0 - v6.10.0 (v7+ not supported); npm comes with your node installation.
* [Git client](https://git-scm.com/downloads) - needed for clone commands
*  git - 2.9.x
*  Python - 2.7.x

## Steps
1. [Installing Hyperledger Composer Development Tools](#1-installing-hyperledger-composer-development-tools)
2. [Starting Hyperledger Fabric](#2-starting-hyperledger-fabric)
3. [Generate the Business Network Archive (BNA)](#3-generate-the-business-network-archive-bna)
4. [Deploy the Business Network Archive using Composer Playground](#4-deploy-the-business-network-archive-using-composer-playground)
5. [Deploy the Business Network Archive on Hyperledger Composer running locally](#5-deploy-the-business-network-archive-on-hyperledger-composer-running-locally)




## 5. Deploy the Business Network Archive on Hyperledger Composer running locally on your system 
Deploying a business network to the Hyperledger Fabric requires the Hyperledger Composer chaincode to be installed on the peer, then the business network archive (.bna) must be sent to the peer, and a new participant, identity, and associated card must be created to be the network administrator. Finally, the network administrator business network card must be imported for use, and the network can then be pinged to check it is responding.

Change directory to the `dist` folder containing `my-network.bna` file.

The `composer runtime install` command requires a PeerAdmin business network card (in this case one has been created and imported in advance), and the name of the business network. To install the composer runtime, run the following command:
```
cd dist
composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName my-network
```

The `composer network start` command requires a business network card, as well as the name of the admin identity for the business network, the file path of the `.bna` and the name of the file to be created ready to import as a business network card. To deploy the business network, run the following command:
```
composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile my-network.bna --file networkadmin.card
```

The `composer card import` command requires the filename specified in `composer network start` to create a card. To import the network administrator identity as a usable business network card, run the following command:
```
composer card import --file networkadmin.card
```

You can verify that the network has been deployed by typing:
```
composer network ping --card admin@my-network
```

You should see the the output as follows:
```
The connection to the network was successfully tested: my-network
	version: 0.16.0
	participant: org.hyperledger.composer.system.NetworkAdmin#admin

Command succeeded
```

To integrate with the deployed business network (creating assets/participants and submitting transactions) we can either use the Composer Node SDK or we can generate a REST API. To create the REST API we need to launch the `composer-rest-server` and tell it how to connect to our deployed business network. Now launch the server by changing directory to the project working directory and type:
```bash
cd ..
composer-rest-server
```

Answer the questions posed at startup. These allow the composer-rest-server to connect to Hyperledger Fabric and configure how the REST API is generated.
* Enter `admin@my-network` as the card name.
* Select `never use namespaces` when asked whether to use namespaces in the generated API.
* Select `No` when asked whether to secure the generated API.
* Select `Yes` when asked whether to enable event publication.
* Select `No` when asked whether to enable TLS security.

If the composer-rest-server started successfully you should see these two lines are output:
```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
```

Open a web browser and navigate to http://localhost:3000/explorer

## Contributing

Feel free to fork and clone the project.


## Authors

* **Shubham Jaiswal** - *Initial work* - [D-Fast](https://github.com/sjais789/D-Fast)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details



