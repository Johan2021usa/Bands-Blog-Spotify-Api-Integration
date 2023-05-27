window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const spotyList = [
        "https://open.spotify.com/track/4EKCLeFN5fRpDekjs2uquI?si=64680b3d7b384edb",
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

/**
 * To animate what the user sees we need to use:
 * Intersection observer
 */

// Elements to be observed
let tittle = document.querySelector('header h1');
let imageArray = document.querySelectorAll('.section-band img');
let spotyArray = document.querySelectorAll('.spoty-div');


// Mecanism that observes
let observer1 = new IntersectionObserver(
    (elementCaptured) =>{
        if(elementCaptured[0].isIntersecting){
            elementCaptured[0].target.classList.add(animationTittle);
            /**
             * As soon as the observer has started the animation, we need to stop it,
             * to do so, we can use the method: unobserve();
             *  */ 
            observer1.unobserve(elementCaptured[0].target);
        }else{
            elementCaptured[0].target.classList.remove(animationTittle);
        }
    }
);

let observer2 = new IntersectionObserver(
    (elementCaptured)=>{
        console.log(elementCaptured);
        elementCaptured[0].isIntersecting ? 
        (elementCaptured[0].target.classList.add(animationImage), 
            observer2.unobserve(elementCaptured[0].target)) :
        (elementCaptured[0].target.classList.remove(animationImage) );
    }
);

let observer3 = new IntersectionObserver(
    (elementCaptured)=>{
        elementCaptured[0].isIntersecting ?
        (elementCaptured[0].target.classList.add(animationSpoty),
            observer3.unobserve(elementCaptured[0].target)):
        (elementCaptured[0].target,classList.remove(animationSpoty));
    }
);



let animationTittle = 'animationTittle';
let animationImage = 'animationImage';
let animationSpoty = 'animationSpoty';

observer1.observe(tittle);
let image = imageArray.forEach(element => {
    observer2.observe(element);
});

let spoty = spotyArray.forEach(element =>{
    observer3.observe(element);
});



