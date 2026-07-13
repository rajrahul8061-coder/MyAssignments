function launchBrowser (browserName)
{
if (browserName === "chrome") {
        console.log("Chrome browser launched");
    }

    else{

      console.log("browser not launched");  
    }
}

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":  
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Smoke Tests");
    }
}


launchBrowser("chrome");
runTests("smoke");






