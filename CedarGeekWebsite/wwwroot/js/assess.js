// Assessment Stuff
var questions = [
    "I am assertive, demanding, and decisive.",
    "I enjoy doing multiple tasks at once.",
    "I thrive in a challenge-based environment.",
    "I think about tasks more than others or myself.",
    "I am motivated by accomplishment and authority.",
    "I enjoy influencing and inspiring other people.",
    "I am optimistic about others.",
    "I tend to be the life of the party.",
    "I think about motivating people.",
    "I am motivated by recognition and approval.",
    "I thrive in consistent environments.",
    "I prefer specifics over generalizations.",
    "I enjoy small groups of people.",
    "I prefer being a member of a team.",
    "I am motivated by stability and support.",
    "I typically do not take big risks.",
    "I love tasks, order, and details.",
    "I am right most of the time.",
    "I comply with clearly defined rules.",
    "I am motivated by quality and correctness.",
    "I like to organize people, tasks, and events.",
    "I would like to start churches in places where they do not presently exist.",
    "I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials.",
    "I enjoy challenging people’s perspective of God by using various forms of art.",
    "I can readily distinguish between spiritual truth and error, good and evil.",
    "I tend to see the potential in people.",
    "I communicate the gospel to others with clarity and effectiveness.",
    "I find it natural and easy to trust God to answer my prayers.",
    "I give liberally and joyfully to people in financial need or to projects requiring support.",
    "I enjoy working behind the scenes to support the work of others.",
    "I view my home as a place to minister to people in need.",
    "I take prayer requests from others and consistently pray for them.",
    "I am approached by people who want to know my perspective on a passage or biblical truth.",
    "I can motivate others to accomplish a goal.",
    "I empathize with hurting people and desire to help them in the healing process.",
    "I can speak in a way that results in conviction and change in the lives of others.",
    "I enjoy spending time nurturing and caring for others.",
    "I can communicate God’s word effectively.",
    "I am often sought out by others for advice about spiritual or personal matters.",
    "I am careful, thorough, and skilled at managing details.",
    "I am attracted to the idea of serving in another country or ethnic community.",
    "I am skilled in working with different kinds of tools.",
    "I enjoy developing and using my artistic skills (art, drama, music, photography, etc.)",
    "I frequently can judge a person’s character based upon first impressions.",
    "I enjoy reassuring and strengthening those who are discouraged.",
    "I consistently look for opportunities to build relationships with non-Christians.",
    "I have confidence in God’s continuing provision and help, even in difficult times.",
    "I give more than a tithe so that Kingdom work can be accomplished.",
    "I enjoy doing routine tasks that support the ministry.",
    "I enjoy meeting new people and helping them feel welcomed.",
    "I enjoy praying for long periods of time and receive leadings as to what God wants me to pray for.",
    "I receive information from the Spirit that I did not acquire through natural means.",
    "I am able to influence others to achieve a vision.",
    "I can patiently support those going through painful experiences as they try to stabilize their lives.",
    "I feel responsible to confront others with the truth.",
    "I have compassion for wandering believers and want to protect them.",
    "I can spend time in study knowing that presenting truth will make a difference in the lives of people.",
    "I can often find simple, practical solutions in the midst of conflict or confusion.",
    "I can clarify goals and develop strategies or plans to accomplish them.",
    "I am willing to take an active part in starting a new church.",
    "I enjoy making things for use in ministry.",
    "I help people understand themselves, their relationships, and God better through artistic expression.",
    "I can see through phoniness or deceit before it is evident to others.",
    "I give hope to others by directing them to the promises of God.",
    "I am effective at adapting the gospel message so that it connects with an individual’s felt need.",
    "I believe that God will help me to accomplish great things.",
    "I manage my money well to free more of it for giving.",
    "I willingly take on a variety of odd jobs around the church to meet the needs of others.",
    "I genuinely believe the Lord directs strangers to me who need to get connected to others.",
    "I am conscious of ministering to others as I pray.",
    "I am committed to and schedule blocks of time for reading and studying Scripture to understand biblical truth fully and accurately.",
    "I can adjust my leadership style to bring out the best in others.",
    "I enjoy helping people sometimes regarding as undeserving or beyond help.",
    "I boldly expose cultural trends, teachings, or events, which contradict biblical principles.",
    "I like to provide guidance for the whole person – relationally, emotionally, spiritually, etc.",
    "I pay close attention to the words, phrases, and meanings of those who teach.",
    "I can easily select the most effective course of action from among several alternatives.",
    "I can identify and effectively use the resources needed to accomplish tasks.",
    "I can adapt well to different cultures and surroundings.",
    "I can visualize how something should be constructed before I build it.",
    "I like finding new and fresh ways of communicating God’s truth.",
    "I tend to see rightness or wrongness in situations.",
    "I reassure those who need to take courageous action in their faith, family, or life.",
    "I invite those who do not currently follow Christ to accept Christ as their Savior.",
    "I trust God in circumstances where success cannot be guaranteed by human effort alone.",
    "I try to limit my lifestyle to give away a higher percentage of my income.",
    "I see spiritual significance in doing practical tasks.",
    "I like to create a place where people do not feel that they are alone.",
    "I pray with confidence because I know that God works in response to prayer.",
    "I have insight or just know something to be true.",
    "I set goals and manage people and resources effectively to accomplish them.",
    "I have compassion for hurting people.",
    "I see most actions as right or wrong and feel the need to correct the wrong.",
    "I can faithfully provide long-term support and concern for others.",
    "I like to take a systematic approach to my study of the Bible.",
    "I can anticipate the likely consequences of an individual’s or a group’s action.",
    "I like to help organizations or groups become more efficient.",
    "I can relate to others in culturally sensitive ways.",
    "I honor God with my handcrafted gifts.",
    "I apply various artistic expressions to communicate God’s truth.",
    "I receive affirmation from others concerning the reliability of my insights or perceptions.",
    "I strengthen those who are wavering in their faith.",
    "I openly tell people that I am a Christ follower and want them to ask me about my faith.",
    "I am convinced of God’s daily presence and action in my life.",
    "I like knowing that my financial support makes a real difference in the lives and ministries of God’s people.",
    "I like to find small things that need to be done and often do them without being asked.",
    "I enjoy entertaining people and opening my home to others.",
    "When I hear about needy situations, I feel burdened to pray.",
    "I have suddenly known some things about others but did not know how I knew them.",
    "I influence others to perform to the best of their capability.",
    "I can look beyond a person’s handicaps or problems to see a life that matters to God.",
    "I like people who are honest and will speak the truth.",
    "I enjoy giving guidance and practical support to a small group of people.",
    "I can communicate scripture in ways that motivate others to study and to want to learn more.",
    "I give practical advice to help others through complicated situations.",
    "Young children and babies excite me. I would like to work with them.",
    "I can build strong relationships with teenagers. They often open their hearts to me.",
    "I get nervous in large crowds or being the center of attention.",
    "If a Dream Team requires it for safety reasons, I am willing to provide a background check.",
    "I have a talent for music, and I would love to share it.",
    "I would prefer to help out during a service.",
    "I can help out during the week.",
    "If a Dream Team requires it, I am willing to take extra time for additional training.",
    "I thrive on building new relationships.",
    "I want to help other people grow.",
    "I am a licensed medical professional."
];
var answers;
var current;
var sequence;
var start = 0;
var finish = 20;
var FinalGiftList;
var FinalGiftScores;
var Profile;
var PrimaryProfile;

