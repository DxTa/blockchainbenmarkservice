"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InfrastructureAndArtefactsCreator {
    constructor() {
    }
    createBlockchainArtefactEthereum() {
        let ethPeerMetada = {
            implementation: 'ethereum',
            featureName: 'creator'
        };
        let ethMinerMetadata = {
            implementation: 'ethereum',
            featureName: 'miner'
        };
        let ethPeer = {
            _id: null,
            name: 'ethereum peer',
            executionEnvironment: 'docker',
            repositoryTag: 'ethereum/client-go',
            bcMetadata: ethPeerMetada
        };
        let ethMiner = {
            _id: null,
            name: 'ethereum miner',
            executionEnvironment: 'docker',
            repositoryTag: 'ethereum/client-go',
            bcMetadata: ethMinerMetadata
        };
        return [ethPeer, ethMiner];
    }
    createBlockchainArtefactHypFab() {
        let hypfabPeerMetada = {
            implementation: 'hyperledger-fabric',
            featureName: 'creator'
        };
        let hypfabMinerMetadata = {
            implementation: 'hyperledger-fabric',
            featureName: 'miner'
        };
        let hypfabPeer = {
            _id: null,
            name: 'hypfab peer',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-peer',
            bcMetadata: hypfabPeerMetada
        };
        let hypfabMiner = {
            _id: null,
            name: 'hypfab miner',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-orderer',
            bcMetadata: hypfabMinerMetadata
        };
        let hypfabKafka = {
            _id: null,
            name: 'hypfab kafka',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-kafka',
            bcMetadata: {
                implementation: 'hyperledger',
                featureName: 'kafka'
            }
        };
        let hypfabZookeeper = {
            _id: null,
            name: 'hypfab zookeeper',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-zookeeper',
            bcMetadata: {
                featureName: 'zookeeper',
                implementation: 'hyperledger'
            }
        };
        let hypfabFabricCA = {
            _id: null,
            name: 'hypfab fabric-ca',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-ca',
            bcMetadata: {
                implementation: 'hyperledger',
                featureName: 'certificate authority'
            }
        };
        let hypfabFabricTools = {
            _id: null,
            name: 'hypfab fabric-tools',
            executionEnvironment: 'docker',
            repositoryTag: 'hyperledger/fabric-tools',
            bcMetadata: {
                featureName: 'tools',
                implementation: 'hyperledger'
            }
        };
        return [hypfabPeer, hypfabMiner, hypfabKafka, hypfabZookeeper, hypfabFabricCA, hypfabFabricTools];
    }
}
exports.InfrastructureAndArtefactsCreator = InfrastructureAndArtefactsCreator;
