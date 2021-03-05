var moduleDependencies = {
	io: "https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/IO/io.js",
	oneSuite: "https://raw.githubusercontent.com/Gallery-of-Kaeon/Kaeon-FUSION/master/Kaeon%20FUSION/APIs/ONE%20Suite/JavaScript/ONESuite.js",
	uc: "https://raw.githubusercontent.com/Gallery-of-Kaeon/United-C/main/United%20C/Source/UC.js"
};

let makefile =
`CC		= gcc
CFLAGS	= -g
RM		= rm -f

default: all

all: [APP_NAME]

[APP_NAME]: [APP_NAME].c
	$(CC) $(CFLAGS) -o [APP_NAME] [APP_NAME].c

clean veryclean:
	$(RM) [APP_NAME]`;

try {

	var cmd = require("node-cmd");
	var io = require(moduleDependencies.io);
	var oneSuite = require(moduleDependencies.oneSuite);
	var uc = require(moduleDependencies.uc);

	let path = process.argv[2];

	if(path.indexOf(".") == -1)
		path += ".uc";

	let appName =
		path.substring(0, path.lastIndexOf(".")).split(" ").join("_");

	let code = uc(oneSuite.preprocess(io.open(path)));

	io.save(code, appName + ".c");
	io.save(makefile.split("[APP_NAME]").join(appName), "Makefile");

	cmd.run("make");
}

catch(error) {
	console.log(error);
}