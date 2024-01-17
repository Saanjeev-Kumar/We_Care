import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {Router} from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-plasma-quiz',
  templateUrl: './plasma-quiz.component.html',
  styleUrls: ['./plasma-quiz.component.css']
})
export class PlasmaQuizComponent implements OnInit {

  quizzes: Quiz[] = [];
  currentQuiz = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;

  constructor(private quizService: QuizService, private router: Router) {
  }

  ngOnInit(): void {
     this.quizzes = this.quizService.getQuizzes();
  }

  onAnswer(option: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuiz++;
      this.answerSelected = false;
    },1000);

    if(option){
      this.correctAnswers++;
    }else{
      this.router.navigate(['/quiz-failed'])
      this.incorrectAnswers++;
    }
    if(this.correctAnswers === 8)
    {setTimeout(() => {
      this.router.navigate(['/register-plasma-donation']);
    },2000);

    }
  }

}
