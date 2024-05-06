
// Importing frameworks
import express from "express";
import bodyParser from "body-parser";

// Defining constants and variables
const app = express();
const port = 3000;
const tech = [
    {
        category: "technology",
        title: "Connectivity",
        content: "The Internet of Things (IoT) has permeated every aspect of modern life, from smart homes to industrial applications. Devices connected to the internet can collect and exchange data, enabling seamless communication and automation. IoT is revolutionizing industries like healthcare, manufacturing, and transportation, creating new opportunities for efficiency and innovation.",
        author: "Eva Smith",
        authorid: "evasmith"
    },
    {
        category: "technology",
        title: "Transformation",
        content: "Blockchain technology offers decentralized and transparent systems for transactions and data management. It has the potential to revolutionize industries like finance, supply chain management, and healthcare by enhancing security, reducing costs, and increasing efficiency. With blockchain, trust is built into the system, paving the way for a new era of digital transformation.",
        author: "Maximilian Johnson",
        authorid: "maximilianjohnson"
    },
    {
        category: "technology",
        title: "Innovation in Tech",
        content: "The rapid pace of technological innovation is reshaping industries and transforming the way we live and work. From artificial intelligence to blockchain to quantum computing, breakthrough technologies are driving unprecedented changes in business models and societal norms. Embracing innovation is essential for staying competitive and harnessing the opportunities of the digital age.",
        author: "Sophia Williams",
        authorid: "sophiawilliams"
    },
    {
        category: "technology",
        title: "AI Revolution",
        content: "Artificial intelligence (AI) is poised to revolutionize industries and redefine the future of work. With advancements in machine learning, natural language processing, and computer vision, AI systems are becoming increasingly sophisticated and capable of performing complex tasks. From automating routine processes to augmenting human decision-making, AI holds the potential to drive significant productivity gains and unlock new possibilities across sectors.",
        author: "Eva Smith",
        authorid: "evasmith"
    },
    {
        category: "technology",
        title: "Future of Computing",
        content: "The future of computing is characterized by exponential growth in processing power, fueled by advances in hardware and software technologies. From quantum computing to neuromorphic computing to edge computing, emerging paradigms are pushing the boundaries of what's possible. These transformative technologies promise to revolutionize industries, enable new applications, and shape the digital landscape of tomorrow.",
        author: "Emma Wilson",
        authorid: "emmawilson"
    }
];

const travel = [
    {
        category: "travel",
        title: "Explore the World",
        content: "Embark on a journey to explore the breathtaking beauty and diverse cultures of our planet. From majestic mountains to pristine beaches to vibrant cities, the world is full of wonders waiting to be discovered. Whether you're an avid adventurer or a curious traveler, there's always something new and exciting to experience.",
        author: "Jackie Brown",
        authorid: "jackiebrown"
    },
    {
        category: "travel",
        title: "Hidden Gems",
        content: "Discover hidden gems and off-the-beaten-path destinations that offer unique experiences and unforgettable memories. While popular tourist attractions have their allure, there's something special about stumbling upon a hidden gem that few others have seen. Whether it's a secluded beach, a charming village, or a hidden waterfall, these hidden gems promise adventure and discovery.",
        author: "Eva Smith",
        authorid: "evasmith"
    },
    {
        category: "travel",
        title: "Cultural Immersion",
        content: "Immerse yourself in the richness of different cultures and traditions as you travel the world. From sampling local cuisine to participating in traditional festivals to learning a new language, cultural immersion offers a deeper understanding of the places you visit and the people you meet. Whether you're exploring ancient ruins or bustling markets, cultural experiences enrich your journey and create lasting memories.",
        author: "Mia Johnson",
        authorid: "miajohnson"
    },
    {
        category: "travel",
        title: "Adventure Awaits",
        content: "Embark on an adrenaline-fueled adventure and push your limits in the great outdoors. From hiking rugged trails to rafting wild rivers to climbing towering peaks, adventure travel offers thrills and excitement at every turn. Whether you're a seasoned adrenaline junkie or a first-time adventurer, there's a world of adventure waiting to be explored.",
        author: "Nico Clark",
        authorid: "nicoclark"
    },
    {
        category: "travel",
        title: "Tranquil Escapes",
        content: "Find serenity and relaxation in tranquil escapes away from the hustle and bustle of everyday life. Whether it's a secluded beach, a remote mountain cabin, or a peaceful countryside retreat, tranquil escapes offer the perfect opportunity to unwind, recharge, and reconnect with nature. Leave your worries behind and embrace the tranquility of your surroundings.",
        author: "Skylar Miller",
        authorid: "skylarmiller"
    }
];

