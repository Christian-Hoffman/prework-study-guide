var topics = ['Git and Bash Commands', 'HTML', 'CSS', 'JavaScript'];
var randomtopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
  }


function selectTopic(){
    if (randomtopic === 'Git and Bash Commands') {
        console.log("Let's study Git and Bash Commands!");
    } else if (randomtopic === 'HTML') {
        console.log("Let's study HTML!");
    } else if (randomtopic === 'CSS') {
        console.log("Let's study CSS!");
    } else if (randomtopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
    } else {
        console.log('Please try again!');
    }
}


console.log('Here are the topics that we learned through prework')

listTopics();

console.log('Which topic should we study first?')

selectTopic();