function GetAssessment(type) {
    var Success = false;
    var DiscStart = true;
    switch (type) {
        case "disc":
            Success = NewAssessment("Disc");
            break;
        case "gift":
            Success = NewAssessment("Gift");
            DiscStart = false;
            break;
        case "both":
            Success = NewAssessment("Both");
            break;
    }
    if (Success) {
        current = 0;
        document.getElementById('examtype').style.display = "none";
        if (DiscStart) {
            document.getElementById('answerdisc').style.display = "flex";
        }
        else {
            document.getElementById('answersga').style.display = "flex";
        }
        return AskNext();
        //high next: turn off "assessment type" buttons and start "exam buttons"
    }
    else {
        return "Coding Error";
    }
}                    // Done
function NewAssessment(typeAsString) {
    switch (typeAsString) {
        case "Disc":
            answers = [0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // includes only the DISC questions
            break;
        case "Gift":
            answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0]; // includes gift assessment and bonus questions
            start = 20;
            finish = 126;
            break;
        case "Both":
            answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0]; // includes all questions
            finish = 126;
            break;
        default:
            answers = [];
            finish = 0;
            break;
    }
    // ensure that the switch did not fail, then randomize the sequence
    if (finish !== 0) {
        RandomizeSequence();
        return true;
    }
    else {
        return false;
    }
}            // Done
function RandomizeSequence() {
    // duplicate the sequence to a temporary variable with the numbers of each index.
    var scramble = [];
    for (var i = start; i < finish; i++) {
        scramble.push(i);
    }

    // take a random number between 0 and length of temporary array.
    // Still need to be able to remove duplicates
    sequence = [];
    while (scramble.length > 0) {
        var len = scramble.length;
        var rand = Math.floor(Math.random() * len);
        sequence.push(scramble[rand]);
        scramble.splice(rand, 1);
    }
}                    // Done
function AskNext() {
    return questions[sequence[current]];
}                              // Done
function AnswerQuestion(score) {
    answers[sequence[current]] = score;
    current++; // move to next question
    if (current < sequence.length) {
        return AskNext();
    }
    else {
        return FinalizeExam();
    }
}                  // Done

