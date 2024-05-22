const emojis = ["🙃", "🏞️", "🎼", "🐰" ,"🪺", "💐", "😂", "🌻", "🍀", "🪻", "🪷", "🌿", "🏛️", "💕", "😭", "🤓", "☔", "🌤️"]

$(document).ready(function() {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    $('#title').text("Ms. Love's Class Guide " + randomEmoji);
    
});    