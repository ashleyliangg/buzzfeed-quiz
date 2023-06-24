var outcomes;
var numQuestions;

$.getJSON("./data.json", function(data) {
    outcomes = data.outcomes;
    numQuestions = data.questions.length;

    //create title
    const title = document.createElement('h1');
    title.textContent = data.title;
    $('header').append(title);

    let q = 1;
    //loop through each question, make question section, then loop through each answer option
    for (question in data.questions) {
        const qSection = document.createElement('section');
        const qTitle = `
        <div class='question-container'>
            <img class='question-img' src='${data.questions[question].question_img_url}'/>
            <h2>${data.questions[question].question_name}</h2>
        </div>
        `
        const qAnswer = document.createElement('div');
        qAnswer.classList.add("answer-choices");

        let a = 1;
        for (answer in data.questions[question].answers) {
            var choice;
            if (!data.questions[question].answers[answer].text) {
                choice = `
                <label id="${q.toString() + '-' + a.toString()}">
                    <input type="radio" name="${data.questions[question].name}" value="${data.questions[question].answers[answer].outcome}"/>
                    <img src="${data.questions[question].answers[answer].img_url}" />
                </label>
                `
            }
            else if (!data.questions[question].answers[answer].img_url) {
                choice = `
                <label id="${q.toString() + '-' + a.toString()}">
                    <div class="option-box">
                        ${data.questions[question].answers[answer].text}
                    </div>
                    <input type="radio" name="${data.questions[question].name}" value="${data.questions[question].answers[answer].outcome}"/>
                </label>
                `
            }
            else {
                choice = `
                <label id="${q.toString() + '-' + a.toString()}">
                    <img class="pic-text" src="${data.questions[question].answers[answer].img_url}" />
                    <p>${data.questions[question].answers[answer].text}</p>
                    <input type="radio" name="${data.questions[question].name}" value="${data.questions[question].answers[answer].outcome}"/>
                </label>
                `
            }
            qAnswer.innerHTML += choice;
            a += 1;
        }
        qSection.innerHTML = qTitle;
        qSection.append(qAnswer);

        document.querySelector("#question-list").append(qSection);
        q += 1;
    }

    // handles animations/states for onClick event answer choice
    $('label').on('click', function (e) {
        let id = e.currentTarget.id;
        let elem = id.split('-');
        let q = elem[0];
        let t = Number(elem[1]);
        let a = 1;
    
        let ans = document.getElementById(q + '-' + a.toString());
        while (ans != null) {
            ans.style.boxShadow = null;
            ans.style.opacity = 1;
            if (a == t) {
                ans.style.boxShadow = '0 0 20px rgba(95, 189, 97, 1)';
                ans.style.pointerEvents = 'none';
                ans.style.zIndex = 3;
                ans.classList.add("rotate");
            } else {
                ans.style.zIndex = 0;
                ans.style.pointerEvents = 'auto';
                ans.classList.remove("rotate");
                ans.style.opacity = .5;
            }
            a = a + 1;
            ans = document.getElementById(q + '-' + a.toString());
        }
    
    });
});

// handles submission: whether all questions answered or not
$('#submission').on('click', function (e) {
    choices = []
    var choices = $("input[type='radio']:checked").map(function (i, radio) {
        return $(radio).val();
    }).toArray();
    if (choices.length != numQuestions) {
        $('#submission').addClass("shake");
        setTimeout(function() {
            $('#submission').removeClass("shake");
        }, 1000);

        $("html, body").animate({
            scrollTop: 
            $('html, body').get(0).scrollHeight
        }, 1000);

        $("#error").show();
    }
    else {
        $("#error").hide();
        choiceMap = new Map()

        let maxCount = 0;
        let maxAns;
        for (let i = 0; i < choices.length; i++) {
            const key = choices[i]
            const count = (choiceMap[key] = (choiceMap[key] || 0) + 1);
            if (count > maxCount) {
                maxCount = count;
                maxAns = key;
            }
        }

        //module answer
        $('#modal-img').attr("src", outcomes[maxAns].img);
        $('#modal-answer').text(outcomes[maxAns].text);

        $('#myModal').css('display', 'block');
        $('#myModal').addClass("drop");
        setTimeout(function() {
            $('#myModal').removeClass("drop");
        }, 1000);
    }
});

$('#close-btn').on('click', function(e) {
    $('#myModal').css('display', 'none');
});