function FinalizeExam() {
    document.getElementById('answerdisc').style.display = "none";
    document.getElementById('answersga').style.display = "none";

    var takingdisc = false;
    var takinggift = false;

    var DiscParentScores = [0, 0, 0, 0];
    var GiftScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var OptionAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // manipulate all answers to score:
    for (var i = 0; i < answers.lenth; i++) {
        if (i < 20) {
            //DISC Answer
            DiscParentScores[i / 4] += answers[i];
        }
        else if (i < 115) {
            // SGA Answer
            var minusDisc = i - 20;
            GiftScores[minusDisc % 19] += answers[i];
        }
        else {
            // Option Answer
            answers[i] -= 3; // adjust the number, as this affects actual scores. {-2, -1, 0, 1, 2}
            var OptOnly = i - 115;
            OptionAnswers[OptOnly] = answers[i];
        }
    }

    if (takingdisc) {
        if (!takinggift) {
            return FinalizeDisc(DiscParentScores);
        }
        else {
            return FinalizeBoth(DiscParentScores, GiftScores);
        }
    }
    else {
        return FinalizeGifts(GiftScores);
    }
}                         // Needs Tested
function FinalizeDisc(discScores) {
    // find the top two scores in DISC letters
    var tempScoreList = [];
    var Letters = ["D", "I", "S", "C"];
    var FinalLetters = [];
    for (var primary = 0; primary < 4; primary++) {
        var success = false;
        for (var secondary = 0; secondary < tempScoreList.length; secondary++) {
            if (discScores[primary] >= tempScoreList[secondary]) {
                // insert at secondary, success = true, break;
                // must save both the letter and the score, or tempscorelists will always be 0 when comparing.
                FinalLetters.splice(secondary, 0, Letters[primary]);
                tempScoreList.splice(secondary, 0, discScores[primary]);
                success = true;
                break;
            }
        }
        if (!success) { // if insert was unsuccessful, add to the end.
            // must save both the letter and the score, or tempscorelists will always be 0 when comparing.
            FinalLetters.push(Letters[primary]);
            tempScoreList.push(discScores[primary]);
        }
    }
    // Select the proper Profile.
    switch (FinalLetters[0]) {
        case "D":
            PrimaryProfile = dominant;
            switch (FinalLetters[1]) {
                case "I":
                    Profile = DI;
                    break;
                case "S":
                    Profile = DS;
                    break;
                default:
                    Profile = DC;
                    break;
            }
            break;
        case "I":
            PrimaryProfile = influencer;
            switch (FinalLetters[1]) {
                case "D":
                    Profile = ID;
                    break;
                case "S":
                    Profile = IS;
                    break;
                default:
                    Profile = IC;
                    break;
            }
            break;
        case "S":
            PrimaryProfile = steady;
            switch (FinalLetters[1]) {
                case "D":
                    Profile = SD;
                    break;
                case "I":
                    Profile = SI;
                    break;
                default:
                    Profile = SC;
                    break;
            }
            break;
        default:
            PrimaryProfile = conscientious;
            switch (FinalLetters[1]) {
                case "D":
                    Profile = CD;
                    break;
                case "I":
                    Profile = CI;
                    break;
                default:
                    Profile = CS;
                    break;
            }
            break;
    }
    // todo add type from below to profile.
    return "Your DISC Personality Type is " + FinalLetters[0] + " / " + FinalLetters[1];
    // todo add "learn more" button
}               // Needs Tested
function FinalizeGifts(giftScores) {
    var GiftList = [
        "Administration",
        "Apostleship",
        "Craftsmanship",
        "Creative Communication",
        "Discernment",
        "Encouragement",
        "Evangelism",
        "Faith",
        "Giving",
        "Helps",
        "Hospitality",
        "Intercession",
        "Knowledge",
        "Leadership",
        "Mercy",
        "Prophesy",
        "Shepherd / Pastor",
        "Teaching",
        "Wisdom"
    ]
    var FinalGifts = [];
    var tempGiftScores = [];
    for (var primary = 0; primary < 19; primary++) {
        var success = false;
        for (var secondary = 0; secondary < tempGiftScores.length; secondary++) {
            FinalGifts.splice(secondary, 0, GiftList[primary]);
            tempGiftScores.splice(secondary, 0, giftScores[primary]);
            success = true;
            break;
        }
        if (!success) {
            FinalGifts.push(GiftList[primary]);
            tempGiftScores.push(discScores[primary]);
        }
    }
    // Save the array to the page for further manipulation
    FinalGiftList = FinalGifts;
    // and return the most prominent.
    return "Your most prominent Spiritual Gift is " + FinalGifts[0];
    // todo add "learn more" button, "see all" button, and "optimal team placement" button
}              // Needs Tested
function FinalizeBoth(discscores, giftscores) {
    FinalizeDisc(discscores);
    return FinalizeGifts(giftscores);
}   // Needs Tested
function FinalizePlacement() {
    // Adjust Gifts from DISC
    // Sort Teams.
    // Adjust Teams from DISC
    // Adjust Teams from Options

}
function AdjustGiftsFromDisc() {
    var GiftAdjusters = PrimaryProfile.gifts;
    var GiftAdjusters2 = Profile.gifts;

    for (var i = 0; i < GiftAdjusters.length; i++) {
        
    }
}



