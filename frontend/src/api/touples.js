import quizQuestions from './csQuestions';
import _ from 'lodash';



 var tuples = [
              //these are the 21 category comparisons needed to compare all categories
              //the quiz questions array is called and shuffled
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[2].questions))],
              [(_.shuffle(quizQuestions[4].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[2].questions)), (_.shuffle(quizQuestions[3].questions))],
              [(_.shuffle(quizQuestions[1].questions)), (_.shuffle(quizQuestions[5].questions))],
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[4].questions))],
              [(_.shuffle(quizQuestions[3].questions)), (_.shuffle(quizQuestions[5].questions))],
              [(_.shuffle(quizQuestions[1].questions)), (_.shuffle(quizQuestions[4].questions))],
              [(_.shuffle(quizQuestions[5].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[1].questions)), (_.shuffle(quizQuestions[2].questions))],
              [(_.shuffle(quizQuestions[2].questions)), (_.shuffle(quizQuestions[4].questions))],
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[1].questions))],
              [(_.shuffle(quizQuestions[2].questions)), (_.shuffle(quizQuestions[5].questions))],
              [(_.shuffle(quizQuestions[1].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[3].questions)), (_.shuffle(quizQuestions[4].questions))],
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[5].questions))],
              [(_.shuffle(quizQuestions[2].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[1].questions)), (_.shuffle(quizQuestions[3].questions))],
              [(_.shuffle(quizQuestions[3].questions)), (_.shuffle(quizQuestions[6].questions))],
              [(_.shuffle(quizQuestions[4].questions)), (_.shuffle(quizQuestions[5].questions))],
              [(_.shuffle(quizQuestions[0].questions)), (_.shuffle(quizQuestions[3].questions))]

        ];


   

export default tuples;
