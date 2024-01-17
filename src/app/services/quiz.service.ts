import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz[] =  [
    {
      question: "Have you tested postive for COVID-19 in last 120 days?",
      answer:[
        {option: "Yes" , correct: true},
        {option: "No" , correct: false}
      ]
    },
    {
      question: "Do you have Diabetes / High BP / Thryoid?",
      answer:[
        {option: "Yes" , correct: false},
        {option: "No" , correct: true}
      ]
    },
    {
      question: "Is latest COVID NEGATIVE test in the last two weeks ?",
      answer:[
        {option: "Yes" , correct: true},
        {option: "No" , correct: false}
      ]
    },{
      question: "Is your age between 18 and 65 ?",
      answer:[
        {option: "Yes" , correct: true},
        {option: "No" , correct: false}
      ]
    },
    {
      question: "Have you received plasma?",
      answer:[
        {option: "Yes" , correct: false},
        {option: "No" , correct: true}
      ]
    },
    {
      question: "Have you recovered from multiple symptoms from like(fever,cough,cold,throat pain) ?",
      answer:[
        {option: "Yes" , correct: true},
        {option: "No" , correct: false}
      ]
    },
    {
      question: "Is your weight above 55 kgs?",
      answer:[
        {option: "Yes" , correct: true},
        {option: "No" , correct: false}
      ]
    },
    {
      question: "Have you had the COVID vaccine?",
      answer:[
        {option: "Yes" , correct: false},
        {option: "No" , correct: true}
      ]
    }

  ]

  getQuizzes(){
    return this.quizzes;
  }
  constructor() { }
}