// Sort the teams, then sort everything based on scores














// Invokable Functions
function TakeExam() {
    document.getElementById('examopt').style.display = "none";
    document.getElementById('examtake').style.display = "block";
    document.getElementById('notice').innerHTML = "Which Assessment would you like to take?";
}
function SkipExam() {
    document.getElementById('examopt').style.display = "none";
    document.getElementById('notice').innerHTML = "Oops! This item is not complete yet.";
    // todo what was your disc personality type? (with "I don't remember" button)
    // todo ask for s.g. sequence
    // todo offer button "I remember exact sequence" checkbox default = true
}


















// DISC PROFILES
var dominant = {
    name: "Dominance", description: "Direct and decisive; they are risk takers and problem solvers. They are more concerned with complementing tasks and winning than they are with gaining approval from people. Through the internal drive trends to make them insensitive to those around them, \"D’s\" are not afraid to challenge the status quo, and they thrive when it comes to developing new things. They need discipline to excel, and they respond to direct confrontation. The greatest fear of a \"D\" is to be taken advantage of, and even despite their possible weaknesses – which include an aversion to routine, a tendency to overstep authority, an argumentative nature, and a habit of taking on too much – they place a high value on time and use their innovative thinking to accomplish difficult tasks and conquer challenges.",
    gifts: [1, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, -1, 1, -1, 0, 0],
    teams: [1, 1, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, -1, -1, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1, 1]
};
var influencer = {
    name: "Influence", description: "Inspiring and impressive. Enthusiastic, optimistic, impulsive, and emotional – they tend to be creative problem solvers and excellent encouragers. They often have a large number of friends, but they can become more concerned with approval and popularity than with getting results. An \"I’s\" greatest fear is rejection, but they thrive when it comes to motivating others. Their positive sense of humor helps them negotiate conflicts. Though they can be inattentive to details and poor listeners, they can be great peacemakers and effective teammates when they control their feelings and minimize their urge to entertain and be the center of attention. They value lots of human touch and connection.",
    gifts: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 0, 1, -1, 0, -1, 1, 0],
    teams: [-1, 0, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, -1, 1, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, -1, 0, 0, 1, 0, -1, -1]
};
var steady = {
    name: "Steadiness", description: "Steady and more reserved. They do not like change, and they thrive in secure, non-threatening environments. They are often friendly and understanding as well as good listeners and loyal workers who are happy doing the same job consistently. With an incredible ability to forgive, reliable and dependable \"S’s\" tend to make the best friends. Their greatest fear, however, is loss of security, and their possible weaknesses naturally include not only resistance to change, but also difficulty adjusting to it. They can also be too sensitive to criticism and unable to establish priorities. In order to avoid being taken advantage of, \"S’s\" need to be stronger and learn how to say \"no.\" They also like to avoid the limelight, but when given an opportunity to genuinely help others, they will gladly rise to the occasion. They feel most valued with they have truly helped someone.",
    gifts: [-1, 0, 0, 0, 0, 1, -1, 0, 0, 1, 1, 0, 0, -1, 1, -1, 1, 0, 0],
    teams: [1, 1, -2, 1, 0, 1, -2, -2, -1, 1, -1, -2, 0, 0, 1, 1, -2, 1, -2, 0, -2, 1, -2, 1, 1, 0, -1, 1, -2, -1, 1, -2, -1, 1, 1, -1]
};
var conscientious = {
    name: "Conscientiousness", description: "Compliant and analytical. Careful and logical lines of thinking drive them forward, and accuracy is a top priority. They hold high standards and value systematic approaches to problem solving. Though they thrive when given opportunities to find solutions, they tend to ignore the feelings of others and can often be critical and downright crabby. Verbalizing feelings is difficult for them, but when they are not bogged down in details and have clear-cut boundaries, they can be big assets to the team by providing calculated \"reality checks.\" The \"C’s\" biggest fear is criticism, and their need for perfection is often a weakness, as is their tendency to give in when in the midst of an argument. However, they are thorough in all activities and can bring a conscientious, even-tempered element to the team that will provide solid grounding. They value being correct.",
    gifts: [1, 0, 0, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, -1, 0, 0],
    teams: [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,-1, 0, 0, 0, 0, -1, 0, -1, 0, -1, 0, 0, 0, 0, 1, 0, -1, 1, 0, -1, 2, -1, -1]
};
var DI = {
    parent: 0, pair: "D / I", description: "Curious concluders who place emphasis on the bottom line and work hard to reach their goals. They are more determined than they are inspirational, yet their high expectations and standards for themselves and those around them typically cause them to make quite an impact, motivating others to follow them. They have an array of interests and can become distracted by taking on too many projects. They often need to focus, prioritize and simply slow down. Because \"D/ I’s\" thrive on activity and forward motivation, they like to accomplish tasks through a large number of people.",
    gifts: [0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, -1, 0, -1, 0, 0],
    teams: [1, -1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, 1, 1, -1, 1, 0, -1, 0, 1, -1, 0, 1, -1, 0, 1, -1, 0, 1]
};
var DS = {
    parent: 0, pair: "D / S", description: "Achievers with an ability to persevere. They are more active than passive, but they possess a kind of calm sensitivity and steadiness that makes them good leaders. They seem to be people-oriented but can easily strive to accomplish goals with fierce determination that comes from strong internal drive, but they could benefit from contemplative and conservative thinking as well as spending more time focusing on relationships.",
    gifts: [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, -1, 0, 0, -1, 0, -1, 0, 0],
    teams: [1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 1, -1, 1, 0, -1, -1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0]
};
var DC = {
    parent: 0, pair: "D / C", description: "Challengers that can either be determined students or defiant critics. Being in charge is important to them, yet they care little about what others think so long as they get the job done. They have a great deal of foresight and examine every avenue to find the best solution. They prefer to work alone. Though they fear failure and the lack of influence, they are motivated by challenges and can often be excellent administrators. They can benefit from learning to relax and paying more attention to people.",
    gifts: [1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, -1, 0, -1, 0, 0],
    teams: [1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 1, 1, 0, 0, 0]
};
var ID = {
    parent: 1, pair: "I / D", description: "Persuaders who are outgoing and energetic. They enjoy large groups and use their power of influence to attain respect and convince people to follow their lead. Sometimes, they can be viewed as fidgety and nervous, but it comes from their need to be a part of challenges that have variety, freedom, and mobility. \"I/ D’s\" could benefit from learning to look before they leap and spending more time being studious and still. They make inspiring leaders and know how to get results from and through people.",
    gifts: [0, 0, 0, 0, 0, 1, 1, 0, -1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1],
    teams: [-1,-1, 2, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0]
};
var IS = {
    parent: 1, pair: "I / D", description: "Influential counselors who love people, and it’s no surprise that people love them. They live to please and serve, and they tend to be good listeners. Looking good and encouraging others is important to them, as is following through and being obedient. They often lack in the area of organization and can be more concerned with the people involved than they are with the task at hand. However, they can be center stage or behind the scenes with equal effectiveness, and they shine when it comes to influencing and helping others.",
    gifts: [-1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, -1, -1],
    teams: [-1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1,-1, 1, 1]
};
var IC = {
    parent: 1, pair: "I / D", description: "Inspiring, yet cautions assessors, who are excellent communicators through the combination of concerned awareness and appreciation of people. They excel in determining ways to improve production. The tend to be impatient and critical, and they can also be overly persuasive and too consumed by the desire to win. \"I/C’s\" like to work inside the box, and they could benefit from trying new things and caring less about what others think. This personality type often possesses a gift for teaching; they are generally dependable when it comes to paying attention to the details and getting the job done.",
    gifts: [1, 0,-1,-1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,-1, 0, 0, 1, 0],
    teams: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1,-1, 1,-1]
};
var SD = {
    parent: 1, pair: "S / D", description: "Quiet leaders, who can be counted on to get the job done. They perform better in small groups and do not enjoy speaking in front of crowds. Though they can be soft- and hard-hearted at the same time, they enjoy close relationships with people, being careful not to dominate them. Challenges motivate them, especially ones that allow them to take a systematic approach. \"S/D’s\" tend to be determined, persevering through time and struggles. They benefit from encouragement and positive relationships.",
    gifts: [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0,-1, 1,-1, 1, 0, 0],
    teams: [1, 1,-2, 1, 0, 1,-2,-2,-1, 1,-1,-2, 0, 0, 0, 1,-2, 0,-2, 0,-2, 0,-2, 1, 1, 0, -1,1,-2, -1,1,-2,-1, 1, 0,-1]
};
var SI = {
    parent: 1, pair: "S / I", description: "Inspirational counselors who exhibit warmth and sensitivity. Tolerant and forgiving, they have many friends because4 they accept and represent others well. Their social nature and desire to be likable and flexible make them inclined to be overly tolerant and non-confrontational. \"S/I’s\" will benefit from being more task-oriented and paying more attention to detail. Kind and considerate, they include others and inspire people to follow them. Words of affirmation go a long way with this personality type, and with the right motivation, they can be excellent team players.",
    gifts: [-1,-1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,-1, 1, 1, 0, 1, 0,-1],
    teams: [-1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,-1, 1,-1,-1, 1,-1,-1, 0, 1, 0]
};
var SC = {
    parent: 1, pair: "S / C", description: "Diplomatic and steady, as well as detail-oriented. Stable and contemplative, they like to weigh the evidence and discover the facts to come to a logical conclusion. More deliberate, they prefer to take their time, especially when the decision involves others. Possible weaknesses include being highly sensitive and unable to handle criticism, and they also need to be aware of the way they treat others. Operating best in precise and cause-worthy projects, the \"S/C\" can be a peacemaker; this makes them a loyal team member and friend.",
    gifts: [1, 0, 0, 0,-1,-1,-1, 0, 0, 0, 0, 0, 0, 0, 1,-1, 1, 0, 0],
    teams: [2, 0,-2, 0, 1, 0, 0,-2, 0, 2, 0,-2,-1, 0, 0, 0,-1, 0, 1, 0, 2, 0, 1, 0, 0, 0,-2, 1,-2,-2, 1,-2,-2,-2, 0, 0]
};
var CD = {
    parent: 1, pair: "C / D", description: "Attentive to the details. They tend to impress others by doing things right and stabilizing situations. Not considered aggressive or pushy, they enjoy both large and small crowds. Though they work well with people, they are sometimes too sensitive to what others think about them and their work. They could benefit from being more assertive and self-motivated. Often excellent judges of character, they easily trust those who meet their standards. They are moved by genuine and enthusiastic approval as well as concise and logical explanations.",
    gifts: [1, 1, 0, 0, 1,-1,-1, 0, 0, 0, 0, 0, 1,-1,-1, 0,-1, 0, 0],
    teams: [2, 0,-2, 0, 0, 0, 0,-1, 0, 0, 0,-2,-1,-1, 0, 1,-2, 1,-2, 0,-2, 0,-2, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0,-2, 0]
};
var CI = {
    parent: 1, pair: "C / I", description: "Systematic and stable. They tend to do one thing at a time – and do it right. Reserved and cautious, they would rather work behind the scenes to stay on track; however, they seldom take risks or try new things and naturally dislike sudden changes in their environments. Precisionists to the letter, they painstakingly require accuracy and fear criticism, which they equate with failure. Diligent workers, their motivation comes from serving others.",
    gifts: [1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1,-1,-1,-1,-1,-1, 1],
    teams: [1, 0,-1, 1, 0, 0, 1,-1, 0, 1, 0,-1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
};
var CS = {
    parent: 1, pair: "C / S", description: "Cautious and determined designers, who are consistently task-oriented and very aware of problems. Sometimes viewed as insensitive, they do care about individual people, but have a difficult time showing it. They often feel that they are the only ones who can do the job the way it needs to be done, but because of their administrative skills, they are able to bring plans for change and improvements to fruition. \"C/ D’s\" have a tendency to be serious and could benefit from being more optimistic and enthusiastic. Despite their natural drive to achieve, they should concentrate on developing healthy relationships and simply loving people.",
    gifts: [1,-1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,-1, 0, 0, 0],
    teams: [1, 1,-2, 1, 0, 1,-1,-2,-1, 0,-1,-2,-1,-1, 0, 1,-2, 1,-2, 0,-2, 0,-2, 1, 1, 0,-1,-2,-2,-1,-2,-2,-1, 1, 0,-1]
};
