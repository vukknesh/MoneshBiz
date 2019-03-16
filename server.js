const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Users = [
  {
    id: 1,
    name: "leonardo",
    email: "leomcn@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 2,
    name: "Damares",
    email: "Damares@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 3,
    name: "Goran",
    email: "Goran@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 4,
    name: "Nina",
    email: "Nina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 5,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 6,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 7,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 8,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 9,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 10,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 11,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 12,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  },
  {
    id: 13,
    name: "Marina",
    email: "Marina@hotmail.com",
    menssagens: {
      comentarios: {
        id: 1,
        body: "alou",
        title: "title",
        image:
          "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg"
      },
      menssagemRecebidas: [],
      menssagemEnviadas: []
    }
  }
];

const app = express();
app.use(cors());

//Body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.send(Users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
