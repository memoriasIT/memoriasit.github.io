function callPlayer(frame_id, func, args) {
    document.getElementById('whoami').scrollIntoView({
        behavior: 'smooth'
    });

    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() != 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }
    if (iframe) {
        // Frame exists, 
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }


}


window.addEventListener("load", function(){
    document.getElementById("closePopUp").onclick = function(){
        document.getElementById('popupVideo').className='z-50 overlay-oculto overlay';
    }


    document.getElementById("videoPopUp").onclick = function(){
        document.getElementById('popupVideo').className='z-50 overlay-visible overlay';
    }

});


