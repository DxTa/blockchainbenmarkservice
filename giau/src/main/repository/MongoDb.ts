import {Logger} from "log4js";
import {Db, MongoClient} from "mongodb";


export class MongoDb {

    private mongoClient: MongoClient;
    private db: Db;
    constructor(private logger: Logger) {

    }

    public async createConnection() {
        let testing: boolean = process.env.NODE_ENV === "test";
        let dev: boolean = process.env.NODE_ENV === 'dev';
        let prod: boolean = process.env.NODE_ENV === 'prod';
        let mongodb_endpoint = process.env.MONGODB_URL;
        if (mongodb_endpoint == null) {
          mongodb_endpoint="mongodb://mongodb:27017/edgeblockchain";
        }
        if (testing) {
            this.mongoClient = await MongoClient.connect("mongodb://localhost:27017/edgeblockchain-test", {useNewUrlParser: true});
            this.db = this.mongoClient.db('edgeblockchain-test');
        } else if (dev) {

            this.mongoClient = await MongoClient.connect(mongodb_endpoint, {useNewUrlParser: true});
            this.db = this.mongoClient.db('edgeblockchain');
        } else if (prod) {
            //mongodb://localhost:27017/edgeblockchain
            this.mongoClient = await MongoClient.connect(mongodb_endpoint, {useNewUrlParser: true});
            this.db = this.mongoClient.db('edgeblockchain');
        } else {
            this.logger.error('Invalid NODE_ENV setting!');
            process.exit(-10);
        }
    }

    public async closeConnection() {
        await this.mongoClient.close();
    }

    public getDb(): Db {
        return this.db;
    }

}
