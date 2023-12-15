function shakeMagic8Ball() {
    const question = prompt('Ask the Magic 8-Ball a question');
    if (question === null) {
        document.getElementById('response-text').innerText = 'Please Ask a Question'
        document.getElementById('response-text').classList = 'text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //Fix later
        return
    }

    if (!question.trim()) {
        alert('Please enter a valid question!')
        return
    }

    const randomnumber = Math.floor(Math.random() * 8);
    let answer, image, color;

    switch (randomnumber) {
        case 0:
            answer = "Yes";
            image = "yes-image.jpg" //Change this!!;
            color = "text-success";
            break;

        case 1:
            answer = "No";
            image = "no-image.jpg" //Change this!!;
            color = "text-danger";
            break;

        case 2:
            answer = "Ask again later";
            image = "later-image.jpg" //Change this!!;
            color = "text-secondary";
            break;

        case 3:
            answer = "Maybe";
            image = "maybe-image.jpg" //Change this!!;
            color = "text-warning";
            break;

        case 4:
            answer = "Cannot predict now";
            image = "cannot-predict-image.jpg" //Change this!!;
            color = "text-muted";
            break;

        case 5:
            answer = "Don't count on it";
            image = "dont-count-on-it-image.jpg" //Change this!!;
            color = "text-danger";
            break;

        case 6:
            answer = "Most likely";
            image = "most-likely-image.jpg" //Change this!!;
            color = "text-success";
            break;

        case 7:
            answer = "Outlook not so good";
            image = "Outlook-not-good-image.jpg" //Change this!!;
            color = "text-danger";
            break;
    }

    const responseText = document.getElementById('response-text');
    responseText.innerText = answer;
    responseText.classList = `display-4 ${color}`;
    document.getElementById('response-image').src = image;

}