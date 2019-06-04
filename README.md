
Flight delay insurance

# dev

- __Debug logic.js file with console.log('@debug'):__
docker logs -f dev-peer0.org1.example.com-delay-insurance-network-0.16.2 2>&1 | grep @debug

- __Install business network:__
composer network install --card PeerAdmin@hlfv1 --archiveFile insurance-network@0.0.6.bna

- __Start business network:__
composer network start --networkName insurance-network --networkVersion 0.0.6 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

- __Import network administrator card:__
composer card import --file networkadmin.card

- __Ping the network:__
composer network ping --card admin@insurance-network

- __Start composer playground on different port:__
composer-playground --port 9999

- __Generate REST server:__
composer-rest-server --card "admin@insurance-network" --namespaces "never" --port 3005 

- __Regenerate business network archive:__
1) update version in package.json 0.0.2 to 0.0.3
2) composer archive create --sourceType dir --sourceName . -a insurance-network@0.0.6.bna
3) composer network install --card PeerAdmin@hlfv1 --archiveFile insurance-network@0.0.6.bna
4) composer network upgrade -c PeerAdmin@hlfv1 -n insurance-network -V 0.0.3
5) composer network ping -c admin@insurance-network | grep Business

- __Delete business network card:__
composer card delete -c admin@insurance-network