const Food = [
    {
        category: "food",
        title: "Culinary Delights",
        content: "Indulge your taste buds in a world of culinary delights, where every dish tells a story and every bite is a revelation. From exotic flavors to comforting classics, the world of food is as diverse as it is delicious. Whether you're exploring street food markets or dining in Michelin-starred restaurants, culinary delights await at every turn.",
        author: "Ace White",
        authorid: "acewhite"
    },
    {
        category: "food",
        title: "Gastronomic Adventures",
        content: "Embark on a gastronomic journey and explore the rich tapestry of flavors and cuisines from around the world. From spicy street food to elegant fine dining, gastronomic adventures offer a feast for the senses and a celebration of culinary creativity. Whether you're a passionate foodie or a curious diner, there's always something new and exciting to discover.",
        author: "Bella Brown",
        authorid: "bellabrown"
    },
    {
        category: "food",
        title: "Food Exploration",
        content: "Discover the world of food through the eyes of a culinary explorer, as you uncover hidden gems and savor authentic flavors from around the globe. From bustling food markets to hidden hole-in-the-wall eateries, food exploration is a journey of discovery and delight. Whether you're a seasoned food enthusiast or a curious novice, there's a world of culinary wonders waiting to be explored.",
        author: "Carlos Green",
        authorid: "carlosgreen"
    },
    {
        category: "food",
        title: "Taste Sensations",
        content: "Experience the joy of taste sensations that tantalize the palate and ignite the senses. From sweet and savory to spicy and tangy, taste sensations offer a symphony of flavors and textures that delight and inspire. Whether you're indulging in a decadent dessert or savoring a perfectly grilled steak, each bite is an opportunity to awaken your taste buds and elevate your dining experience.",
        author: "Eva Smith",
        authorid: "evasmith"
    },
    {
        category: "food",
        title: "Culinary Experiences",
        content: "Embark on a journey of culinary experiences that celebrate the artistry and craftsmanship of food. From hands-on cooking classes to intimate chef's table dinners, culinary experiences offer a unique opportunity to engage with food in new and exciting ways. Whether you're a passionate home cook or a curious food enthusiast, there's a culinary experience waiting to inspire and delight.",
        author: "Ethan Wilson",
        authorid: "ethanwilson"
    }
];


const contact = [];


// Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// Functions
function arrPush(_category, _title, _content, _author, _authorid) {
    var content = {
        category: _category,
        title: _title,
        content: _content,
        author: _author,
        authorid: _authorid
    }

    switch (_category) {
        case "technology":
            tech.push(content);
            break;
        case "travel":
            travel.push(content);
            break;
        case "food":
            Food.push(content);
            break;
        default:
            break;
    }
}

function arr_ran(arr_len) {
    var len = Math.floor(Math.random() * arr_len);
    return len;
}

function arr_srch(idd, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].authorid === idd) {
            return i;
        }
    }
    return false;
}
// HTTP Get & Post
app.get("/", (req, res) => {

    res.render("index.ejs", {
        T_contento: tech[0],
        Tr_contento: travel[0],
        F_contento: Food[0]
    });
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.post("/submit-blog", (req, res) => {
    var _category = req.body["category"];
    var _title = req.body["title"];
    var _content = req.body["content"];
    var _author = req.body["author"];
    var _authorid = _author.replace(/\s/g, "").toLowerCase();
    arrPush(_category, _title, _content, _author, _authorid);

    // Redirect to the /blog page after submitting the blog
    res.redirect("/blog");
});

app.get("/blogPage", (req, res) => {
    var _srcid = req.query.src_id;
    if (_srcid === "src") {
        var _authorid = req.query.author; // Assuming the author is sent as a query parameter
        var idd = _authorid.replace(/\s/g, "").toLowerCase();
        var ttt = arr_srch(idd, tech);
        var trr = arr_srch(idd, travel);
        var fff = arr_srch(idd, Food);

        if (ttt !== false || trr !== false || fff !== false) {
            res.render("scrPage.ejs", {
                author_name: _authorid,
                _Tech: tech,
                _Travel: travel,
                _Food: Food,
                _Tcid: ttt,
                _Trid: trr,
                _Fid: fff,
            });
        } else {
            res.status(404).send("Author not found 🕵🏽");
        }
    } else {
        var _category = req.query.category;
        var _index = req.query.id;
        console.log(_category);
        switch (_category) {
            case "technology":
                res.render("blogpage.ejs", {
                    _TechCON: tech,
                    _id: _index
                })
                break;
            case "travel":
                res.render("blogpage.ejs", {
                    _TechCON: travel,
                    _id: _index
                })
                break;
            case "food":
                res.render("blogpage.ejs", {
                    _TechCON: Food,
                    _id: _index
                })
                break;

            default:
                break;
        }

    }


});

app.post("/delete", (req, res) => {
    var id = parseInt(req.body["id"]); // Ensure id is parsed as an integer
    var cate = req.body["category"];

    switch (cate) {
        case "technology":
            if (id >= 0 && id < tech.length) {
                tech.splice(id, 1); // Remove 1 element at the specified index
                console.log("Technology array length:", tech.length);
                console.log("Element deleted");
            } else {
                console.log("Invalid index for technology array");
            }
            break;
        case "travel":
            if (id >= 0 && id < travel.length) {
                travel.splice(id, 1);
                console.log("Travel array length:", travel.length);
                console.log("Element deleted");
            } else {
                console.log("Invalid index for travel array");
            }
            break;
        case "food":
            if (id >= 0 && id < Food.length) {
                Food.splice(id, 1);
                console.log("Food array length:", Food.length);
                console.log("Element deleted");
            } else {
                console.log("Invalid index for food array");
            }
            break;
        default:
            console.log("Invalid category");
            break;
    }

    // Redirect to the home page
    res.redirect("/");
});


app.get("/category", (req, res) => {

    res.render("blogView.ejs", {
        T_arr: tech,
        Tr_arr: travel,
        F_arr: Food
    });
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.post("/contact_submit", (req, res) => {
    var cont = {
        name: req.body.fname,
        email: req.body.fbody,
        opinions: req.body.fopinions
    };
    contact.push(cont);
    console.log(contact);
    res.redirect("/contact");


});




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

