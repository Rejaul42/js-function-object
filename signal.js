function signal(value){
    if(value === 'red'){
        return 'You maybe in the danger';
    }
    else if(value === 'yellow'){
        return 'You should stop'
    }
    else if(value === 'green'){
        return 'You should cross the road'
    }
    else{
        return 'No activities'
    }
}
var action = signal('black');
console.log(action);