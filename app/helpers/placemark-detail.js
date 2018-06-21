import Ember from 'ember';
import { helper } from '@ember/component/helper';
import {htmlSafe} from '@ember/string';

export function placemarkDetail([value, ...rest]) {
    let answer, markup, question, cascadeJson, optionJson, cascadeString = "",
        questionType, imageSrcAttr, signatureJson, photoJson, cartoQuestionType,
        self=this;
   
    questionType = value.questionType;
    question = 'what is your name';
    answer = 'Bogere Goldsoft';
    
    //final result of helper.
    markup = '<div class= "defListWrap"><h4>'
              +  question + ':</h4><div>' +
              answer + '</div></div>';
    // to stop the XSS vulnerability while uisng htmlSafe... 
    //let  safeMarkup = Ember.Handlebars.Utils.escapeExpression(markup);
    //return htmlSafe(safeMarkup) //but it z cming from the server n trusted thus no need to escape it.
    return htmlSafe(markup)
}

export default helper(placemarkDetail);
