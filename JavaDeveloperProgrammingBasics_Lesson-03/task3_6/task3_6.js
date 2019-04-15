let browser = "IE";

switch (browser) {
    case "IE": 
        console.log("IE is not supported");
        break;
    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        console.log("These browsers are supported");
        break;
    default:
        console.log("We expect everything is OK in your browser!");
}


if ( browser === "IE" ) {
        console.log("IE is not supported");
} else if ( browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera" ) {
        console.log("These browsers are supported");
} else {
        console.log("We expect everything is OK in your browser!");
}