class NumberSequence {
    constructor(start,end) {
        this.current = start
        this.start = start;
        this.end = end;
    }
    next() {
        if(this.current <= this.end){
            this.current++;
        }
        else{
            this.current = undefined
            return undefined
        }
        
    }
}

class EvenNumberSequence extends NumberSequence {

    next() {
        if(this.current < this.end){
            if(this.current%2 == 0) {
                this.current=this.current+2;
            }
            else this.current++
        }
        else{
            this.current = undefined
            return undefined
        }
    }
}

class CustomNumberSequence extends NumberSequence {
    constructor(start,end,next) {
        super(start,end);
        this.current = start
        this.next = next()

    }
    // next() {
    //     this.next.bind(this)
    // }


}
const seq = new NumberSequence(1,5)

console.log('-----------------------NumberSequence-----------------------------')
console.log(seq)
seq.next();
console.log(seq)
seq.next();
console.log(seq)
seq.next();
console.log(seq)
seq.next();
console.log(seq)
seq.next();

console.log('-----------------------EvenNumberSequence-----------------------------')

const evenSeq = new EvenNumberSequence(1,6);
console.log(evenSeq)
evenSeq.next();
console.log(evenSeq)
evenSeq.next();
console.log(evenSeq)
evenSeq.next();
console.log(evenSeq)
evenSeq.next();
console.log(evenSeq)

console.log('-----------------------CustomNumberSequence-----------------------------')

function myNext(curr) {
    curr++
}

const customSeq = new CustomNumberSequence(1,6, myNext(3));
console.log(customSeq)
//customSeq.next();
console.log(customSeq)
