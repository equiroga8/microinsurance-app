# Microinsurance App

This project proposes the development of an application-based system
microinsurance that makes use of an oracle that will previously be designed and implemented.
This decentralized application is deployed in a Hyperledger Fabric blockchain
using the Hyperledger Composer tool where a business network is defined
which characterizes the participants, the assets and the transactions that manipulate those assets.
Participants will be able to interact with the blockchain through a user interface made with React.

![system](https://edu-quiroga.neocities.org/SistemaGlobal.png)

## Prerequisites

This was tested on Ubuntu 18.04 using a version of node.js 8.9.0 and npm
5.5.1.

Initially a few tools and dependencies should be installed. If you want to
to go into more detail you can see the official [documentation](https://hyperledger.github.io/composer/latest/installing/installing-prereqs):
1. Download a script that installs all dependencies.
```
curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
```
2. Give execution permissions to the script.
```
chmod u+x prereqs-ubuntu.sh
```
3. Run the script.
```
./prereqs-ubuntu.sh
```

4. Install the tools: composer-cli, composer-rest-server and composer-playground.
```
npm install -g composer-cli@0.20
npm install -g composer-rest-server@0.20
npm install -g composer-playground@0.20
```
5. Install a local instance of Hyperledger Fabric
```
mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers
curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-devservers.tar.gz
tar -xvf fabric-dev-servers.tar.gz
cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./downloadFabric.sh
```

## Installation

### Starting the local Hyperledger Fabric instance and installing the business network

1. Start the local Hyperledger Fabric instance.
```
cd ~/fabric-dev-servers
export FABRIC_VERSION=hlfv12
./startFabric.sh
./createPeerAdminCard.sh
```
2. Download the github project.
```
cd ..
git clone https://github.com/equiroga8/microinsurance-app.git
```
3. Install the business network in the local Hyperledger Fabric instance.
```
cd microinsurance-app/insurance-network
composer network install --card PeerAdmin@hlfv1 --archiveFile insurance-network@0.0.6.bna
```

4. Start the business network.
```
composer network start --networkName insurance-network --networkVersion 0.0.6 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
```
5. Import the business network administrator card.
```
composer card import --file networkadmin.card
```
6. Ping to check if it has been configured correctly.
```
composer network ping --card admin@insurance-network
```
7. Install dependencies.
```
npm install
```
8. Start composer-playground on port 9999.
```
composer-playground --port 9999
```
9. In composer playground select the insurance-network business network.
Once connected, select Test in the application bar. You will now create an
insurance company, an insuree and the oracle.

10. Select Submit Transaction, choose CreateInsuree, insert the following
JSON object and press Submit.
```
{
"$class": "org.insurance.CreateInsuree."
"email": "john@jmail.com",
"firstName": "John",
"lastName": "Doe"
}
```
11. Select Submit Transaction, choose CreateInsurer and insert the following
JSON object and press Submit.
```
{
"$class": "org.insurance.CreateInsurer."
"email": "admin@safeflight.com",
"name": "Safe Flight"
}
```
12. Select Submit Transaction, choose CreateOracle, insert the following 
object JSON and press Submit.
```
{
"$class": "org.insurance.CreateOracle"
}
```
13. Close composer-playground from the terminal.

14. Start the REST server that will use the user interface on port 3005.
```
composer-rest-server --card "admin@insurance-network" --namespaces "never" --port 3005
```
The configuration of the Fabric instance and the business network has been completed.

### Starting the oracle environment

1. Create an account at https://developer.lufthansa.com/docs
2. Register an application and write down the customer id and the secret key received.
3. Enter the oracle-server folder and install dependencies.
```
cd ../oracle-server
npm install
```
4. Create a .env file where the secret keys of step 2 will be saved.
```
nano .env
```
5. Write the following lines with the keys pointed out in section 2, save the
file and exit.
```
LHAPI_CLIENT_ID=iddeclient
LHAPI_CLIENT_SECRET=secret key
```
6. Starting the oracle
```
node index.js
```
### Starting the user interface environment

1. Enter the user interface folder and install dependencies.
```
cd ../interface
npm install
```
2. Start the development server
```
npm start
```
3. Change URL path to change view:
Insurer: /insurerView
Insured: /insureeView
