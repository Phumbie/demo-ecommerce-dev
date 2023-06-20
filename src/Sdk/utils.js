"use strict";

var utils = () => {
  function init(config) {
    // check if container and iframe is already rendered on the DOM
    // if (
    //   document.getElementById("zilla--widget-div") &&
    //   document.getElementById("zilla--frame-id")
    // ) {
    //   document.getElementById("zilla--widget-div").remove();
    // }

    const { onload, paymentLink, onevent } = config;
    let source = `${paymentLink}?type=sdk`;
    // var container = document.createElement("div");
    // container.setAttribute("id", "zilla--widget-div");
    // container.setAttribute("style", containerStyle);
    // document.body.insertBefore(container, document.body.childNodes[0]);

    var iframe = document.createElement("IFRAME");
    iframe.src = source;
    iframe.setAttribute("style", iframeStyle);
    iframe.setAttribute("id", "zilla--frame-id");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute("frameborder", 0);
    iframe.setAttribute("title", "Zilla checkout");
    iframe.setAttribute(
      "sandbox",
      "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups"
    );
    iframe.setAttribute("allow", "camera");
    iframe.setAttribute("allowusermedia", "true");
    iframe.onload = function() {
      var loader = document.getElementById("zilla-app-loader");
      if (iframe.style.visibility === "visible") {
        loader.style.display = "none";
      }

      onload();

      // dispatch LOADED event
      let event = new Event("message");
      let eventData = {
        type: "zilla.widget_loaded",
        data: { timestamp: Date.now() },
      };

      event["data"] = Object.assign({}, eventData);
      window.dispatchEvent(event);

      // manually trigger LOADED since
      // connect does not listen for events until the widget is opened
      onevent("LOADED", event.data.data);
    };

    // var loader = createLoader();
    // document.getElementById("zilla--widget-div").appendChild(loader);
    document.getElementById("zilla--widget-div").appendChild(iframe);
  }
  function encodePublicKey(key) {
    return window.btoa(unescape(encodeURIComponent(key)));
  }
  function turnOnVisibility() {
    var container = document.getElementById("zilla--widget-div");
    var frame = document.getElementById("zilla--frame-id");
    container.style.display = "flex";
    frame.style.display = "block";
    container.style.visibility = "visible";
    frame.style.visibility = "visible";
  }

  function turnOffVisibility() {
    if (document.getElementById("zilla--frame-id")) {
      var frame = document.getElementById("zilla--frame-id");
      frame.style.display = "none";
      frame.style.visibility = "hidden";
    }
    var container = document.getElementById("zilla--widget-div");
    container.classList.add("remove-widget");
    container.style.display = "none";
    container.style.visibility = "hidden";
  }

  function openWidget() {
    var container = document.getElementById("zilla--widget-div");
    var loader = document.getElementById("zilla-app-loader");
    var frame = document.getElementById("zilla--frame-id");
    container.style.visibility = "visible";
    container.style.display = "flex";
    loader.style.display = "block";

    setTimeout(() => {
      turnOnVisibility();
      frame.focus({ preventScroll: false });
      container.focus({ preventScroll: false });

      // dispatch OPENED event
      let event = new Event("message");
      let eventData = {
        type: "zilla.widget_opened",
        data: { timestamp: Date.now() },
      };

      event["data"] = Object.assign({}, eventData);
      window.dispatchEvent(event);
    }, 2000);
  }

  function closeWidget() {
    turnOffVisibility();
  }

  function createLoader() {
    let loaderDiv = document.createElement("div");
    let childDiv = document.createElement("div");
    loaderDiv.setAttribute("id", "zilla-app-loader");
    loaderDiv.classList.add("app-loader");
    childDiv.classList.add("app-loader__spinner");

    for (let i = 0; i < 12; i++) {
      let div = document.createElement("div");
      childDiv.appendChild(div);
    }
    loaderDiv.appendChild(childDiv);
    return loaderDiv;
  }
  function addLoader() {
    if (
      document.getElementById("zilla--widget-div") &&
      document.getElementById("zilla--frame-id")
    ) {
      document.getElementById("zilla--widget-div").remove();
    }
    var container = document.createElement("div");
    var loader = createLoader();
    container.setAttribute("id", "zilla--widget-div");
    container.setAttribute("style", containerStyle);
    document.body.insertBefore(container, document.body.childNodes[0]);
    document.getElementById("zilla--widget-div").appendChild(loader);
    container.style.visibility = "visible";
    container.style.display = "flex";
    loader.style.display = "block";
  }
  function addStyle() {
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = loaderStyles;
    document.head.appendChild(styleSheet);
  }

  return {
    openWidget: openWidget,
    closeWidget: closeWidget,
    createLoader: createLoader,
    addStyle: addStyle,
    addLoader: addLoader,
    encodePublicKey,
    init,
  };
};

module.exports = utils;

const containerStyle =
  "position:fixed;overflow: hidden;display: none;justify-content: center;align-items: center;z-index: 999999999;height: 100%;width: 100%;color: transparent;background: rgba(0, 0, 0, 0.6);visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;transition: all 0.3s linear;";
const iframeStyle =
  "position: fixed;overflow: hidden;z-index: 999999999;width: 100%;height: 100%;transition: opacity 0.3s ease 0s;visibility:hidden;margin: 0;top:0;right:0;bottom:0;left:0;";
const loaderStyles = `.app-loader {
  text-align: center;
  color: white;
  margin-right: -30px;
  width: 100%;
  position: fixed;
}
.remove-widget{
    opacity: 0;
}
@keyframes example {
    from {background-color: red;}
    to {background-color: yellow;}
  }
@-webkit-keyframes app-loader__spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.app-loader__spinner {
  position: relative;
  display: inline-block;
  width: fit-content;
}
.app-loader__spinner div {
  position: absolute;
  -webkit-animation: app-loader__spinner linear 1s infinite;
  animation: app-loader__spinner linear 1s infinite;
  background: white;
  width: 10px;
  height: 30px;
  border-radius: 40%;
  -webkit-transform-origin: 5px 65px;
  transform-origin: 5px 65px;
}
.app-loader__spinner div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation-delay: -0.916666666666667s;
  animation-delay: -0.916666666666667s;
}
.app-loader__spinner div:nth-child(2) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation-delay: -0.833333333333333s;
  animation-delay: -0.833333333333333s;
}
.app-loader__spinner div:nth-child(3) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.app-loader__spinner div:nth-child(4) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation-delay: -0.666666666666667s;
  animation-delay: -0.666666666666667s;
}
.app-loader__spinner div:nth-child(5) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -0.583333333333333s;
  animation-delay: -0.583333333333333s;
}
.app-loader__spinner div:nth-child(6) {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.app-loader__spinner div:nth-child(7) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation-delay: -0.416666666666667s;
  animation-delay: -0.416666666666667s;
}
.app-loader__spinner div:nth-child(8) {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  -webkit-animation-delay: -0.333333333333333s;
  animation-delay: -0.333333333333333s;
}
.app-loader__spinner div:nth-child(9) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.app-loader__spinner div:nth-child(10) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation-delay: -0.166666666666667s;
  animation-delay: -0.166666666666667s;
}
.app-loader__spinner div:nth-child(11) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  -webkit-animation-delay: -0.083333333333333s;
  animation-delay: -0.083333333333333s;
}
.app-loader__spinner div:nth-child(12) {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.app-loader__spinner {
  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
}
`;
