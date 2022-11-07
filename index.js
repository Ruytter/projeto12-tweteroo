import express from "express";
import cors from "cors";

const app = express();

// configs
app.use(cors());
app.use(express.json());

const Users = [
  {
    id: 1,
    username: "bobesponja",
		avatar: "https://i.pinimg.com/564x/5b/66/e5/5b66e5fd227e7608db5790942d2a7215.jpg"
},
{
  id: 2,
  username: "patrick",
  avatar: "https://cosmonerd.com.br//uploads/2021/05/spin-off-patrick-bob-esponja-aspect-ratio-450-550.jpg"
},
{
  id: 3,
  username: "molusco",
  avatar: "https://pm1.narvii.com/6473/0ba6d77bfa9efd0b9ce309b28e75141fb199b02d_00.jpg"
}
];

const tweets = [
  {
    id: 1,
    username: "bobesponja",
    tweet: "eu amo o bob"
  },
  {
    id: 2,
    username: "patrick",
    tweet: "eu amo o patri"
  },
  {
    id: 3,
    username: "molusco",
    tweet: "eu amo o lusco"
  },
  {
    id: 4,
    username: "bobesponja",
    tweet: "eu amo o bob"
  },
  {
    id: 5,
    username: "patrick",
    tweet: "eu amo o patri"
  },
  {
    id: 6,
    username: "molusco",
    tweet: "primeiro a aparecer"
  },
  {
    id: 7,
    username: "bobesponja",
    tweet: "eu amo o bob"
  },
  {
    id: 8,
    username: "patrick",
    tweet: "eu amo o patri"
  },
  {
    id: 9,
    username: "molusco",
    tweet: "eu amo o lusco"
  },
  {
    id: 10,
    username: "bobesponja",
    tweet: "eu amo o bob"
  },
  {
    id: 11,
    username: "patrick",
    tweet: "eu amo o patri"
  },
  {
    id: 12,
    username: "molusco",
    tweet: "eu amo o lusco"
  },
  {
    id: 13,
    username: "bobesponja",
    tweet: "eu amo o bob"
  },
  {
    id: 14,
    username: "patrick",
    tweet: "eu amo o patri"
  },
  {
    id: 15,
    username: "molusco",
    tweet: "última postagem"
  }
];


app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.status(400).send({message: "Todos os campos são obrigatórios!"});
    return;
  }

  const newUser = {
    id: Users.length + 1,
    username,
    avatar
  };

  Users.push(newUser);

  res.status(200).send("OK")
});


app.post("/tweets", (req, res) => {
  const {  username, tweet} = req.body;

  if (!username || !tweet) {
    res.status(400).send({message: "Todos os campos são obrigatórios!"});
    return;
  }

  const newTweet = {
    id: tweets.length + 1,
    username,
    tweet
  };

  tweets.push(newTweet);

  res.status(201).send("OK")
});

app.get("/tweets", (req, res) => {
  const tenLastTweets = tweets.length - 10
  const lastTweets = tweets.filter((tweet) => tweet.id > tenLastTweets);
  const Tweets = []
  lastTweets.map( tweet => {
    const user = Users.find((u) => u.username === tweet.username)
    Tweets.push({
      username: user.username,
        avatar: user.avatar,
        tweet: tweet.tweet
    })
    });
  res.send(Tweets);
});

app.listen(5000, ()=> console.log("sever runing in port 5000"))