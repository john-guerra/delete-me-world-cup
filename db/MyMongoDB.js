import { MongoClient } from "mongodb";

function MyMongoDB() {
  async function getClient() {
    const client = await MongoClient.connect("mongodb://localhost:37017/");
    const games = client.db("worldCup").collection("games");

    return { client, games };
  }
  const me = {};

  me.getGames = async function (filter = {}, { sort = { _id: -1 } } = {}) {
    const { client, games } = await getClient();

    try {
      const cursor = games.find(filter, { sort });
      return await cursor.toArray();
    } catch (err) {
      console.error("myMongoDB: Error fetching matches:", err);
      throw err;
    } finally {
      await client.close();
    }
  };

  return me;
}

const myMongoDB = MyMongoDB();

export default myMongoDB;
