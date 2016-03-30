var ctrl = new ScrollMagic.Controller();

var height = ctrl.info('size') / 2;

var intPhrase = 0;
var speech = [
   "Hi I am Aaron, Moses' brother.",
   "I served as the first high priest for the Israelites.",
   "I'm here to tell you about some of the sacrifices I learned to prepare for Jehovah God.",
   "Welcome to the tabernacle. Let's get started."
];
var animations = [
   [],
   [],
   [],
   []
   //["MOVE_PRIEST_LEFT", "MOVE_SPEECH_LEFT", "FADE_IN_OFFERINGS"]
]

function loadAnimations(anime) {
   for (var i = 0; i < anime.length; i = i + 1) {
      if (anime[i] === "MOVE_PRIEST_LEFT") {
         TweenMax.to("#aaron", 1, {x: "-=500"});
      }
      if (anime[i] === "MOVE_SPEECH_LEFT") {
         TweenMax.to(".thought-bubble", 1, {x: "-=500"});
      }
      if (anime[i] === "FADE_IN_OFFERINGS") {
         TweenMax.from("#sacrifices", 1, {alpha: 0});
      }
   }
}

function speak(strWords) {
   $(".speech").text(strWords);
   TweenMax.from(".speech", 1, {alpha: 0, y: "+=50"});
}

function main() {
   // initiate speech
   speak(speech[intPhrase]);
}
main();

$('.nextphrase').on('click', function(e) {
   intPhrase = intPhrase + 1;
   if (intPhrase < speech.length) {
      speak(speech[intPhrase]);
      loadAnimations(animations[intPhrase]);
   } else {
      speak("Click 'more' to start again.");
      intPhrase = -1;
   }
});