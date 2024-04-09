let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

// let myJson = {
// 	"title" : "Fiona Moon",
// 	"favorite_color" : "#FF0072",
// 	"favorite_font" : "Serif",
// 	"pets" : ["cat", "dog", "roomba"]
// };

// printToPage( myJSON['title'] + "-" + myJSON['pets'][0]);

// function printToPage(incoming) {
// 	outputParagraph.innerText = incoming;
// }

let jsonDatabase = [
	{
		"title" : "Eve Harapeco",
		"picture_url" : "data:image/jpeg;base64,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",
		"favorite_color" : "#376996",
		"songs" : ["Shinkai", "Yoku", "Dramaturgy"],
		"song_link" : ["https://open.spotify.com/track/44VYdLnwvhn1H1cfieb84a?si=7c63498bf47f4d73", "https://open.spotify.com/track/0ac12GgX8LZK0VNC4N91o2?si=593d4971cd4746f4", "https://open.spotify.com/track/72uSoNIf7eScfGZFQjNHrR?si=71848047bb8e4399"]
	},
	{
		"title" : "Queen Bee",
		"picture_url" : "https://lh3.googleusercontent.com/9g67akRAhwXkvsk1xpuPfTN042t9cplPCQdY1Q2EF3X86uz-5a45sDslXtzIgLhNNKBWKd7yanWb8PRA=w544-h544-l90-rj",
		"favorite_color" : "#736b92",
		"songs" : ["Half", "Fire", "Mephisto"],
		"song_link" : ["https://open.spotify.com/track/2U8jF9oSHrBm0r3TSnQs3r?si=a557ac0f499f4243", "https://open.spotify.com/track/4k2GMy34pt5rQT9aVEzEwq?si=5a599f07b0134d21", "https://open.spotify.com/track/45LUKiex0D78VuhP3Oz6mG?si=0319372082214cba"]
	},	
	{
		"title" : "Porter Robinson",
		"picture_url" : "https://alltimeedm.com/wp-content/uploads/2024/03/porter-robinson-third-album-jpg.webp",
		"favorite_color" : "#EFABFF",
		"songs" : ["Musician", "Look at the Sky", "Shelter"],
		"song_link" : ["https://open.spotify.com/track/6uyltToZgo3MDKhCJ7F8Wc?si=448f9b6bc4e04e85", "https://open.spotify.com/track/5lXNcc8QeM9KpAWNHAL0iS?si=1323b2c4ce2b4904", "https://open.spotify.com/track/2ewEh7LuvToYyGHq7yT8N1?si=04d93c26e4e24855"]
	},
	{
		"title" : "Kenshi Yonezu",
		"picture_url" : "https://cdn.myanimelist.net/images/voiceactors/3/51743.jpg",
		"favorite_color" : "#FFD5FF",
		"songs" : ["Loser", "Lemon", "Orion"],
		"song_link" : ["https://open.spotify.com/track/7AqUE5AY514dbzeOAfJRa0?si=439d8c685ff944b3", "https://open.spotify.com/track/7Cd17G3oNQ34OWUwS8ZxfR?si=d7aedb40bfc34609", "https://open.spotify.com/track/1bIZxrSkbxatnTo8ObcIxX?si=bcd3147cfc3c4f95"]
	}
	];

for (var i = 0; i < jsonDatabase.length; i++) {
	createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
	newContentElement.classList.add('contentItem');

	let newContentHeading = document.createElement("H3");
	newContentHeading.classList.add('contentTitle');
	newContentHeading.innerText = incomingJSON['title'];
	newContentElement.appendChild(newContentHeading);

	let newImage = document.createElement("IMG");
	newImage.classList.add("footerImage");
	newImage.src = incomingJSON['picture_url'];
	newContentElement.appendChild(newImage);

	let newContentSubhead = document.createElement("H4");
	newContentSubhead.innerText = "Songs:";
	newContentElement.appendChild(newContentSubhead);

	let newContentPetList = document.createElement("UL");
	newContentElement.appendChild(newContentPetList);

	for (var i = 0; i < incomingJSON['songs'].length; i++) {
		var currentPetString = incomingJSON['songs'][i];
		var newPetItem = document.createElement("LI");
		var newSongLink = document.createElement("A");
		newSongLink.href = incomingJSON["song_link"];
		newSongLink.innerText = currentPetString;
		newPetItem.appendChild(newSongLink);
		newContentPetList.appendChild(newPetItem);
	}

	contentGridElement.appendChild(newContentElement);
}