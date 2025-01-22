// API configuration for Spotify
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const spotyList = [
        "https://open.spotify.com/track/4pHdHimCLvD4nx8lh6uQyx?si=b671e54e2b6d4f43",
        "https://open.spotify.com/track/4iPA2yB8bK7T770EkkOi7s?si=1c02905fa13742d9",
        "https://open.spotify.com/track/2lqFwTECuP5VNUvzzotxWo?si=97a7b17865884cd2",
        "https://open.spotify.com/track/5u6AzESv0MYzBE1ZBrY20V?si=5264f0f49eb54df0"
    ];

    for(let i = 1; i<=spotyList.length; i++){
        const element = document.getElementById('embed-iframe-'+i);
        const options = {
            uri: spotyList[i-1]
        };
        const callback = (EmbedController) => {};
        IFrameAPI.createController(element, options, callback);
    }
};

// Elements to be observed
let imageArray = document.querySelectorAll('.card__image');
let spotyArray = document.querySelectorAll('.spoty-div');

// classes to be applied
let animationTittle = 'animationTittle';
let animationImage = 'animationImage';
let animationSpoty = 'animationSpoty';

// instance of the intersectionObserver
let imageObserver = new IntersectionObserver(
    (elementCaptured)=>{
        console.log(elementCaptured);
        if(elementCaptured[0].isIntersecting) {
            elementCaptured[0].target.classList.add(animationImage);
            imageObserver.unobserve(elementCaptured[0].target);
        }
    },{
        threshold: 0.8
    }
);

let spotyContObserver = new IntersectionObserver(
    (elementCaptured)=>{
        if(elementCaptured[0].isIntersecting){
            elementCaptured[0].target.classList.add(animationSpoty);
            spotyContObserver.unobserve(elementCaptured[0].target);
        }       
    },{
        threshold: 0.7
    }
);

// Activating the observers based on an html element.
// titleObserver.observe(tittle);
imageArray.forEach(element => {
    imageObserver.observe(element);
});

spotyArray.forEach(element =>{
    spotyContObserver.observe(element);
});



