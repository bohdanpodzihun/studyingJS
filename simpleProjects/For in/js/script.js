let movies = [
    {
        "original_name": "John Wick",
        "ukrainian_name": "Джон Уік",
        "year": 2014,
        "actors": [
            "Keanu Reeves",
            "Adrianne Pallckl",
            "Willem Dafoe"
        ]
    },
    {
        "original_name": "The Gentlemen",
        "ukrainian_name": "Джентльмени",
        "year": 2019,
        "actors": [
            "Matthew McConaughey",
            "Charlie Hunnam",
            "Michelle Dockery",
            "Colin Farrell",
            "Tom Wu",
            "Jeremy Strong",
            "Lyne Renee"
        ]
    },
    {
        "original_name": "The Dark Knight",
        "ukrainian_name": "Темний Лицар",
        "year": 2008,
        "actors": [
            "Christian Bale",
            "heath Ledger",
            "Aaron Eckhart",
            "Michael Caine",
            "Gary Oldman"
        ]
    }
]

for (let i = 0; i < movies.length; i++) {
    console.log("========== Movie №" + (i + 1) + " ==========")
    for (let j in movies[i]) {
        if (j == "actors") {
            for (let k = 0; k < movies[i][j].length; k++) {
                console.log("Actor " + (k + 1) + ": " + movies[i][j][k])
            }
        } else if (j == "original_name") {
            console.log("Original name: " + movies[i][j])
        } else if (j == "ukrainian_name") {
            console.log("Ukrainian name: " + movies[i][j])
        } else if (j == "year") {
            console.log("Year: " + movies[i][j])
        }
    }
}
