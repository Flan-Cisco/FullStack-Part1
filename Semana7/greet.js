function greet(name) {
    if( name == null || name == "") {
        return "Hello There!";
    }
    if (/^[A-Z]+$/.test(name)) {
        return "HELLO " + name;
    }
    if (Array.isArray(name)) {
        let string = "Hello, ";
        for (let i = 0; i< name.length; i++) {
            string = string + name[i];
            if (i != name.length-1) {
                string = string + ", "
            }
        }
        return string
    }
    return "Hello, " + name;
}

module.exports = greet;
