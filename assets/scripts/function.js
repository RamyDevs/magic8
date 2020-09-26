function returnMessage() {
	let msgIndex = Math.floor(Math.random() * 20);

	switch (msgIndex) {
		case 1:
			return 'It is certain';
			break;
		case 2:
			return 'It is decidedly so';
			break;
		case 3:
			return 'Without a doubt';
			break;
		case 4:
			return 'Yes - Definitely';
			break;
		case 5:
			return 'You may rely on it';
			break;
		case 6:
			return 'As I see it, yes';
			break;
		case 7:
			return 'Most likely';
			break;
		case 8:
			return 'Outlook good';
			break;
		case 9:
			return 'Yes';
			break;
		case 10:
			return 'Signs point to yes';
			break;
		case 11:
			return 'Reply Hazy, try again';
			break;
		case 12:
			return 'Ask again later';
			break;
		case 13:
			return 'Better not tell you now';
			break;
		case 14:
			return 'Cannot Predict now';
			break;
		case 15:
			return 'Concentrate and ask again';
			break;
		case 16:
			return "Don't count on it";
			break;
		case 17:
			return 'My reply is no';
			break;
		case 18:
			return 'My sources say no';
			break;
		case 19:
			return 'Outlook not so good';
			break;
		default:
			return 'Very Doubtful';
			break;
	}
}
