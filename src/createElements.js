let element = (function(){


    function createElement(elemName){
        return document.createElement(elemName);
    }

    function  newDiv(){
        return createElement('div');
    }

    function newButton(){
        return createElement('button');
    }

    function newLi(){
        return createElement('li');
    }

    function newUl(){
        return createElement('ul');
    }

    function newInput(){
        return createElement('input')
    }

    function newInputOfType(type){
        let newIn = newInput();
        newIn.setAttribute('type',type);
        return newIn;
    }

    function delElem(selector){
        document.querySelector(selector).remove();
    }



    return {newDiv,newButton,newLi,newUl,delElem,newInputOfType};

})()

export default element;