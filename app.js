const emojis = ["🙃", "🏞️", "🎼", "🐰" ,"🪺", "💐", "😂", "🌻", "🍀", "🪻", "🪷", "🌿", "🏛️", "💕", "😭", "🤓", "☔", "🌤️"]

$(document).ready(function() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    $('#title').text("Ms. Love's Class Guide " + randomEmoji);
});

var StackCards = function(element) {
    this.element = element;
    this.items = this.element.getElementsByClassName('js-stack-cards__item');
    this.scrollingListener = false;
    this.scrolling = false;
    initStackCardsEffect(this);
};

function initStackCardsEffect(element) {
    // we'll create the effect here
};

var stackCards = document.getElementsByClassName('js-stack-cards'),
intersectionObserverSupported = ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype),
reducedMotion = Util.osHasReducedMotion();

if(stackCards.length > 0 && intersectionObserverSupported && !reducedMotion) { 
    for(var i = 0; i < stackCards.length; i++) {
        new StackCards(stackCards[i]);
    }
}

function initStackCardsEffect(element) { // use Intersection Observer to trigger animation
    var observer = new IntersectionObserver(stackCardsCallback.bind(element));
    observer.observe(element.element);
};

function stackCardsCallback(entries) { // Intersection Observer callback
    if(entries[0].isIntersecting) { // cards inside viewport - add scroll listener
        if(this.scrollingListener) return; // listener for scroll event already added
        stackCardsInitEvent(this);
    } else { // cards not inside viewport - remove scroll listener
        if(!this.scrollingListener) return; // listener for scroll event already removed
        window.removeEventListener('scroll', this.scrollingListener);
        this.scrollingListener = false;
    }
};

function stackCardsInitEvent(element) {
    element.scrollingListener = stackCardsScrolling.bind(element);
    window.addEventListener('scroll', element.scrollingListener);
};

function stackCardsScrolling() {
    if(this.scrolling) return;
    this.scrolling = true;
    window.requestAnimationFrame(animateStackCards.bind(this));
};

function animateStackCards() {
    // apply transform values to different card elements
};


function animateStackCards() {
    var top = this.element.getBoundingClientRect().top;
    
    for(var i = 0; i < this.items.length; i++) {
        // cardTop/cardHeight/marginY are the css values for the card top position/height/Y offset
        var scrolling = this.cardTop - top - i*(this.cardHeight+this.marginY);
        if(scrolling > 0) { // card is fixed - we can scale it down
            this.items[i].setAttribute('style', 'transform: translateY('+this.marginY*i+'px) scale('+(this.cardHeight - scrolling*0.05)/this.cardHeight+');');
        }
    }
    
    this.scrolling = false;
};
