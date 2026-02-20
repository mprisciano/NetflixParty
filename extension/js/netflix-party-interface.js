function embedInPage() {
    console.log("%cNetflixParty", "color: red; font-weight: bold; font-size: 60px; -webkit-text-stroke-width: 2px; -webkit-text-stroke-color: black;");
    console.log("NetflixParty is getting ready...");
    const script = document.createElement("script");
    script.src = chrome.runtime.getURL("js/netflix-party-embedded.js");
    document.documentElement.appendChild(script);
}

const url = new URL(location.href);
if (url.searchParams.has("roomID") && url.host == "www.netflix.com") embedInPage();