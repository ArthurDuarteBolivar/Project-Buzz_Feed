import { Component, OnInit } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json";
import { Location } from '@angular/common';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {
buttonPress(alias: string) {
  this.answers.push(alias)
  this.nextStep()
}


nextStep(){
  this.questionsIndex+=1
  if(this.questionsMaxIndex > this.questionsIndex){
    this.questionsSelected = this.questions[this.questionsIndex]
  }else{
    this.finished = true
    this.answers.filter(res => this.resultA = res.match("A"))
    this.answers.filter(res => this.resultB =  res.match("B"))
    if(this.resultA){
      this.result = quizz_questions.results.A
    }
    if(this.resultB){
      this.result = quizz_questions.results.B
    }
  }

}

return(){
  location.reload();
}


result: string = ""

resultA: any

resultB: any

  title: string = ''
  questions: any
  questionsSelected: any

  answers:string[] = []
  answersSelected: string = ''

  questionsIndex:number = 0

  questionsMaxIndex: number = 0


  finished: boolean = false

  constructor() { }

  ngOnInit(): void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title
      this.questions = quizz_questions.questions
      this.questionsSelected = this.questions[this.questionsIndex]
      this.questionsIndex = 0
      this.questionsMaxIndex = this.questions.length
    }
  }

}
