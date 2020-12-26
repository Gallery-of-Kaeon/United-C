let makefile =
`CC      = gcc
CFLAGS  = -g
RM      = rm -f

default: all

all: [APP_NAME]

[APP_NAME]: [APP_NAME].c
    $(CC) $(CFLAGS) -o [APP_NAME] [APP_NAME].c

clean veryclean:
    $(RM) [APP_NAME]`;

try {

	var cmd = require("node-cmd");
	var io = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/IO/ioNode.js");
	var oneSuite = require("https://raw.githubusercontent.com/Gallery-of-Kaeon/JavaScript-Utilities/master/JavaScript%20Utilities/United%20Bootstrap/ONESuite.js");

	let path = process.argv[5];

	if(path.indexOf(".") == -1)
		path += ".uc";

	let appName =
		path.substring(0, path.lastIndexOf(".")).split(" ").join("_");

	let code = oneSuite.preprocess(io.open(path));

	io.save(code, appName + ".c");
	io.save(makefile.split("[APP_NAME]").join(appName), "Makefile");

	cmd.run("make");
}

catch(error) {
	console.log(error);
}