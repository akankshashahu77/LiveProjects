// Elem.innerHTML is used to populate a div with HTML search onlin about this method and create 
// a website with div tag combininga random joke given an array of jokes use Mth random and fetch jokes from the internet 
// (use any website to create the array ) your website should show random joke on every reload .Mix length of your jokes array should 10


let jokes = [
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What is a dying programmer's last program?",
            "delivery": "Goodbye, world!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 55,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Hey, wanna hear a joke?",
            "delivery": "Parsing HTML with regex.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 10,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the Python data scientist get arrested at customs?",
            "delivery": "She was caught trying to import pandas!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 233,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "why do python programmers wear glasses?",
            "delivery": "Because they can't C.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 293,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "Why did the database administrator leave his wife?",
            "delivery": "She had one-to-many relationships.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 264,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "How do you generate a random string?",
            "delivery": "Put a Windows user in front of Vim and tell them to exit.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 126,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 183,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What is the best prefix for global variables?",
            "delivery": "//",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 32,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 3,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 42,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "twopart",
            "setup": "Why is crucified Jesus always depicted with six-pack abs?",
            "delivery": "He did CrossFit.",
            "flags": {
                "nsfw": false,
                "religious": true,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 59,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Pun",
            "type": "single",
            "joke": "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 203,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "I'd tell you a joke about NAT but I would have to translate.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "safe": true,
            "id": 318,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "twopart",
            "setup": "Jokes about anti-vaxxer parents never get old.",
            "delivery": "Just like their kids.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 117,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "single",
            "joke": "Schrödinger's cat walks into a bar and doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 196,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "Why does Beyonce sing \"to the left, to the left\"?",
            "delivery": "Because women don't have rights.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": true,
                "explicit": false
            },
            "id": 133,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What is the best prefix for global variables?",
            "delivery": "//",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 32,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Christmas",
            "type": "twopart",
            "setup": "Why does Santa go down the chimney?",
            "delivery": "Because it soots him!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 252,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "twopart",
            "setup": "What's the object-oriented way to become wealthy?",
            "delivery": "Inheritance.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 46,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Misc",
            "type": "twopart",
            "setup": "How do construction workers party?",
            "delivery": "They raise the roof.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 216,
            "safe": true,
            "lang": "en"
        }
    ]

    let index1 = Math.floor(Math.random()* (jokes.length-1));
    console.log(index1);
    // console.log(Math.random() *(jokes.length)-1)

    joke.innerHTML = jokes[index1].joke;
    // console.log(jokes[index1])