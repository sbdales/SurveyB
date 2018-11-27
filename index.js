var json = {
    questions: [
        {
            name: "question 1",
            type: "text",
            title: "Question 1:",
            isRequired: true
        }, {
            name: "question 2",
            type: "text",
            title: "question 2:",
            isRequired: true
        }, {
            name: "question 3",
            type: "text",
            title: "Question 3:",
			isRequired: true
        }, {
            name: "question 4",
            type: "text",
            title: "Question 4:",
            isRequired: true,
        }, {
            name: "question 5",
            type: "text",
            title: "Question 5:",
            isRequired: true
        }, {
            name: "question 6",
            type: "text",
            title: "question 6:",
            isRequired: true
        }, {
            name: "question 7",
            type: "text",
            title: "Question 7:",
			isRequired: true
        }, {
            name: "question 8",
            type: "text",
            title: "Question 8:",
            isRequired: true,
        }, {
            name: "question 9",
            type: "text",
            title: "Question 9:",
			isRequired: true
        }, {
            name: "question 10",
            type: "text",
            title: "Question 10:",
            isRequired: true,
        },
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        window.location = "thankyou.html";
    });

$("#surveyElement").Survey({model: survey});